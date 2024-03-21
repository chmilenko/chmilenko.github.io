import React, { useState } from "react";
import SearchInput from "../Components/Search/Search";
import Table from "../Components/TableData/Table/Table";
import "./Main.css";

function Main() {
  const [searchquery, setSearchQuery] = useState("");

  return (
    <div className="main_content">
      <SearchInput searchquery={searchquery} setSearchQuery={setSearchQuery} />
      <Table searchquery={searchquery} />
    </div>
  );
}

export default Main;
