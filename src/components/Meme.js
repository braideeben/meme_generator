import React from "react";
import memesData from "../memesData";

export default function Meme(){
    //const [memeImage,setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");
 
    const [meme,setMeme] =React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber=Math.floor(Math.random() * memesArray.length);
        const url= memesArray[randomNumber].url
        setMeme(prevMeme =>({...prevMeme,
            randomImage:url
        }))
    }

    return(
        <main>
            <div className="form">
                <input className="form--inputs" type="text"  placeholder="Top text"/>
                <input className="form--inputs" type="text" placeholder="Bottom text"/>
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                    >Get a new meme image</button>
            </div>
            <img src={meme.randomImage} className="meme--image" alt="" />
        </main>
    )
}