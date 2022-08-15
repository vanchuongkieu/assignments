import Table from "@/components/Table";
import { OrderDto, OrderStatus } from "@/services/dtos/Order.dto";
import orderApi from "@/services/order.service";
import utils from "@/utils";
import {
  Button,
  Modal,
  Col,
  message,
  Row,
  Select,
  Space,
  Typography,
  Divider,
} from "antd";
import { ColumnType } from "antd/lib/table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

type Props = {};

const OrderList = (props: Props) => {
  const { data: orders, isLoading, isFetching } = orderApi.useListOrderQuery();
  const [filterValue, setFilterValue] = useState<OrderStatus | null>(null);
  const [dataSource, setDatasource] = useState<OrderDto[]>();
  const [
    updateStatusOrder,
    { isSuccess: isStatusSuccess, isError: isStatusError, error: statusError },
  ] = orderApi.useUpdateStatusOrderMutation();
  const [filterOrders, { data: filterData, isSuccess }] =
    orderApi.useFilterOrderMutation();
  const [orderDetail, setOrderDetail] = useState<OrderDto | null>(null);

  useEffect(() => {
    if (isStatusSuccess) {
      message.success("Thực hiện thành công");
    }
    if (isStatusError) {
      message.error((statusError as { data: string }).data);
    }
  }, [isStatusSuccess, isStatusError]);

  useEffect(() => {
    setDatasource(filterValue ? filterData : orders);
  }, [isFetching, isSuccess, filterValue]);

  const filterOrder = (value: OrderStatus) => {
    value && filterOrders({ status: value });
    setFilterValue(value);
  };

  const updateStatus = (record: OrderDto, value: OrderStatus) => {
    record.status = value;
    updateStatusOrder(record);
  };

  const StatusSelect = () => {
    return (
      <Select
        style={{ width: 300 }}
        placeholder="Lựa chọn trạng thái"
        value={filterValue}
        onChange={filterOrder}
        allowClear
      >
        <Select.Option value="">Lựa chọn</Select.Option>
        <Select.Option value="pending">Đơn hàng mới</Select.Option>
        <Select.Option value="progress">Tiếp nhận</Select.Option>
        <Select.Option value="shipping">Đang giao hàng</Select.Option>
        <Select.Option value="remove">Hủy đơn</Select.Option>
        <Select.Option value="done">Hoàn thành</Select.Option>
      </Select>
    );
  };

  const columns: ColumnType<any>[] = [
    {
      title: "Trạng thái đơn hàng",
      render: (_: any, record: OrderDto) => {
        return (
          <Select
            style={{ width: 150 }}
            placeholder="Trang thái"
            defaultValue={record.status}
            onChange={(value) => updateStatus(record, value)}
          >
            <Select.Option value="pending">Đơn hàng mới</Select.Option>
            <Select.Option value="progress">Tiếp nhận</Select.Option>
            <Select.Option value="shipping">Đang giao hàng</Select.Option>
            <Select.Option value="remove">Hủy đơn</Select.Option>
            <Select.Option value="done">Hoàn thành</Select.Option>
          </Select>
        );
      },
    },
    {
      title: "Người dặt",
      dataIndex: "name",
      width: "17%",
    },
    {
      title: "Điện thoại",
      dataIndex: "phone",
      width: "17%",
    },
    {
      title: "Địa chỉ",
      width: "30%",
      dataIndex: "address",
    },
    {
      title: "Giá trị đơn hàng",
      width: "10%",
      align: "right",
      render: (_: any, record: OrderDto) => {
        return <Text>{utils.currency(record.total)}</Text>;
      },
    },
    {
      title: "Chi tiết",
      align: "center",
      render: (_: any, record: OrderDto) => {
        return <Button onClick={() => setOrderDetail(record)}>Chi tiết</Button>;
      },
    },
  ];

  const orderDetailColumns: ColumnType<any>[] = [
    {
      title: "Sản phẩm",
      render: (_: any, record: any) => {
        return <Text>{record.product.name}</Text>;
      },
    },
    {
      title: "Giá tiền",
      align: "right",
      render: (_: any, record: any) => {
        return (
          <Text>
            {utils.currency(record.product.price)}
            {record.product.new_price > 0 && (
              <>
                <Divider type="vertical" />
                <small>{utils.currency(record.product.new_price)}</small>
              </>
            )}
          </Text>
        );
      },
    },
    {
      title: "Số lượng",
      render: (_: any, record: any) => {
        return <Text>{record.quantity}</Text>;
      },
    },
    {
      title: "Tổng tiền",
      align: "right",
      render: (_: any, record: OrderDto) => {
        return <Text>{utils.currency(record.total)}</Text>;
      },
    },
  ];

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
                <StatusSelect />
              </Space>
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

      <Modal
        title={`Thông tin đơn hàng #${orderDetail?._id}`}
        centered
        visible={!!orderDetail}
        onCancel={() => setOrderDetail(null)}
        footer={<Button onClick={() => setOrderDetail(null)}>Đóng</Button>}
        width="80vw"
      >
        {orderDetail && (
          <>
            <div>
              <strong>Người đặt đặt: </strong>
              {orderDetail.name}
            </div>
            <div>
              <strong>Số điện thoại </strong>
              {orderDetail.phone}
            </div>
            <div>
              <strong>Địa chỉ email: </strong>
              {orderDetail.email}
            </div>
            <div>
              <strong>Địa chỉ nhận hàng: </strong>
              {orderDetail.address}
            </div>
            <div>
              <strong>Ghi chú: </strong>
              {orderDetail.note}
            </div>
            <div style={{ margin: "15px 0" }}>
              <strong>Đơn hàng: </strong>
            </div>
            <Table
              pagination={false}
              columns={orderDetailColumns}
              dataSource={orderDetail.carts}
            />
            <div style={{ margin: "15px 0" }}>
              <strong>Giá trị đơn hàng: </strong>
              {utils.currency(orderDetail.total)}
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default OrderList;
