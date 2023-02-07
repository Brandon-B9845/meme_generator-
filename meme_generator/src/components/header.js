export default function Header(){
    return (
        <div>
            <header className="main-header">
                <img className="header-img" src={require("../images/troll-face.png")} alt="troll face"/>
                <h2 className="header-title">Meme Generator</h2>
                <p className="header-project">React Course - Project 3</p>
            </header>
        </div>
    )
}

//this is a static page that is just the header for the meme generator.