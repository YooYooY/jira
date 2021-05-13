import React, { FC, memo } from "react";
import Table from "../../components/Table/Table";
import { ListProps } from "../../typing";

const List: FC<ListProps> = memo(({ list, users }) => {
  return (
    <Table
      columns={[
        {
          title: "名称",
          dataIndex: "name",
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
      ]}
      dataSource={list}
    />
  );
});

export default List;
