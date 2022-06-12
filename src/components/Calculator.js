import React, { useState } from 'react'
import { OutputWrap, ButtonWrap, Buttons, CalculatorWrap, Container, CurrentOperand, PrevOperand } from './CalculatorElements'


const Calculator = () => {
    const [prev, setStatePrev] = useState('');
    const [current, setStateCurrent] = useState('');
    const [operand, setStateOperand] = useState('');
    const [stop, setStateStop] = useState(false);
    const [equals, setStateEquals] = useState(false);

    const operands = {
        divide: '/',
        multiply: '*',
        add: '+',
        subtract: '-'
    }

    function handleNums(e) {
        if (equals === true) {
            setStateStop(false);
            setStatePrev(String(e.target.value));
            setStateCurrent('');
            setStateOperand('');
            setStateEquals(false);
        } else {
            if (operand !== '') {
                setStateStop(true);
                setStateCurrent(current + String(e.target.value));
            } else {
                setStatePrev(prev + String(e.target.value));
            }
        }
    }

    function handlePoint(e) {
        if (prev.indexOf(e.target.value) < 0)
            handleNums(e);
    }

    function handleDel() {
        if (stop == false) {
            setStatePrev(prev.substr(0, prev.length - 1));
            setStateOperand('');
        } else {
            if (current !== '') {
                setStateCurrent(current.substr(0, current.length - 1));
            } else {
                setStateOperand('');
                setStateStop(false);
                setStatePrev(prev.substr(0, prev.length - 1));
            }
        }
    }

    function handleAC() {
        setStatePrev('');
        setStateCurrent('');
        setStateOperand('');
        setStateStop(false);
        setStateEquals(false);
    }

    function handleOperand(e) {
        if (equals === true) {
            setStatePrev(current + e.target.value);
            setStateOperand(e.target.value);
            setStateCurrent('');
            setStateEquals(false);
        } else {
            if (stop === false) {
                if (operand === '') {
                    setStatePrev(prev + e.target.value);
                } else {
                    setStatePrev(prev.substr(0, prev.length - 1) + e.target.value);
                }
                setStateOperand(e.target.value);
            }
        }
    }

    function handleEquals() {
        const prevNum = parseFloat(prev.substr(0, prev.length - 1));
        const curNum = parseFloat(current);

        setStateEquals(true);

        switch (operand) {
            case operands.divide:
                setStateCurrent(String(prevNum / curNum));
                break;
            case operands.multiply:
                setStateCurrent(String(prevNum * curNum));
                break;
            case operands.add:
                setStateCurrent(String(prevNum + curNum));
                break;
            case operands.subtract:
                setStateCurrent(String(prevNum - curNum));
                break;
        
            default:
                break;
        }
        setStatePrev(prev + current);
    }

    return (
        <>
            <Container>
                <CalculatorWrap>
                    <OutputWrap>
                        <PrevOperand>{prev}</PrevOperand>
                        <CurrentOperand>{current}</CurrentOperand>
                    </OutputWrap>
                    <ButtonWrap>
                        <Buttons onClick={handleAC} span={true}>AC</Buttons>
                        <Buttons onClick={handleDel}>DEL</Buttons>
                        <Buttons value={operands.divide} onClick={handleOperand}>/</Buttons>
                        <Buttons value='1' onClick={handleNums}>1</Buttons>
                        <Buttons value='2' onClick={handleNums}>2</Buttons>
                        <Buttons value='3' onClick={handleNums}>3</Buttons>
                        <Buttons value={operands.multiply} onClick={handleOperand}>*</Buttons>
                        <Buttons value='4' onClick={handleNums}>4</Buttons>
                        <Buttons value='5' onClick={handleNums}>5</Buttons>
                        <Buttons value='6' onClick={handleNums}>6</Buttons>
                        <Buttons value={operands.add} onClick={handleOperand}>+</Buttons>
                        <Buttons value='7' onClick={handleNums}>7</Buttons>
                        <Buttons value='8' onClick={handleNums}>8</Buttons>
                        <Buttons value='9' onClick={handleNums}>9</Buttons>
                        <Buttons value={operands.subtract} onClick={handleOperand}>-</Buttons>
                        <Buttons value='.' onClick={handlePoint}>.</Buttons>
                        <Buttons value='0' onClick={handleNums}>0</Buttons>
                        <Buttons onClick={handleEquals} span={true}>=</Buttons>
                    </ButtonWrap>
                </CalculatorWrap>
            </Container>   
        </>
    )
}

export default Calculator
