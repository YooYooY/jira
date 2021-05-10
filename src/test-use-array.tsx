import React from "react";
import { useArray } from "./hooks/useArray";

interface PersonProp {
  name: string;
  id: number;
}

const TsReactTest = () => {
  const persons: PersonProp[] = [
    { name: "jack", id: 25 },
    { name: "ma", id: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);

  return (
    <div>
      <button onClick={() => add({ name: "test", id: Date.now() })}>add</button>{" "}
      &nbsp;
      <button onClick={clear}>clear</button> &nbsp;
      <button onClick={() => removeIndex(0)}>remove</button> &nbsp;
      <ul>
        {value.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TsReactTest;
