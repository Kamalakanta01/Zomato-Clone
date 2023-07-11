import { Box, Image, Text, Badge, Flex } from "@chakra-ui/react";
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
  const truncatedTags = truncateTags(data.tags);

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
          src={"https://b.zmtcdn.com/data/pictures/chains/7/4000027/a113bf34fafca6767eecd26144204186_o2_featured_v2.jpg"}
          alt={data.name}
        />
      </Box>
      <Box p="4">
        <Flex justifyContent={"space-between"}>
            <Text fontSize="xl" fontWeight="semibold" mb="2">
            {data.name}
            </Text>
            <Text fontSize="sm" color="gray.500" mb="2">
            {data.ratings} Ratings
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
                ₹200 for one
            </Text>
        </Flex>
      </Box>
    </Box>
  );
}
