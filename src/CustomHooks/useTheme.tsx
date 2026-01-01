import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7'; 
import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../Context/Theme.jsx';

export default function ThemeToggleButton() {
  const theme = useTheme();  
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton 
      onClick={toggleColorMode} 
      color="inherit"
      aria-label="toggle light/dark mode"
    >
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};