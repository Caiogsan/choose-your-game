import GameContainer from "../../containers/gameContainer/GameContainer"
import Header from "../header/Header"
import {dinoGame} from './imageExport'

function Homepage(){
    return (
        <div className="gap-16 flex flex-col pt-12">
            <Header></Header>
            <div className="flex justify-between px-28">
                <GameContainer toLink={'/dinoGame'} gameImage={dinoGame}></GameContainer>
                <GameContainer></GameContainer>
                <GameContainer></GameContainer>
            </div>
            <div className="flex justify-between px-28">
                <GameContainer></GameContainer>
                <GameContainer></GameContainer>
                <GameContainer></GameContainer>
            </div>
        </div>
    )
}

export default Homepage