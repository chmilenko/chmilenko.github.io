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
      <div>
        <select className="header">
          <option>Заголовок</option>
        </select>
      </div>
      <div>
        <select className="description">
          <option>Описание</option>
        </select>
      </div>
    </div>
  );
}

export default HeaderTable;
