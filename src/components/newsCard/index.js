import React from "react";

import { Flex, Text, Image, Heading, Link } from "@chakra-ui/react";

const NewsCard = (props) => {
  
  const { source, url, urlToImage, title, description } = props;
  
  return (
    <Link href={url} isExternal={true}>
      <Flex
        boxShadow="md"
        bg="white"
        p={5}
        my={5}
        borderRadius={5}
        flexDirection={["column", "column", "row"]}
        as="a"
      >
        <Image
          boxSize={["100%", "100%", "100px"]}
          objectFit="cover"
          src={urlToImage}
          marginRight={[0, 0, 5]}
        />
        <Flex flexDirection="column" justifyContent="flex-start" mt={[4, 4, 0]}>
          <Heading fontSize="xl">{title}</Heading>
          <Text mt={4}>{description}</Text>
          <Text mt={4} fontSize="md">
            Source:{source.name}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default NewsCard;
