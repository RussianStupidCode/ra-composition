import React from "react";
import AdBlock from "./ui/adBlock";
import News from "./ui/news";
import SearchForm from "./ui/searchForm";
import ContentBlock from "./ui/contentBlock";

const Page = () => {
  const contentsList = [];

  return (
    <>
      <News></News>
      <SearchForm></SearchForm>
      <AdBlock></AdBlock>

      {contentsList.map((content) => (
        <ContentBlock></ContentBlock>
      ))}
    </>
  );
};
