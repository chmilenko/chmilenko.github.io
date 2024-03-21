/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./HeaderTable.css";
// import img from "../../../../public/img/strelka";

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
      <div className="idHeader" style={{ color: "white", fontWeight: 600 }}>
        <span>ID</span>
        <img className="arrow" onClick={onSortId} alt="sort" />
      </div>
      <div className="nameCaptionHeader">
        <span style={{ color: "white", fontWeight: 600 }}>Заголовок</span>
        <img className="arrow" onClick={onSortTitle} />
      </div>
      <div className="nameDescriptionHeader">
        <span style={{ color: "white", fontWeight: 600 }}>Описание</span>
        <img className="arrow" onClick={onSortTitle} alt="sort" />
      </div>
    </div>
  );
}

export default HeaderTable;
