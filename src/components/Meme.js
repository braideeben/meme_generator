import React from "react";
import memesData from "../memesData";

export default function Meme(){
    let url

    function getMemeImages(){
        const memesArray = memesData.data.memes;
        const randomNumber=Math.floor(Math.random() * memesArray.length);
        url=memesArray[randomNumber].url;
        console.log(url);
    }

    return(
        <main>
            <div className="form">
                <input className="form--inputs" type="text"  placeholder="Top text"/>
                <input className="form--inputs" type="text" placeholder="Bottom text"/>
                <button 
                    className="form--button"
                    onClick={getMemeImages}
                    >Get a new meme image</button>
            </div>
        </main>
    )
}