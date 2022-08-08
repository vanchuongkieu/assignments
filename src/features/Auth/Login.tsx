import authApi from "@/services/auth.service";
import { Button, Form, Input, message } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAction } from "./reducer";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [onLogin, { isError, error, isSuccess }] = authApi.useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/admin");
      message.success("Đăng nhập thành công");
      setTimeout(() => {
        dispatch(authAction.authenticated(true));
      }, 100);
    }
    if (isError) {
      message.error((error as { data: string }).data);
    }
  }, [isSuccess, isError]);

  return (
    <Form layout="vertical" onFinish={onLogin}>
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
        label="Mật khẩu"
        name="password"
        rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button block danger type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
