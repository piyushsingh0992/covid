import React, { useEffect, useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import NewsCard from "../newsCard";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../container/home/newsSlice";
import { useSearchNews } from "../../customHooks/searcNews";

const News = () => {
  const news = useSelector((state) => state.news);
  const [loader, loaderSetter] = useState(true);
  const [searchKeyWord, searchKeyWordSetter] = useState("");
  const [newsArray, newsArraySetter] = useState([]);
  const dispatch = useDispatch();
  const searchNews = useSearchNews(loaderSetter);

  useEffect(() => {
    if (news.status === "idle") {
      dispatch(getNews("covid india"));
    } else if (news.status === "fullfilled") {
      newsArraySetter(news.newsArray);
      loaderSetter(false);
    } else if (news.status === "rejected") {
      loaderSetter(false);
    }
  }, [news]);

  return (
    <Box>
      <InputGroup
        boxShadow="md"
        bg="white"
        borderColor="white"
        outline="none"
        p={1}
        border="none"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={BsSearch} w={6} h={6} />}
          p={5}
          outline="none"
          border="none"
        />

        <Input
          type="tel"
          placeholder="Search News"
          outline="none"
          border="none"
          value={searchKeyWord}
          disabled={loader}
          onChange={(e) => {
            searchKeyWordSetter(e.target.value);
            searchNews(e.target.value);
          }}
        />
      </InputGroup>

      {loader ? (
        <Box py={5}>
          <Spinner size="xl" />
        </Box>
      ) : newsArray.length > 0 ? (
        newsArray.map((item) => {
          return <NewsCard {...item} />;
        })
      ) : (
        searchKeyWord.length > 0 && (
          <Text py={5}>No Search Result for &nbsp; {searchKeyWord}</Text>
        )
      )}
    </Box>
  );
};

export default News;
