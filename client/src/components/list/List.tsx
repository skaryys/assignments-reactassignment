import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    max-height: calc(100vh - 200px);
    overflow: auto;
    > div:not(:last-child) {
        margin-bottom: 15px;
    }
`;

export const List: React.FC<PropsWithChildren> = ({ children }) => <StyledDiv>{children}</StyledDiv>;
