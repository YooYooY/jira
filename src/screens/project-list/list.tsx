import React, { FC, memo, useCallback } from "react";
import Table from "../../components/Table/Table";
import { ListProps } from "../../typing";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useEditProject } from "utils/project";
import Pin from "components/pin";

const List: FC<ListProps> = memo(({ list, users, loading, refresh }) => {
  const { mutate } = useEditProject();
  const pinProject = useCallback(
    (id: string) => (pin: boolean) => {
      mutate({ id, pin }).then(() => refresh && refresh());
    },
    [mutate, refresh]
  );

  return (
    <Table
      loading={loading}
      columns={[
        {
          title: <Pin checked={true} disabled={true} />,
          render(_value, project) {
            return (
              <Pin
                checked={project.pin}
                onCheckedChange={pinProject(project.id)}
              />
            );
          },
        },
        {
          title: "名称",
          dataIndex: "name",
          render(_value, project) {
            return <Link to={String(project.id)}>{project.name}</Link>;
          },
        },
        {
          title: "部门",
          dataIndex: "organization",
        },
        {
          title: "负责人",
          render(_value, project) {
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
          render(_value, project) {
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
});

export default List;
