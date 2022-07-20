import { AddIcon, EditIcon } from "@/assets/icons";
import Table from "@/components/Table";
import { CategoryDto } from "@/services/dtos/Category.dto";
import { ProductDto } from "@/services/dtos/Product.dto";
import productServices from "@/services/product.services";
import {
  Col,
  Divider,
  message,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from "antd";
import { ColumnType } from "antd/lib/table";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const { Title, Text } = Typography;

const SwitchCustom = styled(Switch)`
  &:not(.ant-switch-small) .ant-switch-handle {
    width: 14px;
    height: 14px;
    left: 2px;
    top: 2px;
  }

  &.ant-switch-small .ant-switch-handle {
    width: 10px;
    height: 10px;
    left: 1px;
    top: 1px;
  }

  & .ant-switch-handle {
    &:before {
      background-color: #000;
    }
  }

  border: 2px solid #000;
  background-image: none;
  background-color: #fff;

  &.ant-switch-checked {
    background-color: #fff;
    & .ant-switch-handle {
      left: calc(100% - 16px);
    }
    &.ant-switch-small .ant-switch-handle {
      left: calc(100% - 11px);
    }
  }
`;

interface Props {
  categories?: CategoryDto[];
}

const ProductList = ({ categories }: Props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [filterValue, setFilterValue] = useState<number>();

  const currency = (value: number) => {
    return value.toLocaleString("it-IT") + " đ";
  };

  const columns: ColumnType<any>[] = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Giá tiền",
      align: "center",
      render: (_: any, { price, new_price }: ProductDto) => (
        <Text>
          {currency(price)}
          <Divider type="vertical" />
          {new_price && currency(new_price)}
        </Text>
      ),
    },
    {
      title: "Mô tả",
      width: "30%",
      align: "center",
      dataIndex: "short_description",
      responsive: ["md"],
    },
    {
      title: "Ẩn/Hiện",
      width: "5%",
      align: "center",
      render: (_: any, record: ProductDto) => (
        <SwitchCustom
          size="small"
          checked={record.status}
          onChange={() => changeStatus(record)}
        />
      ),
    },
    {
      title: "Thao tác",
      align: "center",
      width: "10%",
      render: (_: any, record: ProductDto) => (
        <Link
          to={`/admin/product/${record.id}/edit`}
          style={{ height: 22, display: "flex", justifyContent: "center" }}
        >
          <EditIcon width={22} height={22} />
        </Link>
      ),
    },
  ];

  const changeStatus = async (values: ProductDto) => {
    message.loading({ content: "Đang tải", key: "handling" });
    const { data } = await productServices.edit({
      ...values,
      status: !values.status,
    });
    const mapping = products?.map((product) =>
      product.id === data.id ? data : product
    );
    setProducts(mapping);
    message.success({ content: "Thực hiện thành công", key: "handling" });
  };

  const fetchProductData = async () => {
    const { data } = await productServices.all();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    setFilterValue(Number(categoryParam));
    if (Number(categoryParam) > 4) {
      navigate("/admin/product");
    }
  }, [searchParams]);

  const filterProduct = (dataSource?: ProductDto[]) => {
    if (filterValue) {
      return dataSource?.filter(
        (data) => data.category === Number(filterValue)
      );
    }
    return dataSource;
  };

  const CategorySelect = () => {
    return (
      <Select
        style={{ width: 300 }}
        placeholder="Lựa chọn danh mục"
        onChange={setFilterValue}
        value={filterValue}
        disabled={!!searchParams.get("category")}
        defaultValue={0}
        allowClear
      >
        <Select.Option value={0}>Lựa chọn</Select.Option>
        {categories?.map((category) => (
          <Select.Option value={category.id} key={category.id}>
            {category.name}
          </Select.Option>
        ))}
      </Select>
    );
  };

  return (
    <>
      <Title level={3}>Danh sách sản phẩm</Title>
      <Row gutter={[0, 30]}>
        <Col span={24}>
          <Row align="middle" gutter={[15, 15]}>
            <Col xs={{ span: 4 }} xl={{ span: 2 }}>
              <Text strong>Bộ lọc:</Text>
            </Col>
            <Col xs={{ span: 6 }} xl={{ span: 8 }}>
              <Space direction="vertical">
                <Text>Danh mục sản phẩm</Text>
                <CategorySelect />
              </Space>
            </Col>
            <Col
              offset={12}
              xs={{ span: 2 }}
              xl={{ span: 2 }}
              style={{ textAlign: "right" }}
            >
              <Link to="/admin/product/new">
                <AddIcon width={40} height={40} fill="var(--info-2)" />
              </Link>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            loading={isLoading}
            dataSource={filterProduct(products)}
          />
        </Col>
      </Row>
    </>
  );
};

export default ProductList;
