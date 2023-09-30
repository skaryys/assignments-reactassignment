import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.blackAA};
    background-image: url("/bg_image.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`;
