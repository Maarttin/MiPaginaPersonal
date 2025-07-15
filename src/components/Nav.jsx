import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ImageAvatars from "../components/Avatar";
export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: '#0D1B2A', color: '#E0E1DD' }}>
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}

                        onClick={handleClick}
                    >
                        Contáctame

                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ ml: 'auto' }}>
                        Martín Aragón Sánchez
                    </Typography>
                    <div className=" pl-8 " >
                        <ImageAvatars />
                    </div>

                </Toolbar>

            </AppBar>
            <Menu

                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        width: '350px',
                        height: '250px',
                        maxHeight: '90vh',
                        bgcolor: '#1b263b',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                }}
                MenuListProps={{
                    sx: {
                        color: '#fff',         // Color del texto
                    },
                }}
            >
                <MenuItem onClick={handleClose}><strong>GitHub:</strong> <a href="https://github.com/Maarttin" target="_blank" rel="noopener noreferrer"> github.com/Maarttin</a></MenuItem>
                <MenuItem onClick={handleClose}><strong>Correo  <br />  electrónico:</strong>  <br /> martinaragonsanchez@gmail.com</MenuItem>
                <MenuItem onClick={handleClose}><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/mart%C3%ADn-arag%C3%B3n-s%C3%A1nchez-36942b283/" target="_blank" rel="noopener noreferrer" > linkedin.com/Martin</a> </MenuItem>
                <MenuItem onClick={handleClose}><strong>Teléfono: </strong> 9513963434</MenuItem>
            </Menu>

        </Box>

    );
}
