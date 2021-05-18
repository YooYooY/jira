import React, { FC, memo } from "react";
import Table from "../../components/Table/Table";
import { ListProps } from "../../typing";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const List: FC<ListProps & { loading: boolean }> = memo(
  ({ list, users, loading }) => {
    return (
      <Table
        loading={loading}
        columns={[
          {
            title: "名称",
            dataIndex: "name",
            render(value, project) {
              return <Link to={String(project.id)}>{project.name}</Link>;
            },
          },
          {
            title: "部门",
            dataIndex: "organization",
          },
          {
            title: "负责人",
            render(value, project) {
              return (
                <span>
                  {users.find((user) => user.id === project.personId)?.name ||
                    "未知"}
                </span>
              );
            },
          },
          {
            title: "创建时间",
            render(value, project) {
              return (
                <span>
                  {project.created
                    ? dayjs(project.created).format("YYYY-MM-DD")
                    : "无"}
                </span>
              );
            },
          },
        ]}
        dataSource={list}
      />
    );
  }
);

export default List;
