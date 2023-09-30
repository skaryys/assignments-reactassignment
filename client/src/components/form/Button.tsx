import { FC, ReactNode } from "react";
import styled from "styled-components";

export type ButtonProps = {
    children: ReactNode;
    type?: "submit" | "reset" | "button";
    variant?: string;
    onClick?: () => void;
};

const StyledButton = styled.button<{ variant?: string}>`
    all: unset;
    border-radius: 50%;
    border: 1px solid;
    background-color: ${(props) => props.variant === "green" ? props.theme.colors.green : "gray"};
    color: #fff;
    width: 25px;
    height: 25px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`

export const Button: FC<ButtonProps> = ({ children, type, onClick, variant }) => {
    return (
      <StyledButton variant={variant} type={type} onClick={onClick}>
        {children}
      </StyledButton>
    );
  };