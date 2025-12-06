import { Container } from "react-bootstrap";
import styled from "styled-components";

export const PageCenter = styled(Container)`
    text-align: center;
    height: 95vh;
`;

export const ContainerCenter = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerGap = styled(Container)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;