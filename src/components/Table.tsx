import { Table as AntdTable } from "antd";
import { TableProps } from "antd/lib/table";
import styled from "styled-components";

const StyledTable = styled(AntdTable)`
  & .ant-pagination {
    padding-right: 15px;
    padding-left: 15px;
  }

  & .ant-table-thead > tr > th {
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }

  & .ant-table-tbody > tr.ant-table-row:hover > td,
  & .ant-table-tbody > tr > td.ant-table-cell-row-hover,
  & .ant-table-thead .ant-table-column-has-sorters:hover {
    background-color: #fff;
  }

  &
    .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan]):before {
    background-color: transparent;
  }
`;

export default function Table({
  dataSource,
  columns = [],
  ...props
}: TableProps<any>) {
  dataSource = dataSource?.map((data, key) => {
    if (data.key) {
      return data;
    }
    return { ...data, key };
  });

  columns = [
    {
      title: "#",
      width: "80px",
      align: "center",
      render: (...args) => <span>{++args[2]}</span>,
    },
    ...columns,
  ];

  return <StyledTable {...props} columns={columns} dataSource={dataSource} />;
}
