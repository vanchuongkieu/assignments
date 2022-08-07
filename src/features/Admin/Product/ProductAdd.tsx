import Upload from "@/components/Upload";
import categoryApi from "@/services/categories.service";
import { ProductDto } from "@/services/dtos/Product.dto";
import productServices from "@/services/product.services";
import productApi from "@/services/products.service";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const { Title, Text } = Typography;
const { TextArea } = Input;

type Props = {};

const ProductAdd = (props: Props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm<ProductDto>();
  const [file, setFile] = useState<File | null>(null);
  const { data: categories } = categoryApi.useCategoryListQuery();
  const [createProduct, { isError, isSuccess, error }] =
    productApi.useCreateProductMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/admin/product");
      message.success({ content: "Thực hiện thành công", key: "handling" });
    }
    if (isError) {
      message.error({
        content: (error as { data: string }).data,
        key: "handling",
      });
    }
  }, [isSuccess, isError]);

  const onFinish = (data: ProductDto) => {
    message.loading({ content: "Đang tải", key: "handling" });
    if (!file) {
      message.error({ content: "Vui lòng chọn hình ảnh", key: "handling" });
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    productServices.upload(formData).then(({ data: image }) => {
      createProduct({ ...data, image });
    });
  };

  const checkNewPirce = (_: any, value: number) => {
    const price = form.getFieldValue("price");
    return price && value >= price
      ? Promise.reject("Giá khuyễn mãi phải nhỏ hơn giá gốc")
      : Promise.resolve();
  };

  return (
    <>
      <Title level={3}>Thêm mới Sản phẩm</Title>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={[40, 15]}>
          <Col xs={{ span: 24 }} xxl={{ span: 8 }}>
            <Form.Item>
              <Upload onFile={setFile} />
            </Form.Item>
            <Form.Item
              name="short_description"
              rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
              label="Mô tả ngắn"
            >
              <TextArea rows={5} />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} xxl={{ span: 16 }}>
            <Text style={{ fontSize: 18 }}>Thông tin sản phẩm</Text>
            <Divider />
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
              label="Tên sản phẩm"
            >
              <Input />
            </Form.Item>
            <Row gutter={[15, 0]}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Form.Item
                  name="price"
                  rules={[
                    { required: true, message: "Vui lòng nhập thông tin" },
                  ]}
                  label="Giá gốc"
                >
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Form.Item
                  name="new_price"
                  label="Giá khuyến mãi"
                  rules={[
                    {
                      validator: checkNewPirce,
                    },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Form.Item
                  name="category"
                  rules={[
                    { required: true, message: "Vui lòng nhập thông tin" },
                  ]}
                  label="Danh mục"
                >
                  <Select placeholder="Lựa chọn danh mục" allowClear>
                    {categories?.map((category) => (
                      <Select.Option value={category._id} key={category._id}>
                        {category.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="outstanding_features"
              rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
              label="Đặc điểm nổi bật"
            >
              <TextArea rows={5} />
            </Form.Item>
            <Form.Item
              name="description"
              rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
              label="Mô tả dài"
            >
              <ReactQuill
                theme="snow"
                style={{ height: 300, marginBottom: 42 }}
              />
            </Form.Item>
            <Space style={{ paddingTop: 24 }}>
              <Button
                htmlType="submit"
                type="primary"
                style={{ width: "200px" }}
              >
                Thêm mới
              </Button>
              <Button type="default" onClick={() => form.resetFields()}>
                Tạo lại
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ProductAdd;
