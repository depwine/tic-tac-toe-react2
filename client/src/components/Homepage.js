import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../Backend/UserContext";
import Grid from "../game/Grid";
import PlayerInput from "./PlayerInput";
import GameOver from "../game/GameOver";

const Homepage = () => {

    const {submit, setSubmit, turn, gameOver, setGameOver, setTurn, setGrid, reason, setReason, setPlayers} = useContext(UserContext)

    const handleReset = () => {
        setTurn(1);
        setGrid([null, null,null, null, null, null, null, null, null]);
        setReason(null);
        setGameOver(false)

    }

    const handleNewPlayers = () => {

        let tempPlayers = {
            playerOne: null,
            playerTwo: null
        }

        setPlayers(tempPlayers)
        setSubmit(false)
    }


    return(
        <Container>

            <PlayerInput />            
            
            {
                (submit) && 
                (<span>
                    <Grid/> <div>turn : {turn}</div>
                </span>)
            }

            {
                gameOver &&
                <GameOver reason = {reason} />
            }

            <Button onClick={handleReset}>Reset</Button>
            
            <Button onClick={handleNewPlayers}>New Players</Button>


        </Container>

    );

};

export default Homepage

const Container = styled.span``;

const Button = styled.button`

`;