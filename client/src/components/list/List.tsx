import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 0 auto;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-top: 30px;
    > div:not(:last-child) {
        margin-bottom: 15px;
    }
`;

export const List: React.FC<PropsWithChildren> = ({ children }) => <StyledDiv>{children}</StyledDiv>;
