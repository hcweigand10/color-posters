import React, { useState } from "react";
import api from "../utils/spotifyAxios";

interface props {
    selectedAlbum: string;
}

const Poster = ({ selectedAlbum }: props) => {


    return <img src={selectedAlbum} alt="poster" />;
};

export default Poster;
