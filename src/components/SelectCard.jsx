import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ButtonBaseDemo from "../components/Boton";
import { useTheme } from '@mui/material/styles';

const cards = [
  {
    id: 2,
    title: 'Habilidades',
    descriptionLong: 'Responsabilidad. \nResolución de problemas.\n Trabajo en equipo. \n Pensamiento crítico. \nProactividad. ',
  },
  {
    id: 3,
    title: 'Proyectos',
    descriptionLong: 'Humans depend on plants and animals for survival.',
  },
  {
    id: 4,
    title: 'Pasatiempos',
    descriptionLong: 'Me gusta jugar ajedrez.\n Me gusta el dibujo. \n Me gustan los videojuegos.'
  }

];



export default function SelectActionCard() {

  const [expandedCardId, setExpandedCardId] = React.useState(null);

  const handleToggle = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };
  const theme = useTheme();
  return (
    <Box
      sx={{

        display: 'flex',
        justifyContent: 'center',
        width: '100%',

        // alignItems: 'center',
        // height: '100vh',
      }}
    >
      <Box className="w-full max-w-4xl" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {cards.map((card) => (
          <Card key={card.id}
            sx={{

              width: '100%',
              height: expandedCardId == card.id ? 300 : 60,
              backgroundColor: expandedCardId === card.id ? theme.palette.primary.main
                : theme.palette.background.paper,
              color: expandedCardId === card.id ? theme.palette.primary.contrastText
                : theme.palette.text.primary,
              transition: 'all 0.3s ease',

            }} >
            <CardActionArea
              onClick={() => handleToggle(card.id)}


            >
              <CardContent sx={{ height: '100%', }}>
                <Typography variant="h5" component="div" sx={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: {
                    xs: '1rem',     // teléfonos pequeños
                    sm: '1.25rem',  // tablets o pantallas medianas
                    md: '1.5rem',   // laptops
                    lg: '1.75rem',  // pantallas grandes
                  },
                }} >
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                  <p style={{ whiteSpace: 'pre-line' }}>
                    {expandedCardId === card.id ? card.descriptionLong : card.descriptionShort}
                  </p>
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>

        ))}
      </Box>

    </Box>
  );
}




