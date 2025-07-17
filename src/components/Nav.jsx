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
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{
                width: '100%',
                overflowX: 'hidden', backgroundColor: '#0D1B2A', color: '#E0E1DD'
            }}>
                <Toolbar >
                    {isMobile ? (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <a href="https://github.com/Maarttin" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 30, color: '#fff' }} />
                            </a>
                            <a href="https://www.linkedin.com/in/mart%C3%ADn-arag%C3%B3n-s%C3%A1nchez-36942b283/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 30, color: '#fff' }} />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=martinaragonsanchez@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <EmailIcon style={{ fontSize: 30, color: '#fff' }} />
                            </a>
                            <a
                                href="https://wa.me/9513963434"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsAppIcon style={{ fontSize: 30, color: '#fff' }} />
                            </a>

                        </Box>
                    )}

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        Martín Aragón Sánchez
                    </Typography>
                    <Box sx={{ ml: 'auto' }}>

                        <ImageAvatars />

                    </Box>

                </Toolbar>

            </AppBar>
            <Menu

                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        width: { xs: '90vw', sm: '350px' },
                        maxHeight: '90vh',

                        bgcolor: '#1b263b',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        p: 2

                    },
                }}
            >

                <MenuItem onClick={handleClose}>
                    <strong>GitHub:</strong>&nbsp;
                    <a href="https://github.com/Maarttin" target="_blank" rel="noopener noreferrer" style={{ color: '#64ffda' }}>
                        github.com/Maarttin
                    </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <strong>Correo:</strong>&nbsp;
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=martinaragonsanchez@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#64ffda' }}
                    >
                         martinaragonsanchez@gmail.com
                    </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <strong>LinkedIn:</strong>&nbsp;
                    <a href="https://www.linkedin.com/in/mart%C3%ADn-arag%C3%B3n-s%C3%A1nchez-36942b283/" target="_blank" rel="noopener noreferrer" style={{ color: '#64ffda' }}>
                        linkedin.com/Martin
                    </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <strong>Teléfono: </strong>&nbsp;
                    <a
                        href="https://wa.me/9513963434"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#64ffda' }}
                    >
                        9513963434
                    </a>
                </MenuItem>
            </Menu>

        </Box>

    );
}
