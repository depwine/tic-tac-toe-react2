import { useContext } from "react";
import { UserContext } from "../Backend/UserContext";
import styled from "styled-components";
import GetPlayers from "../Players/GetPlayers";

const PlayerInput = () => {

    const {players} = useContext(UserContext)
    const {submit} = useContext(UserContext)



    return (
        <Container>
                    { 
                    submit === false
                    ? <GetPlayers />
                    : 
                        <Div>
                            <div>
                                Player 1:  {players.playerOne}
                            </div>
                            <div>
                                Player 2:  {players.playerTwo}
                            </div>
                            

                        </Div>
                    
                    }
        </Container>


    );

}

export default PlayerInput;

const Container = styled.span``;

const Div = styled.div`
    width: 305px;
    display: flex;
    justify-content: space-between
`