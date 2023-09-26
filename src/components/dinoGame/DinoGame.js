import dinossaur from "../../assets/dinossaur.png"

function DinoGame(){
    return (
        <div className="bg-backWhite flex justify-center items-center h-full">
            <div className="w-[70%] h-[60%] border-2 flex items-end border-black">
                <div className="ml-2 w-12 h-14 bg-transparent"><img className="h-full" src={dinossaur}></img></div>
                <div></div>
            </div>
        </div>
    )
}

export default DinoGame