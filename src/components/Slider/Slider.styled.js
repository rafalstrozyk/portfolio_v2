import styled from 'styled-components';

export const SliderStyled = styled.div`
    
    width: 90%;
    height: 70vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    & button {
        position: absolute;
       top: 50%;
       transform: translateY(-50%); 
       width: 5%;
       height: 100%;
       background: none;
       border: none;
       cursor: pointer;
    }

    & #goLeft {
        left: 0;
        
    }

    & #goRight {
        right: 0;
    }
`
