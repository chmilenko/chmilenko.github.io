import React from "react";
import { Data } from "../Types/dataTypes";
import "./style/Table.css";
function TableOneColumn({ data }: { data: Data }) {
  return (
    <tr className="column">
      <td className="id">{data.id}</td>
      <td className="title">{data.title}</td>
      <td className="body">{data.body}</td>
    </tr>
  );
}

export default TableOneColumn;
