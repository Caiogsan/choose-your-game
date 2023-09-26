import {FaUserCircle} from "react-icons/fa"
function Header(){
    return (
        <div className="flex font-teste px-12 m-0 items-center text-center justify-between h-10 w-[100%]">
                <p className="text-2xl">0</p>
                <h1 className="font-bold text-2xl">PICK A GAME TO WIN POINTS</h1>
                <div className='text-3xl text-blue-400'><FaUserCircle></FaUserCircle></div>
        </div>
    )
}

export default Header