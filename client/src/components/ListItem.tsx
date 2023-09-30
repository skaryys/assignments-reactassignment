import React from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
        margin-left: 10px;
    }
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    > span {
        margin-left: 10px;
    }
`;

export type LiteItemProp = CheckboxProps & {
    label: string;
    handleEdit: () => void;
    handleRemoval: () => void;
};

export const ListItem: React.FC<LiteItemProp> = ({ label, handleRemoval, handleEdit, ...checkboxProps }) => (
    <StyledDiv>
        <Label>
            <Checkbox {...checkboxProps} />
            <span>{label}</span>
        </Label>
        <div>
            <button onClick={() => handleEdit()}>
                <TrashIcon />
            </button>
            <button onClick={() => handleRemoval()}>
                <Pencil1Icon />
            </button>
        </div>
    </StyledDiv>
);
