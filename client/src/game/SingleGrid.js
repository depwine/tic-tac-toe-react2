import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../Backend/UserContext";
import Grid from "./Grid";


const SingleGrid = ({ value, ind}) => {

    const {turn, setTurn, setGrid, players, grid, setReason, setGameOver, gameOver} = useContext(UserContext)
    let winCondition = false;

        // win condition
    const winCheck = () => {

        if (   (
            // check rows, not null
            (grid[0] &&
              grid[0] === grid[1] &&
              grid[1] === grid[2]) ||
            (grid[3] &&
              grid[3] === grid[4] &&
              grid[4] === grid[5]) ||
            (grid[6] &&
              grid[6] === grid[7] &&
              grid[7] === grid[8]) ||
            // check columns not null
            (grid[0] &&
              grid[0] === grid[3] &&
              grid[3] === grid[6]) ||
            (grid[1] &&
              grid[1] === grid[4] &&
              grid[4] === grid[7]) ||
            (grid[2] &&
              grid[2] === grid[5] &&
              grid[5] === grid[8]) ||
            //check diags
            (grid[0] &&
              grid[0] === grid[4] &&
              grid[4] === grid[8]) ||
            (grid[2] &&
              grid[2] === grid[4] &&
              grid[4] === grid[6])
          )
            
        ) {

            setGameOver(true)
            winCondition = true;

            if (turn-1 % 2 === 0) {
                setReason(`${players.playerTwo} wins`)
            } else {
                setReason(`${players.playerOne} wins`)
            }


        } 

    }

        // game loop
    const handleClick = (e) => {

        winCheck();

            // check if game is over
        if (winCondition === false && gameOver === false) {
                // check that space is empty
            if (grid[ind] === null) {

                if (turn % 2 === 0) {
                    let gridTemp = grid;
                    gridTemp[ind] = players.playerTwo;
                    setGrid(gridTemp)
                    setTurn(turn+1)
                } else {
                    let gridTemp = grid;
                    gridTemp[ind] = players.playerOne;
                    setGrid(gridTemp)
                    setTurn(turn+1)
                }
    
            }

        }

        winCheck();



        if (!winCondition && !grid.includes(null)){
            setGameOver(true)
            winCondition = true
            setReason("Game Over: Tie")
        }





    }

    return (

        <Container>
        
            <Button onClick = {(e) => {handleClick(e)}}>
                 {value} 
            </Button>

        </Container>

    );
}

export default SingleGrid;

const Container = styled.div`

    display: flex;

    align-items: center;
    justify-content: center;

    border: 1px solid black;



`;

const Button = styled.button`
    border: none;
    background-color: white;
    font-size: 20px;

    height: 100px;
    width: 100px;

    &:hover{
        background-color: red;
        cursor: pointer;
    }

    &:active{
        background-color: darkred;

    }
`;