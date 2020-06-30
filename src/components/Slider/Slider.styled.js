import styled from 'styled-components';

export const SliderStyled = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 80vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    & div {
        border: 1px solid blue;
        min-width: 100%;
        height: 60%;
        transition: .5s;
    }

    & button {
        position: absolute;
       top: 50%;
       transform: translateY(-50%); 
       width: 5%;
       height: 60%;
       background: none;
    }

    & #goLeft {
        left: 0;
        
    }

    & #goRight {
        right: 0;
    }
`
