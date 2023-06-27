import { useContext } from "react"
import { UserContext } from "../Backend/UserContext"

const GameOver = () => {

    const {reason} = useContext(UserContext)

    return (
        <span>
            {reason}
        </span>
    )

}

export default GameOver