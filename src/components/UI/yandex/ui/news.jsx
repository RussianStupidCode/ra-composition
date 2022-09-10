import React from "react";
import List from "../common/list";
import ListItem from "../common/listItem";
import Link from "../common/link";
import Text from "../common/text";
import Image from "../common/image";

/**
 * блок новостей на главной
 * @param {*} newList - список новостей на главной
 */
const News = ({ newsList, headers }) => {
  return (
    <>
      <List direction="row">
        {headers.map((header) => (
          <ListItem>
            <Link>
              <Text text={header}></Text>
            </Link>
          </ListItem>
        ))}
      </List>

      <List direction="column">
        {newsList.map((news) => (
          <ListItem>
            <Image></Image>
            <Link href={news.href}>
              <Text text={news.text}></Text>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default News;
