import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ButtonBaseDemo from "../components/Boton";
import { useTheme } from '@mui/material/styles';
import pagpersonal from '../assets/ProyectosImagenes/pagpersonal.png'
import biblio from '../assets/ProyectosImagenes/biblioteca.png'
const cards = [
  {
    id: 2,
    title: 'Habilidades',
    descriptionLong: 'Adaptabilidad tecnológica. \nAnálisis de datos.\n Control de versiones colaborativo. \n Metodologías ágiles(scrum). \nBuenas prácticas de código.  \n Mejora continua. \n Comunicación efectiva.\n Trabajo en equipo. \n Gestión del tiempo.',
  },
  {
    id: 3,
    title: 'Conocimientos técnicos',
    descriptionLong: "Lenguajes: Python, Java, C, JavaScript \n Frameworks: Angular, Vue, React, Laravel, Spring Boot \n Herramientas: Git, Github, Docker, VS Code, Postman, Jira \n Bases de datos: MySQL, PostgreSQL, Firebase MongoDB \n Sistemas operativos: Windows, Linux \n Otros: HTML, CSS, REST APIs, Testing, CI/CD"
 
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
        margin: 'auto',

        // alignItems: 'center',
        // height: '100vh',
      }}
    >
      <Box className="w-full max-w-6xl" sx={{
        display: 'flex', flexDirection: 'column', gap: 2, width: {
          xs: '100%',
          sm: '100%',
          md: '90%',
          lg: '80%'
        }
      }}>
        {cards.map((card) => (
          <Card key={card.id}
            sx={{
              height: expandedCardId === card.id ? 'auto' : 60,
              backgroundColor: expandedCardId === card.id ? theme.palette.primary.main
                : theme.palette.background.paper,
              color: expandedCardId === card.id ? theme.palette.primary.contrastText
                : theme.palette.text.primary,
              transition: 'all 0.3s ease',
              overflow: 'visible',
            }} >
            <CardActionArea
              onClick={() => handleToggle(card.id)}


            >
              <CardContent sx={{
                width: '100%',
                p: { xs: 2, sm: 1.5, md: 1 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: expandedCardId === card.id ? 'flex-start' : 'flex-start',
                minHeight: expandedCardId === card.id
                  ? { xs: 120, sm: 200, md: 120 }
                  : { xs: 60, sm: 80, md: 80 },
              }}>
                <Typography variant="h5" component="div" sx={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: {
                    xs: '1.25rem',     // teléfonos pequeños
                    sm: '1.5rem',  // tablets o pantallas medianas
                    md: '1.75rem',   // laptops
                    lg: '2rem',  // pantallas grandes
                  },
                  padding: expandedCardId === card.id ? 2 : 0,
                }} >
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{

                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontSize: {
                    xs: '1rem',     // teléfonos pequeños
                    sm: '1.25rem',  // tablets o pantallas medianas
                    md: '1.5rem',   // laptops
                    lg: '1.75rem',  // pantallas grandes
                  },
                }} >
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




