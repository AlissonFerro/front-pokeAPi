import { Outlet } from "react-router-dom";
import Menubar from "../Components/Menubar";
import { Root, Section } from "./styles";
import { Grid } from "@mui/material";

export default function MenuLayout() {
    return (
        <Root sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid>
                <Menubar />
            </Grid>
            <Section >
                <Outlet />
            </Section>
        </Root>
    )
}