import React from "react";
import styled from "styled-components";
import { Checkbox } from "../Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div > button {
        margin-left: 10px;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s;
    }
    &:hover {
        > div > button {
            visibility: visible;
            opacity: 1;
        }
    }
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    > span {
        margin-left: 10px;
    }
`;

export type ListItemProps = CheckboxProps & {
    label: string;
    handleEdit: () => void;
    handleRemoval: () => void;
};

export const ListItem: React.FC<ListItemProps> = ({ label, handleRemoval, handleEdit, ...checkboxProps }) => (
    <StyledDiv>
        <Label>
            <Checkbox {...checkboxProps} />
            <span>{label}</span>
        </Label>
        <div>
            <button onClick={() => handleRemoval()}>
                <TrashIcon />
            </button>
            <button onClick={() => handleEdit()}>
                <Pencil1Icon />
            </button>
        </div>
    </StyledDiv>
);
