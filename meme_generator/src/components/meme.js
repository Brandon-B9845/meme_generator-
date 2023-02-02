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

// This is the place where we store all the meme input and photos