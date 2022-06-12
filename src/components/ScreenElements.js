import styled from "styled-components";

export const Container = styled.div`
    padding: 0;
    margin: 0;
    background: linear-gradient(to right, #00AAFF, #00FF6C);
    min-height: 100vh;
    max-width: 400px;
`

export const Output = styled.div`
    background-color: rgba(0, 0, 0, .75);
    justify-content: center;
    align-content: center;
    display: flex;
    max-width: 400px;
    align-items: flex-end;
    flex-direction: column;
    word-wrap: break-word;
    word-break: break-all;

`

export const PreviousOperand = styled.h2`
    font-size: 30px;
    color: rgba(255, 255, 255, .75);
    font-size: 1.5rem;
`

export const CurrentOperand = styled.h1`
    font-size: 35px;
    color: white;
    font-size: 2.5rem;
`

export const ButtonContainer = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(4, 100px);
    /* grid: 80px 80px 80px 80px 80px / auto auto auto auto; */
`

export const Buttons = styled.button`
    cursor: pointer;
    padding: 20px 0;
    font-size: 2rem;
    border: 1px solid white;
    outline: none;
    background-color: rgba(255, 255, 255, .75);
    grid-column-end: ${({span}) => (span == true ? 'span 2' : 'span 1')};

    &:hover {
    background-color: rgba(255, 255, 255, .9);
    }
`