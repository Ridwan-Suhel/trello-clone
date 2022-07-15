import React from "react";
import PageNav from "../../components/PageNav/PageNav";
import Lists from "./Lists/Lists";

const Home = () => {
  return (
    <div className="bg-[#0079BF] px-2 pb-20">
      <PageNav />
      <div className="lists-wrapper flex gap-3">
        <Lists />
        <Lists />
        <Lists />
      </div>
    </div>
  );
};

export default Home;
