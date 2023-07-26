import React, { useEffect } from "react";
import HeaderTable from "../HeaderTable/HeaderTable";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store";
import { initialListData } from "../dataSlice";
import TableOneColumn from "./TableOneColumn";
import './Table.css'

function Table() {
  const { dataList } = useSelector((store: RootState) => store.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initialListData());
  }, [dispatch]);

  console.log(dataList);
  return (
    <div>
      <HeaderTable />
      <div className="data">
        {dataList.map((data) => (
          <TableOneColumn data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default Table;
