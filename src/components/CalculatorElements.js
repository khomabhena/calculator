import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    position: relative;
    align-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    background: linear-gradient(to right, #00AAFF, #00FF6C);
`

export const CalculatorWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const OutputWrap = styled.div`
    display: grid;
    min-height: 140px;
    grid-template-columns: 100px 100px 100px 100px;
`

export const ButtonWrap = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
`

export const PrevOperand = styled.div`
    grid-column-end: span 4;
    padding: 20px 12px;
    text-align: right;
    min-height: 70px;
    word-wrap: break-word;
    word-break: break-all;
    color: rgba(255, 255, 255, .75);
    background-color: rgba(0, 0, 0, .75);
    font-size: 1.5rem;
`

export const CurrentOperand = styled.div`
    padding: 0px 12px 12px;
    grid-column-end: span 4;
    text-align: right;
    word-wrap: break-word;
    word-break: break-all;
    color: white;
    min-height: 70px;
    font-size: 2.5rem;
    background-color: rgba(0, 0, 0, .75);
`

export const Buttons = styled.button`
    cursor: pointer;
    padding: 20px 0;
    font-size: 2rem;
    border: 1px solid white;
    outline: none;
    background-color: rgba(255, 255, 255, .75);
    grid-column-end: ${({span}) => (span == true ? 'span 2': 'span 1')};

    &:hover {
    background-color: rgba(255, 255, 255, .9);
    }
`