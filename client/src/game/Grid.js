import { useContext } from "react";
import { UserContext } from "../Backend/UserContext";
import styled from "styled-components";
import SingleGrid from "./SingleGrid";


const Grid = () => {

    const grid = useContext(UserContext).grid;
    let keyGen = 1;

    return (

        <Container>

            {

                grid.map((e, ind) => {
                    keyGen++
                    return (
                        <SingleGrid key = {keyGen} value = {e} ind = {ind} />
                    )
                })
            }

        </Container>

    );
}

export default Grid;

const Container = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    height: 304px; 
    width: 304px;

    border: 1px solid red;



`;