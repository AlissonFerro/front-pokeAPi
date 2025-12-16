import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material";
import {
    MenuOpenOutlined,
    MenuOutlined,
    LightMode,
    DarkMode
} from "@mui/icons-material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DrawerStyles } from "../styles";
import { ThemeContext } from "../../Context/Theme";

export default function Menubar() {
    const [show, setShow] = useState(false);
    const [drawerWidth, setDrawerWidth] = useState(50);
    const navigate = useNavigate();
    const { mode, toggleColorMode } = useContext(ThemeContext)
    const handleClose = () => {
        setShow(false);
        setDrawerWidth(50)
    };

    const handleShow = () => {
        setShow(true);
        setDrawerWidth(240);
    }

    function RenderMenuIcon({ show }) {
        if (show)
            return <ListItem disablePadding>
                <ListItemButton onClick={handleClose} >
                    <ListItemIcon>
                        <MenuOpenOutlined />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>

        return <ListItem disablePadding>
            <ListItemButton onClick={handleShow} >
                <ListItemIcon>
                    <MenuOutlined />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    }

    function RenderMode({ mode }) {
        return (
            <ListItemButton onClick={toggleColorMode}>
                <ListItemIcon>
                    {mode == 'light' ? <LightMode /> : <DarkMode />}
                </ListItemIcon>
                <ListItemText primary={mode == 'light' ? 'Dark' : 'Light'} />
            </ListItemButton>
        )
    }

    return (
        <>
            <DrawerStyles
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box"
                    }
                }}
            >
                <Toolbar />
                <List>
                    <RenderMode mode={mode} />
                    <RenderMenuIcon show={show} />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CatchingPokemonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pokédex" onClick={() => { navigate('/'); handleClose() }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FavoriteIcon />
                            </ListItemIcon>
                            <ListItemText primary="Favoritos" onClick={() => { navigate('/favoritos'); handleClose() }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </DrawerStyles >
        </>
    );
}
