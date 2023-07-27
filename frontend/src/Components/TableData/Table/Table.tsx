import React, { useEffect, useState } from "react";
import HeaderTable from "../HeaderTable/HeaderTable";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store";
import { initialListData } from "../dataSlice";
import TableOneColumn from "./TableOneColumn";
import "./Css/Table.css";
import SelectPage from "./SelectPage";

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
      <SelectPage
        onChangePage={handleClickSetPage}
        page={page}
        totalPages={Math.ceil(dataList.length / 10)}
      />
    </div>
  );
}

export default Table;
