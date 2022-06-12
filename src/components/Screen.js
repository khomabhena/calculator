import React from 'react'
import { ButtonContainer, Buttons, Container, CurrentOperand, Output, PreviousOperand } from './ScreenElements'

const ScreenEl = () => {
    return (
        <>
            <Container>

                <Output>
                    <PreviousOperand>123</PreviousOperand>
                    <CurrentOperand>5454,585</CurrentOperand>
                </Output>
                <ButtonContainer>
                    <Buttons span={true}>AC</Buttons>
                    <Buttons>DEL</Buttons>
                    <Buttons>/</Buttons>
                    <Buttons>1</Buttons>
                    <Buttons>2</Buttons>
                    <Buttons>3</Buttons>
                    <Buttons>*</Buttons>
                    <Buttons>4</Buttons>
                    <Buttons>5</Buttons>
                    <Buttons>6</Buttons>
                    <Buttons>+</Buttons>
                    <Buttons>7</Buttons>
                    <Buttons>8</Buttons>
                    <Buttons>9</Buttons>
                    <Buttons>-</Buttons>
                    <Buttons>.</Buttons>
                    <Buttons>0</Buttons>
                    <Buttons span={true}>=</Buttons>
                </ButtonContainer>

            </Container>
        </>
    )
}

export default ScreenEl
