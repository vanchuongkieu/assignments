import authApi from "@/services/auth.service";
import { UserDto } from "@/services/dtos/User.dto";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [onLogin] = authApi.useLoginMutation();

  const onFinish = (values: UserDto) => {
    onLogin(values).finally(() => {
      navigate("/");
      message.success("Đăng nhập thành công");
    });
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      <Form.Item label="Mật khẩu" name="password">
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
