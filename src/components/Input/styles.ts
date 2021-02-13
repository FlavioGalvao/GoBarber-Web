import styled, { css } from 'styled-components';

interface ContainerProps{
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
        background: #232129;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 16px;
        width: 100%;
        color: #f4ada8;
        display: flex;
        align-items: center;

        & + div {
             margin-top: 8px;
        }

    ${props => props.isFocused && css`
        color: #FF9000;
        border-color: #FF9000;
    `}

    ${props => props.isFilled && css`
        color: #FF9000;
    `}


    input {
        flex: 1;
        background: transparent;
        border: 0;

        &::placeholder {
            color: #666360;
        }

        & + input {
             margin-top: 8px;
        }
    }

    svg {
        margin-right: 18px;
    }
`;