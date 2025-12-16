import { Container } from "@mui/material";
import styled from "styled-components";

export const Root = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}))