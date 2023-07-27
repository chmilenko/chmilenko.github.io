import React from "react";
import "./HeaderTable.css";
function HeaderTable() {
  return (
    <div className="headerTable">
      <div>
        <select className="id">
          <option>ID</option>
        </select>
      </div>
      <div className="caption">
        <div className="nameCaption" style={{ color: "white" }}>
          Заголовок
        </div>
        <select className="selectCaption">
          {/* <option>UP</option>
          <option>Down</option> */}
        </select>
      </div>
      <div className="description">
        <div className="nameDescription" style={{ color: "white" }}>
          Описание
        </div>
        <select className="descriptionSelect">
          <option>UP</option>
          <option>Down</option>
        </select>
      </div>
    </div>
  );
}

export default HeaderTable;
