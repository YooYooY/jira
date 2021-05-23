import React from "react";
import { Form, Button, Input } from "antd";

export const EpicScreen = () => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alert("cc");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="cc" defaultValue="cc" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
