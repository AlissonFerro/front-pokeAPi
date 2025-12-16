import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Drawer } from "@mui/material";

export const DrawerStyles = styled(Drawer)(({ themes }) => ({

}))

export const Menu = styled('div')(({ theme }) => ({

}))


export const NavLink = styled(Link)(({ theme }) => ({

}))


export const CardT = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem', 
    minWidth: '200px'
    
}))

export const CardBody = styled('div')(({ theme }) => ({
    
}))


export const CardFooter = styled(Card)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center'

}))

export const Row = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: theme.spacing(2),

    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },

    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(3),
    },
    display: 'flex',
    flexDirection: "row"
}));

export const Col = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: theme.spacing(2),

    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },

    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(3),
    },
    display: 'flex',
    flexDirection: "column"
}));

export const CardTitlePokeInfo = styled('h2')(({ theme }) => ({

}))


export const RowHeader = styled('div')(({ theme }) => ({

}))


export const Void = styled('div')(({ theme }) => ({

}))


export const Input = styled('input')(({ theme }) => ({

}))

export const Title = styled('h1')(({ theme }) => ({
    cursor: 'pointer'
}))

export const PokeImage = styled('img')(({ theme }) => ({
    cursor: 'pointer'
}))
