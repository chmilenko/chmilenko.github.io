/* eslint-disable jsx-a11y/alt-text */
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
      <div className="idHeader" style={{ color: "white", fontWeight: 600 }}>
        <span>ID</span>
        <img
          src="/img/strelka.PNG"
          className="strelka"
          onClick={onSortId}
          style={{ marginLeft: "20px" }}
        />
      </div>
      <div className="nameCaptionHeader">
        <span style={{ color: "white", fontWeight: 600 }}>Заголовок</span>
        <img
          src="/img/strelka.PNG"
          className="strelka"
          onClick={onSortTitle}
          style={{ marginLeft: "20px" }}
        />
      </div>
      <div className="nameDescriptionHeader">
        <span style={{ color: "white", fontWeight: 600 }}>Описание</span>
        <img
          src="/img/strelka.PNG"
          className="strelka"
          onClick={onSortTitle}
          style={{ marginLeft: "20px" }}
        />
      </div>
    </div>
  );
}

export default HeaderTable;
