import memesData from "../memesData"
import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : ""
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
     function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
     }

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
                <input type="text" className="form--input" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" className="form--input" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <button className="form--btn" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
            <img className="meme--image" src={meme.randomImage} alt=""/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

// This is the place where we store all the meme input 