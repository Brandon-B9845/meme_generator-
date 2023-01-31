export default function Header(){
    return (
        <div>
            <header class="main-header">
                <img class="header-img" src={require("../images/troll-face.png")} alt="troll face"/>
                <h2 class="header-title">Meme Generator</h2>
                <p class="header-project">React Course - Project 3</p>
            </header>
        </div>
    )
}