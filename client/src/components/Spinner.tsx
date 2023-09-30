import styled from "styled-components";

export const Spinner = styled.div`
    @keyframes spinner {
        to {transform: rotate(360deg);}
    }
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    &:before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid ${(props) => props.theme.colors.green};
        border-top-color: #fff;
        animation: spinner .6s linear infinite;
    }
`;
