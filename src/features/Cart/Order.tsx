import { CaretLeftIcon } from "@/assets/icons";
import { OrderDto } from "@/services/dtos/Order.dto";
import orderApi from "@/services/order.service";
import utils from "@/utils";
import { Button, Form, Input, message } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartAction, CartSelector } from "./reducer";
import * as S from "./styled";

type Props = {};

const Order = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, total } = useSelector(CartSelector);
  const [onUserOrder, { isError, error, isSuccess }] =
    orderApi.useUserOrderMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      dispatch(cartAction.clear());
      message.success("Đặt hàng thành công");
    }
    if (isError) {
      message.error((error as { data: string }).data);
    }
  }, [isSuccess, isError]);

  const onFinish = (values: OrderDto) => {
    values.carts = carts;
    values.total = total;
    onUserOrder(values);
  };

  return (
    <S.Container>
      <S.Header>
        <Link to="/shopping-cart">
          <CaretLeftIcon />
          Giỏ hàng
        </Link>
        <span>Đặt hàng</span>
      </S.Header>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Họ và tên"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Địa chỉ email"
          name="email"
          rules={[
            { type: "email", message: "Vui lòng nhập email" },
            { required: true, message: "Vui lòng nhập thông tin" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Ghi chú" name="note">
          <Input.TextArea rows={5} />
        </Form.Item>
        <S.TotalPrice>
          <span>Tổng tiền tạm tính:</span>
          <h2>{utils.currency(total)}</h2>
        </S.TotalPrice>
        <S.ButtonGroup>
          <Button type="primary" htmlType="submit" danger>
            Đặt hàng
          </Button>
          <Button danger>
            <Link to="/">Chọn thêm sản phẩm khác</Link>
          </Button>
        </S.ButtonGroup>
      </Form>
    </S.Container>
  );
};

export default Order;
