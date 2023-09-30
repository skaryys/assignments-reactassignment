import styled from "styled-components";
import { ReactNode } from "react";

export type HeaderTitleProps = {
    children: ReactNode;
};

const StyledH1 = styled.h1`
    font-size: 28px;
    font-family: 'Righteous', cursive;
`;

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ children }) => (
    <StyledH1>
        {children}
    </StyledH1>
);
