import { Box, Image, Text, Badge, Flex, Center } from "@chakra-ui/react";
import React from "react";

export default function Cards({ data }) {
  const maxCombinedLength = 20; // Maximum combined length of all tags before truncation

  // Function to truncate tags if the combined length exceeds the maximum
  const truncateTags = (tags) => {
    const combinedLength = tags.join(", ").length;
    if (combinedLength > maxCombinedLength) {
      let truncatedTags = tags.slice(0); // Create a copy of the original tags array
      if (truncatedTags.join(", ").length > maxCombinedLength) {
        truncatedTags = truncatedTags.slice(0, -1); // Remove the last tag
      }
      truncatedTags.push("..."); // Add "..." as the last element
      return truncatedTags;
    }
    return tags;
  };

  // Truncate tags in the data array
  const truncatedTags = truncateTags(data.food);

  return (
    <Box
      w="100%"
      borderWidth="1px"
      borderRadius="5%"
      overflow="hidden"
      transition="box-shadow 0.2s"
      _hover={{ boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}
    >
      <Box h="12rem">
        <Image
          objectFit="cover"
          w="100%"
          h="100%"
          src={data.image}
          alt={data.name}
        />
      </Box>
      <Box p="4">
        <Flex justifyContent={"space-between"}>
          <Text fontSize="xl" fontWeight="semibold" mb="2">
            {data.name}
          </Text>
          <Text
            fontSize="sm"
            color="white"
            bg="green.500"
            mb="2"
            display="inline-block"
            p="2"
            borderRadius="md"
            textAlign="center"
          >
            <Flex>
              {data.rating}
              <Center ml={"10%"} mb={"10%"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFFFFF"
                  width="0.8rem"
                  height="0.8rem"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 fauQLv"
                >
                  <title>star-fill</title>
                  <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.20v0z"></path>
                </svg>
              </Center>
            </Flex>
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Box>
            {truncatedTags.map((tag) => (
              <Badge key={tag} colorScheme="gray" color={"black"} variant="subtle" mr="1">
                {tag}
              </Badge>
            ))}
          </Box>
          <Text fontSize="lg" fontWeight="semibold" mt="2">
            ₹{data.price} for one
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}