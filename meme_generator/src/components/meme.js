export default function Meme() {
    return (
        <main className="main">
            <form className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button className="form--btn">Get a new meme image 🖼️</button>
            </form>
        </main>
    )
}

// Holds the main instance of the memes witht the button and the images