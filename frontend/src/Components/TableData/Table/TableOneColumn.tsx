import React from "react";
import { Data } from "../Types/dataTypes";

function TableOneColumn({ data }: { data: Data }) {
  return (
    <table className="column">
      <tr>
        <td className="id">{data.id}</td>
        <td className="title">{data.title}</td>
        <td className="body">{data.body}</td>
      </tr>
    </table>
  );
}

export default TableOneColumn;
