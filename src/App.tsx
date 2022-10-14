import React, { useState } from "react";
import { Box, Input, Button, SimpleGrid } from "@chakra-ui/react";

import Poster from "./components/Poster";
import Search from "./components/Search";
import Results from "./components/Results";
import QueryContext from "./contexts/queryContext";
import AlbumArtContext from "./contexts/albumArtContext";

function App() {
    const [query, setQuery] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setQuery(event.target.value);

    const handleSearch = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        console.log(query);
        setShowResults(true);
    };

    return (
        <div className="App mx-auto mt-5" style={{ width: "95%" }}>
            <h3>Search</h3>
            <form onSubmit={handleSearch}>
                <Input
                    value={query}
                    onChange={handleChange}
                    placeholder="Search here"
                    size="sm"
                />
                <Button type="submit">Search</Button>
            </form>
            {showResults && (
                <SimpleGrid columns={2} spacing={5}>
                    <Box>
                        <AlbumArtContext.Provider value={setSelectedAlbum}>
                            <QueryContext.Provider value={query}>
                                <Results />
                            </QueryContext.Provider>
                        </AlbumArtContext.Provider>
                    </Box>
                    <Box>
                        <Poster selectedAlbum={selectedAlbum} />
                    </Box>
                </SimpleGrid>
            )}
        </div>
    );
}

export default App;
