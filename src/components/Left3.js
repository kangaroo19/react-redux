import { useSelector } from "react-redux"

export default function Left3(){
    const number=useSelector(state=>state.number)
    const text=useSelector(state=>state.text)
    return (
        <div>
            <h1>Left3 : {number}</h1>
            <h1>{text}</h1>
        </div>
    )
}

