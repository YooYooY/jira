import { useForm } from "antd/lib/form/Form";
import React, { useCallback, useEffect } from "react";
import { useDeleteTask, useEditTask } from "utils/task";
import { useTasksModal, useTasksQueryKey } from "./util";
import { Button, Form, Input, Modal } from "antd";
import UserSelect from "components/user-select";
import TaskTypeSelect from "components/task-type-select";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const TaskModal = () => {
  const [form] = useForm();
  const { editingTaskId, editingTask, close } = useTasksModal();
  const { mutateAsync: editTask, isLoading: editLoading } = useEditTask(
    useTasksQueryKey()
  );
  const { mutate: deleteTask } = useDeleteTask(useTasksQueryKey());

  const onCancel = useCallback(() => {
    close();
    form.resetFields();
  }, [close, form]);

  const onOk = useCallback(async () => {
    let fields = form.getFieldsValue();
    // 重置{value,label}选项为value
    fields.typeId = fields.typeId.value;
    fields.processorId = fields.processorId.value;
    const editData = { ...editingTask, ...fields };
    await editTask(editData);
    close();
  }, [editTask, close, editingTask, form]);

  const startDelete = useCallback(() => {
    close();
    Modal.confirm({
      okText: "确定",
      cancelText: "取消",
      title: "确定删除任务吗",
      onOk() {
        return deleteTask({ id: Number(editingTaskId) });
      },
    });
  }, [editingTaskId, deleteTask, close]);

  useEffect(() => {
    form.setFieldsValue(editingTask);
  }, [form, editingTask]);

  return (
    <Modal
      forceRender={true}
      onCancel={onCancel}
      onOk={onOk}
      okText="确认"
      cancelText="取消"
      confirmLoading={editLoading}
      title="编辑任务"
      visible={!!editingTaskId}
    >
      <Form {...layout} initialValues={editingTask} form={form}>
        <Form.Item
          label={"任务名"}
          name="name"
          rules={[{ required: true, message: "请输入任务名" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="经办人" name="processorId">
          <UserSelect
            personId={editingTask?.processorId || ""}
            defaultOptionName="经办人"
          />
        </Form.Item>
        <Form.Item label="类型" name="typeId">
          <TaskTypeSelect value={editingTask?.typeId || ""} />
        </Form.Item>
      </Form>
      <div style={{ textAlign: "right" }}>
        <Button
          onClick={startDelete}
          style={{ fontSize: "14px" }}
          size="small"
          danger
          type="link"
        >
          删除
        </Button>
      </div>
    </Modal>
  );
};

export default TaskModal;
