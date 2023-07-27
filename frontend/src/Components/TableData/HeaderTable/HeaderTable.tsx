import React from "react";
import "./HeaderTable.css";
function HeaderTable() {
  return (
    <div className="headerTable">
      <div className="idHeader" style={{ color: "white" }}>
        <span>ID</span>
        <button>Sort Id</button>
      </div>
      <div className="nameCaptionHeader">
        <span style={{ color: "white" }}>Заголовок</span>
        <button>sort</button>
      </div>
      <div className="nameDescriptionHeader">
        <span style={{ color: "white" }}>Описание</span>
        <button>sort</button>
      </div>
    </div>
  );
}

export default HeaderTable;
