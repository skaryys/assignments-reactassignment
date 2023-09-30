import React from "react";
import styled from "styled-components";
import { PlusIcon } from "@radix-ui/react-icons";
import { HeaderTitle } from "./HeaderTitle";
import { Button } from "../form/Button"

export type HeaderProps = {
    children: React.ReactNode;
    handleAddItem: () => void;
};

const StyledDiv = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
        margin-left: 10px;
    }
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children }) => (
    <StyledDiv>
        <HeaderTitle>{children}</HeaderTitle>
        <Button onClick={() => handleAddItem()} variant="green">
            <PlusIcon />
        </Button>
    </StyledDiv>
);
