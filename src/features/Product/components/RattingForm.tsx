import commentApi from "@/services/comment.service";
import { CommentDto } from "@/services/dtos/Comment.dto";
import { Button, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isFormModalSelector, productDetailAction } from "../reducer";
import * as S from "../styled";
import Ratting from "./Ratting";

type Props = {
  product?: string;
};

const RattingForm = ({ product }: Props) => {
  const dispatch = useDispatch();
  const [ratting, setRatting] = useState<number>(0);
  const { isModal, isRatting } = useSelector(isFormModalSelector);
  const [onRatting, { error, isError, isSuccess }] =
    commentApi.useRattingMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(productDetailAction.closeModal());
      message.success({
        content: (isRatting ? "Đánh giá" : "Đặt câu hỏi") + " thành công",
        key: "handling",
      });
    }
    if (isError) {
      message.error({
        content: (error as { data: string }).data,
        key: "handling",
      });
    }
  }, [isError, isSuccess]);

  const onFinish = (values: CommentDto) => {
    if (isRatting && ratting === 0) {
      message.error("Vui lòng chon đánh giá");
      return;
    }
    message.loading({ content: "Đang tải", key: "handling" });
    values.rate = ratting;
    values.product = product;
    onRatting(values);
  };

  return isModal ? (
    <S.RattingForm>
      <Form layout="vertical" onFinish={onFinish}>
        <div className="header">
          {isRatting ? "Đánh giá và Nhận xét" : "Hỏi và đáp"}
          <span onClick={() => dispatch(productDetailAction.closeModal())}>
            &times;
          </span>
        </div>
        <div className="content">
          <Form.Item
            label="Họ và tên"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
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
            label="Nhận xét"
            name="comment"
            rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
          >
            <Input.TextArea />
          </Form.Item>
          {isRatting && (
            <Form.Item label="Đánh giá" name="rate">
              <Ratting onValueChange={setRatting} />
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" danger>
              {isRatting ? "Gửi đánh giá và Nhận xét" : "Gửi câu hỏi"}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </S.RattingForm>
  ) : null;
};

export default RattingForm;
