import React from "react";
import "./HeaderTable.css";
function HeaderTable({
  onSortId,
  onSortTitle,
  onSortBody,
}: {
  onSortId: () => void;
  onSortTitle: () => void;
  onSortBody: () => void;
}) {
  return (
    <div className="headerTable">
      <div className="idHeader" style={{ color: "white" }}>
        <span>ID</span>
        <button onClick={onSortId}>Sort Id</button>
      </div>
      <div className="nameCaptionHeader">
        <span style={{ color: "white" }}>Заголовок</span>
        <button onClick={onSortTitle}>sort title</button>
      </div>
      <div className="nameDescriptionHeader">
        <span style={{ color: "white" }}>Описание</span>
        <button onClick={onSortBody}>sort body</button>
      </div>
    </div>
  );
}

export default HeaderTable;
