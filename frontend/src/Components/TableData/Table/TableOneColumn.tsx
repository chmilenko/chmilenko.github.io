import React from "react";
import { Data } from "../Types/dataTypes";

function TableOneColumn({ data }: { data: Data }) {
  return (
    <div className="column">
      <div className="id">{data.id}</div>
      <div className="title">{data.title}</div>
      <div className="body">{data.body}</div>
    </div>
  );
}

export default TableOneColumn;
