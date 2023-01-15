import React from "react";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import MainNew from "../components/MainNew";
import NewsColumn from "../components/NewsColumn";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <MainNew />
      <NewsColumn />
      <Blogs />
    </div>
  );
}
