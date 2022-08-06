import authApi from "@/services/auth.service";
import { UserDto } from "@/services/dtos/User.dto";
import { Button, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
  const navigate = useNavigate();
  const [onRegister] = authApi.useRegisterMutation();

  const onFinish = (values: UserDto) => {
    onRegister(values).finally(() => {
      navigate("/login");
      message.success("Đăng ký thành công");
    });
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Họ và tên" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      <Form.Item label="Số điện thoại" name="phone">
        <Input />
      </Form.Item>
      <Form.Item label="Mật khẩu" name="password">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button block danger type="primary" htmlType="submit">
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
