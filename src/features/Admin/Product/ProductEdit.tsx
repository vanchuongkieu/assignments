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
import { useNavigate, useParams } from "react-router-dom";

const { Title, Text } = Typography;
const { TextArea } = Input;

type Props = {};

const ProductEdit = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm<ProductDto>();
  const [file, setFile] = useState<File | null>();
  const [isSubmit, setSubmit] = useState<boolean>(true);
  const { data: categories } = categoryApi.useCategoryListQuery();
  const { data: product, isLoading } = productApi.useProductSelectedIdQuery(id);
  const [updateProduct] = productApi.useUpdateProductMutation();

  useEffect(() => {
    form.setFieldsValue({ ...product });
  }, [isLoading]);

  const onFinish = async (data: ProductDto) => {
    let image = data.image;
    message.loading({ content: "Đang tải", key: "handling" });
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      const res = await productServices.upload(formData);
      image = res.data;
    }
    updateProduct({ ...data, _id: id, image }).finally(() => {
      navigate("/admin/product");
      message.success({ content: "Thực hiện thành công", key: "handling" });
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
      <Title level={3}>Cập nhật sản phẩm</Title>
      <Form
        form={form}
        layout="vertical"
        onChange={(x) => {
          setSubmit(false);
        }}
        onFinish={onFinish}
      >
        <Row gutter={[40, 15]}>
          <Col xs={{ span: 24 }} xxl={{ span: 8 }}>
            <Form.Item name="image">
              <Upload onFile={setFile} preview={product?.image} />
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
              <Col span={12}>
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
              <Col span={12}>
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
              <Col span={12}>
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
              <TextArea rows={5} />
            </Form.Item>
            <Space style={{ paddingTop: 24 }}>
              <Button
                htmlType="submit"
                type="primary"
                style={{ width: "200px" }}
                disabled={isSubmit}
              >
                Cập nhật
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ProductEdit;
