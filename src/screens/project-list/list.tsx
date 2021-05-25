import React, { FC, memo, useCallback } from "react";
import Table from "../../components/Table/Table";
import { Project, User } from "../../typing";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useDeleteProject, useEditProject } from "utils/project";
import Pin from "components/pin";
import { Dropdown, Menu, Modal } from "antd";
import { ButtonNoPadding } from "components/lib";
import {
  useProjectModal,
  useProjectsQueryKey,
} from "screens/project-list/utils";

export interface ListProps {
  list: Project[];
  users: User[];
  loading: boolean;
}

const List: FC<ListProps> = memo((props) => {
  const { list, users, loading } = props;
  const { mutate } = useEditProject(useProjectsQueryKey());

  const pinProject = useCallback(
    (id: number) => (pin: boolean) => mutate({ id, pin }),
    [mutate]
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
        {
          render(_value, project) {
            return <More project={project} />;
          },
        },
      ]}
      dataSource={list}
    />
  );
});

const More = ({ project }: { project: Project }) => {
  const { startEdit } = useProjectModal();
  const editProject = (id: number) => () => startEdit(id);
  const { mutate: deleteProject } = useDeleteProject(useProjectsQueryKey());
  const confirmDeleteProject = (id: number) => {
    Modal.confirm({
      title: "确定删除这个项目吗？",
      content: "点击确定删除",
      okText: "确定",
      onOk() {
        deleteProject({ id });
      },
    });
  };

  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item onClick={editProject(project.id)} key="eidt">
            编辑
          </Menu.Item>
          <Menu.Item
            onClick={() => confirmDeleteProject(project.id)}
            key="delete"
          >
            删除
          </Menu.Item>
        </Menu>
      }
    >
      <ButtonNoPadding type="link">...</ButtonNoPadding>
    </Dropdown>
  );
};

export default List;
