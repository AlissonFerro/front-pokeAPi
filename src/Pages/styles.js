import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export const ContainerCenter = styled(Grid)(({theme})=> ({
  display: 'flex',
  flexDirection: 'column !important'
}));

export const PageCenter = styled('div')(({theme}) => {

})


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
}));

export const ContainerGap = styled(Container)(({theme}) => {

})

export const RowHeader = styled('div')(({theme}) => {

})

export const Void = styled('div')(({theme}) => {

})

export const Input = styled('input')(({theme}) => {

})
export const Title = styled('h1')(({theme}) => {

})
export const Image = styled('img')(({theme}) => {

})