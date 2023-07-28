import React, { useEffect, useState } from "react";
import HeaderTable from "../HeaderTable/HeaderTable";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store";
import { initialListData } from "../dataSlice";
import "./Css/Table.css";
import SelectPage from "./SelectPage";
import { sortDataListById } from "../dataSlice";
import MapData from "./mapData";

function Table({ searchquery }: { searchquery: string }) {
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const { dataList } = useSelector((store: RootState) => store.data);
  const dispatch = useAppDispatch();

  const handleClickSetPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const sortDataById = () => {
    if (sortOrder === "asc") {
      const sortedList = [...dataList].sort((a, b) => a.id - b.id);
      dispatch(sortDataListById(sortedList));
      setSortOrder("desc");
    } else {
      const sortedList = [...dataList].sort((a, b) => b.id - a.id);
      dispatch(sortDataListById(sortedList));
      setSortOrder("asc");
    }
  };

  const sortDataByTittle = () => {
    if (sortOrder === "asc") {
      const sortedList = [...dataList].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      dispatch(sortDataListById(sortedList));
      setSortOrder("desc");
    } else {
      const sortedList = [...dataList].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      dispatch(sortDataListById(sortedList));
      setSortOrder("asc");
    }
  };

  const sortDataByBody = () => {
    if (sortOrder === "asc") {
      const sortedList = [...dataList].sort((a, b) =>
        a.body.localeCompare(b.body)
      );
      dispatch(sortDataListById(sortedList));
      setSortOrder("desc");
    } else {
      const sortedList = [...dataList].sort((a, b) =>
        b.body.localeCompare(a.body)
      );
      dispatch(sortDataListById(sortedList));
      setSortOrder("asc");
    }
  };

  useEffect(() => {
    dispatch(initialListData());
  }, [dispatch]);

  return (
    <div>
      <HeaderTable
        onSortId={sortDataById}
        onSortTitle={sortDataByTittle}
        onSortBody={sortDataByBody}
      />
      <MapData page={page} searchquery={searchquery} />
      <SelectPage
        onChangePage={handleClickSetPage}
        page={page}
        totalPages={Math.ceil(dataList.length / 10)}
      />
    </div>
  );
}

export default Table;
