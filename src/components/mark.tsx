import React, { FC } from "react";

interface MarkProps {
  name: string;
  keyword: string;
}

const Mark: FC<MarkProps> = ({ name, keyword }) => {
  if (!keyword) return <>{name}</>;
  const arr = name.split(keyword);

  return (
    <>
      {arr.map((str, index) => (
        <span key={index}>
          {str}
          {index === arr.length - 1 ? null : (
            <span style={{ color: "#257AFD" }}>{keyword}</span>
          )}
        </span>
      ))}
    </>
  );
};

export default Mark;
