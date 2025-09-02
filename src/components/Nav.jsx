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
import { useTheme as useCustomTheme } from '../contexts/ThemeContext';
import { useMediaQuery } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const ResponsiveMenuItem = ({ children, ...props }) => (
  <MenuItem
    {...props}
    sx={{
      fontSize: {
        xs: '0.85rem',
        sm: '0.95rem',
        md: '1rem',
      },
      '& a': {
        fontSize: {
          xs: '0.8rem',
          sm: '0.9rem',
          md: '1rem',
        },
      },
    }}
  >
    {children}
  </MenuItem>
);

export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const theme = useTheme();
    const { toggleTheme } = useCustomTheme();
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
                overflowX: 'hidden',
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary
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
                            <a href="https://github.com/Maarttin" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
                                <GitHubIcon style={{ fontSize: 30 }} />
                            </a>
                            <a href="https://www.linkedin.com/in/mart%C3%ADn-arag%C3%B3n-s%C3%A1nchez-36942b283/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
                                <LinkedInIcon style={{ fontSize: 30 }} />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=martinaragonsanchez@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--text-color)' }}
                            >
                                <EmailIcon style={{ fontSize: 30 }} />
                            </a>
                            <a
                                href="https://wa.me/9513963434"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--text-color)' }}
                            >
                                <WhatsAppIcon style={{ fontSize: 30 }} />
                            </a>

                        </Box>
                    )}

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        Martín Aragón Sánchez
                    </Typography>
                    <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>

                        
                        <Button variant="outlined" onClick={toggleTheme} sx={{ ml: 2, color: 'var(--text-color)', borderColor: 'var(--text-color)' }}>
                          Tema
                        </Button>
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
                        width: { xs: '330px', sm: '350px' },


                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: 4,
                        p: 0


                    },
                }}

            >

                <ResponsiveMenuItem onClick={handleClose}
                  
                >
                    <strong>GitHub:</strong>&nbsp;
                    <a href="https://github.com/Maarttin" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
                        github.com/Maarttin
                    </a>
                </ResponsiveMenuItem>
                <ResponsiveMenuItem onClick={handleClose}>
                    <strong>Correo:</strong>&nbsp;
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=martinaragonsanchez@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-color)' }}
                    >
                        martinaragonsanchez@gmail.com
                    </a>
                </ResponsiveMenuItem>
                <ResponsiveMenuItem onClick={handleClose}>
                    <strong>LinkedIn:</strong>&nbsp;
                    <a href="https://www.linkedin.com/in/mart%C3%ADn-arag%C3%B3n-s%C3%A1nchez-36942b283/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
                        linkedin.com/Martin
                    </a>
                </ResponsiveMenuItem>
                <ResponsiveMenuItem onClick={handleClose}>
                    <strong>Teléfono: </strong>&nbsp;
                    <a
                        href="https://wa.me/9513963434"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-color)' }}
                    >
                        9513963434
                    </a>
                </ResponsiveMenuItem>
            </Menu>

        </Box>

    );
}
