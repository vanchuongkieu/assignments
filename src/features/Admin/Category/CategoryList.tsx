import { EditIcon } from "@/assets/icons";
import Table from "@/components/Table";
import categoryApi from "@/services/categories.service";
import { CategoryDto } from "@/services/dtos/Category.dto";
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Row,
  Space,
  Switch,
  Typography,
} from "antd";
import { ColumnType } from "antd/lib/table";
import { useEffect, useState } from "react";
import styled from "styled-components";

const { Title } = Typography;

interface Props {}

const SwitchCustom = styled(Switch)`
  &:not(.ant-switch-small) .ant-switch-handle {
    width: 14px;
    height: 14px;
    left: 2px;
    top: 2px;
  }

  &.ant-switch-small .ant-switch-handle {
    width: 10px;
    height: 10px;
    left: 1px;
    top: 1px;
  }

  & .ant-switch-handle {
    &:before {
      background-color: #000;
    }
  }

  border: 2px solid #000;
  background-image: none;
  background-color: #fff;

  &.ant-switch-checked {
    background-color: #fff;
    & .ant-switch-handle {
      left: calc(100% - 16px);
    }
    &.ant-switch-small .ant-switch-handle {
      left: calc(100% - 11px);
    }
  }
`;

const CategoryList = (props: Props) => {
  const [form] = Form.useForm<CategoryDto>();
  const [isSubmit, setSubmit] = useState<boolean>(true);
  const [editing, setEditing] = useState<CategoryDto | null>(null);
  const { data: categories, isLoading } = categoryApi.useCategoryListQuery();
  const [
    updateCategory,
    { isSuccess: isUpdateSuccess, error: updateError, isError: isUpdateError },
  ] = categoryApi.useUpdateCategoryMutation();
  const [
    createCategory,
    { isSuccess: isCreateSuccess, error: createError, isError: isCreateError },
  ] = categoryApi.useCreateCategoryMutation();
  const [
    updateStatus,
    { isSuccess: isStatusSuccess, error: statusError, isError: isStatusError },
  ] = categoryApi.useUpdateCategoryStatusMutation();

  const columns: ColumnType<any>[] = [
    {
      title: "Tên danh mục",
      dataIndex: "name",
    },
    {
      title: "Ẩn/Hiện",
      width: "5%",
      align: "center",
      render: (_: any, record: CategoryDto) => (
        <SwitchCustom
          size="small"
          checked={record.status}
          onChange={() => updateStatus(record)}
        />
      ),
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

  useEffect(() => {
    if (isStatusSuccess) {
      form.resetFields();
      message.success("Thực hiện thành công");
    }
    if (isStatusError) {
      message.error((statusError as { data: string }).data);
    }
  }, [isStatusSuccess, isStatusError]);

  useEffect(() => {
    if (isUpdateSuccess || isCreateSuccess) {
      form.resetFields();
      message.success({ content: "Thực hiện thành công", key: "handling" });
    }
    if (isUpdateError) {
      message.error({
        content: (updateError as { data: string }).data,
        key: "handling",
      });
    }
    if (isCreateError) {
      message.error({
        content: (createError as { data: string }).data,
        key: "handling",
      });
    }
  }, [isUpdateSuccess, isCreateSuccess, isUpdateError, isCreateError]);

  const onEdit = (record: CategoryDto) => {
    form.setFieldsValue(record);
    setEditing(record);
  };

  const onCancelEdit = () => {
    setEditing(null);
    form.resetFields();
  };

  const onFinish = async (value: CategoryDto) => {
    message.loading({ content: "Đang tải", key: "handling" });
    if (!editing) {
      createCategory(value);
      return;
    }
    updateCategory({ ...editing, ...value });
    setEditing(null);
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
          onChange={() => setSubmit(false)}
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
              <Button type="primary" htmlType="submit" disabled={isSubmit}>
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
