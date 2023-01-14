import React from "react";
import BlogsCard from "../components/BlogsCard";
import Header from "../components/Header";
import MainNew from "../components/MainNew";
import NewsColumn from "../components/NewsColumn";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <MainNew />
      <NewsColumn />
      <BlogsCard />
    </div>
  );
}
