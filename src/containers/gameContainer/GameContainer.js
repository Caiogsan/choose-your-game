import { Link } from "react-router-dom"

function GameContainer({gameImage, toLink}){
    return (
        <div className="bg-red-500 h-36 w-60 m-4 hover:cursor-pointer hover:scale-110 duration-300">
            <Link to={toLink}><img className="w-full h-full border-0 p-0" src={gameImage} alt="dinoGame"></img></Link>
        </div>
    )
}

export default GameContainer