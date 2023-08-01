import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store";
import { initialListData } from "../dataSlice";
import TableOneColumn from "./TableOneColumn";
import "./Css/Table.css";

function MapData({
  page,
  searchquery,
}: {
  page: number;
  searchquery: string;
}): JSX.Element {
  const { dataList } = useSelector((store: RootState) => store.data);
  const dispatch = useAppDispatch();

  const startIndex = (page - 1) * 10;
  const endIndex = page * 10;

  const filteredDataList = dataList.filter((data) => {
    return (
      data.title.toLowerCase().includes(searchquery.toLowerCase()) ||
      data.body
        .replace(/\n/g, " ")
        .toLowerCase()
        .includes(searchquery.toLowerCase())
    );
  });
  console.log(filteredDataList);

  useEffect(() => {
    dispatch(initialListData());
  }, [dispatch]);

  return (
    <div className="data">
      {filteredDataList.slice(startIndex, endIndex).map((data) => (
        <TableOneColumn data={data} key={data.id} />
      ))}
    </div>
  );
}

export default MapData;
