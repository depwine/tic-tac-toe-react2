import { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../Backend/UserContext"




const GetPlayers = () => {

    const {players, setPlayers} = useContext(UserContext)
    const {setSubmit} = useContext(UserContext)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPlayers(values => ({...values, [name]: value}))
      }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (players.playerOne !== players.playerTwo) {
            setSubmit(true)

        } else {
            alert("Player names cannot be identical.")
        }
      }



    return (
        <Container>
            <form onSubmit={handleSubmit}>
            <label>Player One:
                <input 
                type="text"
                name= "playerOne"
                value={players.PlayerOne}
                onChange={handleChange}
                />
            </label>
            <label>Player Two:
                <input 
                type="text" 
                name = "playerTwo"
                value={players.PlayerTwo}
                onChange={handleChange}
                />
            </label>
            <input type="submit" />
            </form>
        </Container>
    )

}

export default GetPlayers

const Container = styled.span`



`;