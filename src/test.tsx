import React from "react";

const TestForm = () => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(`object`);
  };
  return (
    <form onSubmit={onSubmit}>
      <button type="submit">submit</button>
    </form>
  );
};

export default TestForm;
