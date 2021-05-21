import React, { FC, memo, useCallback } from "react";
import Table from "../../components/Table/Table";
import { Project, User } from "../../typing";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useEditProject } from "utils/project";
import Pin from "components/pin";
import { Dropdown, Menu } from "antd";
import { ButtonNoPadding } from "components/lib";

export interface ListProps {
  list: Project[];
  users: User[];
  loading: boolean;
  refresh?: () => void;
}

const List: FC<ListProps> = memo((props) => {
  const { list, users, loading, refresh } = props;
  const { mutate } = useEditProject();
  const pinProject = useCallback(
    (id: number) => (pin: boolean) => {
      mutate({ id, pin }).then(() => refresh && refresh());
    },
    [mutate, refresh]
  );

  const DropMemu = useCallback((project) => {
    return (
      <Menu>
        <Menu.Item key={"edit"}></Menu.Item>
      </Menu>
    );
  }, []);

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
        {
          render(_value, project) {
            return (
              <Dropdown overlay={DropMemu(project)}>
                <ButtonNoPadding type={"link"}>...</ButtonNoPadding>
              </Dropdown>
            );
          },
        },
      ]}
      dataSource={list}
    />
  );
});

export default List;
