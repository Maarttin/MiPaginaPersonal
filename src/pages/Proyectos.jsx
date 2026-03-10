import "./css/Proyecto.css"
import Bi from "../assets/proyectosImagenes/biblioteca.png"
import Cine from "../assets/proyectosImagenes/cinecritico.png"
import Personal from "../assets/proyectosImagenes/paginapersonal.png"
function Proyectos() {
    return (
        <div className="Contenedor">
            <h1>Proyectos</h1>
            <div className="proyectos">
                <ul>
                    <br />
                    <li>
                        <h2>Administración para una biblioteca</h2>
                        <p><a href="https://github.com/Maarttin/bibliotecaInventario" target="_blank" rel="noopener noreferrer">Ir al repositorio</a></p>
                        <img src={Bi} alt="Proyecto 1" className="proyecto-imagen" />
                    </li>
                     <br />
                    <li>
                        <h2>Sistema para reseñar libros y peliculas</h2>
                        <p><a href="https://github.com/Maarttin/CineCritico" target="_blank" rel="noopener noreferrer">Ir al repositorio</a></p>
                        <img src={Cine} alt="Proyecto 2" className="proyecto-imagen" />

                    </li>
                      <br />
                    <li>
                        <h2>Mi propia pagina personal</h2>
                        <p><a href="https://github.com/Maarttin/MiPaginaPersonal" target="_blank" rel="noopener noreferrer">Ir al repositorio</a></p>
                        <img src={Personal} alt="Proyecto 3" className="proyecto-imagen" />
                    </li>
                    <br />
                    <li>
                        <h2>Simulador de finanzas</h2>
                        <p><a href="https://github.com/Maarttin/finanzasDesk" target="_blank" rel="noopener noreferrer">Ir al repositorio</a></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Proyectos;