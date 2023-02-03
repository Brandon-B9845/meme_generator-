import memesData from "../memesData"

export default function Meme() {
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }
    
    
    return (
        <main className="main">
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button className="form--btn" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
        </main>
    )
}

// This is the place where we store all the meme input and photos