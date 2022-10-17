import React, { useState, useEffect } from "react";
import api from "../utils/spotifyAxios";
import ColorThief from "colorthief";
import { background } from "@chakra-ui/react";

interface props {
    selectedAlbum: string;
}

const Poster = ({ selectedAlbum }: props) => {
    const [colorArr, setColorArr] = useState([("255,0,0"),("0,255,0"),("0,0,255")]);

    const colorThief = new ColorThief();

    const gradientDiv: Element | null = document.querySelector("#gradient")
    const img: Element | null = document.querySelector("#colors-result");

    const colorify = () => {
        if (img) {
            if(img.getAttribute("src")) {
                setColorArr(colorThief.getPalette(img).map((e: number[]) => e.map((e2:number) => e2.toString()).join(", ")));
            }
        }
    };

    const updateGradient = () => {
        gradientDiv?.setAttribute("style", `background: radial-gradient( circle at 50% 0, rgba(${colorArr[0]}, 1), rgba(${colorArr[0]}, 0) 60% ), radial-gradient( circle at 6.7% 75%, rgba(${colorArr[1]}, 1), rgba(${colorArr[1]}, 0) 60% ), radial-gradient( circle at 93.3% 75%, rgba(${colorArr[2]}, 1), rgba(${colorArr[2]}, 0) 60% ) white; height: 200px; width: 200px; border-radius: 50%`)
    }
    // `radial-gradient( circle at 50% 0, rgba(${colorArr[0].map((e: number) => e.toString()).join(", ")}), rgba(${colorArr[0].map((e: number) => e.toString()).join(", ")}) 70.71% ), radial-gradient( circle at 6.7% 75%, rgba(${colorArr[1].map((e: number) => e.toString()).join(", ")}), rgba(${colorArr[1].map((e: number) => e.toString()).join(", ")}) 70.71% ), radial-gradient( circle at 93.3% 75%, rgba(${colorArr[2].map((e: number) => e.toString()).join(", ")}), rgba(${colorArr[2].map((e: number) => e.toString()).join(", ")}) 70.71% ) beige`

    useEffect(() => {
      updateGradient()
    
    }, [colorArr])
    

    return (
        <div>
            <img
                id="colors-result"
                src={selectedAlbum}
                alt="poster"
                crossOrigin="anonymous"
                onLoad={colorify}
            />
            <div id="gradient" style={{height: "300px", width: "300px"}}></div>
        </div>

    );
};

export default Poster;
