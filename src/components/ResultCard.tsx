import React, { useState, useContext } from "react";
import { Box, Image, Badge, Text, Stack, 
    useColorMode, Button, Flex, Spacer } from "@chakra-ui/react";

import { Album } from "../types/album";
import albumArtContext from "../contexts/albumArtContext";

interface props {
    album: Album;
    index: number;
}

const ResultCard = ({ album, index }: props) => {

    const setSelectedContext = useContext(albumArtContext)

    const selectAlbum = (albumArtUrl: string) => {
        setSelectedContext(albumArtUrl)
    }

    return (
        <Box maxW="300px" rounded="20px" shadow="2px 2px 2px lightgray"
           overflow="hidden" mt={10} key={index}>
        <img src=
{album.data.coverArt.sources[0].url}
               alt="cover art"/>
        <Box p={5}>
          <Stack align="center">
            <Text as="h1" fontWeight="bold" my={2} >
              {album.data.name}
            </Text>
            <Text fontWeight="light">
              {album.data.date.year}
            </Text>
          </Stack>
          <Flex>  
            <Spacer />
            <Button variant="solid" 
              colorScheme="cyan" size="sm" onClick={() => selectAlbum(album.data.coverArt.sources[0].url)}>
                Select
            </Button>
          </Flex>
        </Box>
      </Box>
    );
};

export default ResultCard;
