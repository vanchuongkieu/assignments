import { EditIcon } from "@/assets/icons";
import Table from "@/components/Table";
import categoryService from "@/services/category.service";
import { CategoryDto } from "@/services/dtos/Category.dto";
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Row,
  Space,
  Typography,
} from "antd";
import { ColumnType } from "antd/lib/table";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const { Title } = Typography;

interface Props {}

const CategoryList = (props: Props) => {
  const [form] = Form.useForm<CategoryDto>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [editing, setEditing] = useState<CategoryDto | null>(null);
  const [categories, setCategories] = useState<CategoryDto[]>([]);

  const fetchCategoryData = async () => {
    const { data } = await categoryService.all();
    setCategories(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const columns: ColumnType<any>[] = [
    {
      title: "Tên danh mục",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Thao tác",
      align: "center",
      width: "10%",
      render: (_: any, record: CategoryDto) => (
        <a
          style={{ height: 22, display: "flex", justifyContent: "center" }}
          onClick={() => onEdit(record)}
        >
          <EditIcon width={22} height={22} />
        </a>
      ),
    },
  ];

  const onEdit = (record: CategoryDto) => {
    setEditing({ id: record.id, name: record.name });
    form.setFieldsValue(record);
  };

  const onCancelEdit = () => {
    setEditing(null);
    form.resetFields();
  };

  const onFinish = async (value: CategoryDto) => {
    message.loading({ content: "Đang tải", key: "handling" });
    if (editing) {
      await categoryService.edit({ ...editing, ...value });
      setEditing(null);
    } else {
      await categoryService.add(value);
    }
    form.resetFields();
    fetchCategoryData();
    message.success({ content: "Thực hiện thành công", key: "handling" });
  };

  return (
    <>
      <Row gutter={[0, 0]}>
        <Col span={24}>
          <Row align="middle" gutter={[15, 15]}>
            <Col span={12} style={{ textAlign: "left" }}>
              <Title level={3} style={{ margin: 0 }}>
                Danh sách danh mục
              </Title>
            </Col>
          </Row>
        </Col>
        <Form
          form={form}
          layout="inline"
          onFinish={onFinish}
          style={{ margin: "20px 0 10px" }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Vui lòng điền thông tin" }]}
            label="Tên danh mục"
            style={{ marginBottom: 0, height: 56 }}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                {editing ? "Cập nhật" : "Thêm mới"}
              </Button>
              <Button onClick={onCancelEdit}>Hủy</Button>
            </Space>
          </Form.Item>
        </Form>
        <Col span={24}>
          <Table
            columns={columns}
            loading={isLoading}
            dataSource={categories}
          />
        </Col>
      </Row>
    </>
  );
};

export default CategoryList;
