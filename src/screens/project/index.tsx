import React from "react";
import { useParams } from "react-router";

export const ProjectScreen = () => {
  const { projectId } = useParams();
  return <h1>ProjectScreen {projectId}</h1>;
};
