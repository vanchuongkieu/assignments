import { AddIcon, EditIcon } from "@/assets/icons";
import Table from "@/components/Table";
import categoryApi from "@/services/categories.service";
import { ProductDto } from "@/services/dtos/Product.dto";
import productApi from "@/services/products.service";
import utils from "@/utils";
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
import { Link } from "react-router-dom";
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
  const [filterValue, setFilterValue] = useState<string>("");
  const {
    data: products,
    isLoading,
    isFetching,
  } = productApi.useProductListQuery();
  const [filterProducts, { data: filterData, isFetching: isFiltered }] =
    productApi.useLazyFilterProductsQuery();
  const { data: categories } = categoryApi.useCategoryListQuery();
  const [updateStatus, { isError, isSuccess, error }] =
    productApi.useUpdateStatusMutation();
  const [dataSource, setDatasource] = useState<ProductDto[]>();

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
          {utils.currency(price)}
          {new_price > 0 && (
            <>
              <Divider type="vertical" />
              <small>{utils.currency(new_price)}</small>
            </>
          )}
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
          onChange={() => updateStatus(record)}
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

  useEffect(() => {
    if (isSuccess) {
      message.success("Thực hiện thành công");
    }
    if (isError) {
      message.error((error as { data: string }).data);
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    setDatasource(filterValue ? filterData : products);
  }, [isFetching, isFiltered, filterValue]);

  const filterProduct = (value: string) => {
    value && filterProducts(value);
    setFilterValue(value);
  };

  const CategorySelect = () => {
    return (
      <Select
        style={{ width: 300 }}
        placeholder="Lựa chọn danh mục"
        onChange={filterProduct}
        value={filterValue}
        allowClear
      >
        <Select.Option value="">Lựa chọn</Select.Option>
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
            columns={columns}
            loading={isLoading}
            dataSource={dataSource}
          />
        </Col>
      </Row>
    </>
  );
};

export default ProductList;
