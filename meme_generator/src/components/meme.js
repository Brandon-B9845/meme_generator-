import memesData from "../memesData"
import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : ""
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))
    }
    
    return (
        <main className="main">
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button className="form--btn" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <img className="meme--image" src={meme.randomImage} alt=""/>
        </main>
    )
}

// This is the place where we store all the meme input 