import React, {createContext, useState, useEffect} from "react";


    // create context
export const UserContext = createContext();

    // 
export const UserProvider = ({ children }) => {

    const [grid, setGrid] = useState([null, null,null, null, null, null, null, null, null])
    const [players, setPlayers] = useState({
        playerOne: null,
        playerTwo: null
    })
    const [submit, setSubmit] = useState(false);
    const [turn, setTurn] = useState(1);

    const [gameOver, setGameOver] = useState(false);

    const [reason, setReason] = useState(null)

    return (
        <UserContext.Provider 
            value={{
    
                grid,setGrid,
                players, setPlayers,
                submit, setSubmit,
                turn, setTurn,
                gameOver, setGameOver,
                reason, setReason

            }}>
                
            {children}
        </UserContext.Provider>
      
      )
}

