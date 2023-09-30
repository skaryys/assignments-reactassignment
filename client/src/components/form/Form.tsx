import { useState } from "react";
import styled from "styled-components";
import { FormProps } from "./types";
import { Input } from "./Input";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "./Button";

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    > div > button {
        margin-left: 10px;
    }
`;

export const Form = (props: FormProps): JSX.Element => {
    const [data, setData] = useState(props.initialValue);

    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();
                props.handleSubmit(data);
            }}
            onReset={() => {
                props.handleCancel();
            }}
        >
            <Input initialValue={props.initialValue} handleInputChange={(value: string) => setData(value)} />
            <div>
                <Button type={"submit"}>
                    <CheckIcon />
                </Button>
                <Button type={"reset"}>
                    <Cross1Icon />
                </Button>
            </div>
        </StyledForm>
    );
};
