import React from "react";
import styled from "styled-components";
import { PlusIcon } from "@radix-ui/react-icons";
import { HeaderTitle } from "./HeaderTitle";

export type HeaderProps = {
    children: React.ReactNode;
    handleAddItem: () => void;
};

const StyledDiv = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    button {
        all: unset;
        border-radius: 50%;
        border: 1px solid;
        background-color: ${(props) => props.theme.colors.green};
        color: #fff;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children }) => (
    <StyledDiv>
        <HeaderTitle>{children}</HeaderTitle>
        <button onClick={() => handleAddItem()}>
            <PlusIcon />
        </button>
    </StyledDiv>
);
