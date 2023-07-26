import React, { useEffect, useState } from "react";
import HeaderTable from "../HeaderTable/HeaderTable";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store";
import { initialListData } from "../dataSlice";
import TableOneColumn from "./TableOneColumn";
import "./Table.css";

function Table() {
  const [page, setPage] = useState(1);
  const { dataList } = useSelector((store: RootState) => store.data);
  const dispatch = useAppDispatch();

  const handleClickSetPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const startIndex = (page - 1) * 10;
  const endIndex = page * 10;

  useEffect(() => {
    dispatch(initialListData());
  }, [dispatch]);

  console.log(dataList);
  return (
    <div>
      <HeaderTable />
      <div className="data">
        {dataList.slice(startIndex, endIndex).map((data) => (
          <TableOneColumn data={data} key={data.id} />
        ))}
      </div>
      <div className="selectPage">
        {Array.from(Array(10).keys()).map((index) => (
          <button key={index} onClick={() => handleClickSetPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Table;
