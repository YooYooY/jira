import React, { useMemo } from "react";
import { Spin } from "antd";
import "./style.less";

export interface Column<T> {
  id?: string | number;
  key?: string;
  title?: string;
  dataIndex?: string;
  index?: number;
  render?: (value: any, item: T) => React.ReactElement;
}

export interface DataSource {
  key?: string;
  [Key: string]: any;
}

export interface TableProps<T> {
  loading?: boolean;
  columns: Column<T>[];
  dataSource: Array<T & DataSource>;
}

type TableComponentFn = <T>(props: TableProps<T>) => React.ReactElement;

const Table: TableComponentFn = (props) => {
  const { columns, dataSource, loading } = props;

  const Thead = useMemo(
    () => (
      <thead>
        <tr>
          {columns.map((column, index) => {
            return (
              <th key={column.key || column.id || index}>{column.title}</th>
            );
          })}
        </tr>
      </thead>
    ),
    [columns]
  );

  const Tbody = useMemo(
    () => (
      <tbody>
        {dataSource.length ? (
          dataSource.map((data) => {
            return (
              <tr key={data.key || data.id}>
                {columns.map((column, index) => {
                  const key = column.dataIndex;
                  const render = column.render;
                  const value = key ? data[key] : "";
                  return (
                    <td key={column.key || column.id || index}>
                      {render ? render(value, data) : value}
                    </td>
                  );
                })}
              </tr>
            );
          })
        ) : (
          <tr>
            <td align="center" colSpan={columns.length}>
              暂无数据
            </td>
          </tr>
        )}
      </tbody>
    ),
    [dataSource, columns]
  );

  const Loading = useMemo(
    () => (
      <tbody>
        <tr>
          <td align="center" colSpan={columns.length}>
            <Spin />
          </td>
        </tr>
      </tbody>
    ),
    [columns]
  );

  return (
    <table className="cv-table">
      {Thead}
      {loading ? Loading : Tbody}
    </table>
  );
};

export default Table;
