import { AddIcon, EditIcon } from "@/assets/icons";
import Table from "@/components/Table";
import categoryService from "@/services/category.service";
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

interface Props {}

const ProductList = (props: Props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [filterValue, setFilterValue] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryDto[]>([]);

  const columns: ColumnType<any>[] = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      width: "17%",
      align: "center",
    },
    {
      title: "Danh mục",
      align: "center",
      render: (_: any, { category }: ProductDto) => (
        <Text>{category.name}</Text>
      ),
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
      render: (value) => (
        <div style={{ wordBreak: "break-all" }}>
          <span>{value}</span>
        </div>
      ),
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
          to={`/admin/product/${record._id}/edit`}
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
      product._id === data._id ? data : product
    );
    setProducts(mapping);
    message.success({ content: "Thực hiện thành công", key: "handling" });
  };

  const currency = (value: number) => {
    return value.toLocaleString("it-IT") + " đ";
  };

  const fetchCategoryData = async () => {
    const { data } = await categoryService.all();
    setCategories(data);
  };

  const fetchProductData = async () => {
    const { data } = await productServices.all();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  useEffect(() => {
    filterProduct();
  }, [filterValue]);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    setFilterValue(categoryParam);
  }, [searchParams]);

  const filterProduct = async () => {
    if (filterValue) {
      const { data } = await productServices.filter_by_category(filterValue);
      setProducts(data);
    } else {
      fetchProductData();
    }
  };

  const CategorySelect = () => {
    return (
      <Select
        style={{ width: 300 }}
        placeholder="Lựa chọn danh mục"
        onChange={setFilterValue}
        value={filterValue}
        disabled={!!searchParams.get("category")}
        allowClear
      >
        <Select.Option value={0}>Lựa chọn</Select.Option>
        {categories?.map((category) => (
          <Select.Option value={category.name_ascii} key={category.name_ascii}>
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
            pagination={{ pageSize: 10 }}
            onChange={console.log}
            columns={columns}
            loading={isLoading}
            dataSource={products}
          />
        </Col>
      </Row>
    </>
  );
};

export default ProductList;
