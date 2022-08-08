import authApi from "@/services/auth.service";
import { Button, Form, Input, message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
  const navigate = useNavigate();
  const [onRegister, { isSuccess, isError, error }] =
    authApi.useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
      message.success("Đăng ký thành công");
    }
    if (isError) {
      message.error((error as { data: string }).data);
    }
  }, [isSuccess, isError]);

  return (
    <Form layout="vertical" onFinish={onRegister}>
      <Form.Item
        label="Họ và tên"
        name="name"
        rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Vui lòng nhập thông tin" },
          { type: "email", message: "Vui lòng nhập email" },
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
        label="Mật khẩu"
        name="password"
        rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
      >
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
