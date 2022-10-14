import React, { useState, useContext, useEffect } from "react";
import { ResultOptions, useQuery } from "react-query";
import { UnorderedList, ListItem } from "@chakra-ui/react";

import api from "../utils/spotifyAxios";
import queryContext from "../contexts/queryContext";
import { Album } from "../types/album";
import ResultCard from "./ResultCard";

const Results = () => {
    const queryTerm = useContext(queryContext);

    const { data: results, isLoading } = useQuery<Album[], Error>(
        [`${queryTerm}-results`],
        async () => api.searchAlbums(queryTerm)
    );

    const renderResults = () => {
        if (results) {
            return results.map((album: Album, index: number) => {
                console.log(album)
                return (
                    <ResultCard album={album} index={index}/>
                );
            });
        }
    };

    return (
        <div>
            <h3>Results</h3>
            {isLoading ? (
                <h4>Loading...</h4>
            ) : (
                <UnorderedList>{renderResults()}</UnorderedList>
            )}
        </div>
    );
};

export default Results;
