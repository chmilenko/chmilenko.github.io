import React, { useState } from "react";
import SearchInput from "../../Components/Search/Search";
import Table from "../../Components/TableData/Table/Table";

function Main() {
  const [searchquery, setSearchQuery] = useState("");

  return (
    <div>
      <SearchInput searchquery={searchquery} setSearchQuery={setSearchQuery} />
      <Table searchquery={searchquery} />
    </div>
  );
}

export default Main;
