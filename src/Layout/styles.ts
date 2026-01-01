import { Container, Grid } from "@mui/material";
import styled from "styled-components";

export const Root = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
}))

export const Section = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center'
}))