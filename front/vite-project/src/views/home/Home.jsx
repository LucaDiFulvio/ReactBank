import Navbar from "../../components/navbar/Navbar";
import styles from './home.module.css'

const Home=()=>{
return(
    <>
    <Navbar/>
    <header className={styles.headerHome}>´
        {/* <h1>NexusReactBank</h1> */}
    </header>
    <h1>Nexus React Bank</h1>
    <section>
        <h2>Ultimas noticias financieras</h2>
        <p>" La Reserva Federal anuncia un aumento del 0.25% en las tasas de interés de referencia, marcando su primer movimiento en más de un año. Este cambio refleja los esfuerzos continuos por controlar la inflación y mantener la estabilidad económica. Los inversores están atentos a cómo esta medida afectará los mercados de valores y las condiciones de endeudamiento. Analistas pronostican un impacto moderado en los préstamos hipotecarios y otros productos financieros, mientras que las acciones de empresas vinculadas a sectores sensibles a las tasas de interés podrían experimentar volatilidad en el corto plazo. Mantente informado con nuestras actualizaciones en tiempo real mientras seguimos de cerca el desarrollo de esta situación."</p>
    </section>

    <section>
        <h2>Servicio de Programación de Turnos</h2>
        <p>Descubre nuestro servicio de programación de turnos, diseñado para ofrecerte una experiencia bancaria conveniente y sin esperas. A través de nuestra plataforma en línea y nuestra aplicación móvil, puedes reservar fácilmente un turno para visitar nuestra sucursal en el momento que más te convenga. Olvídate de largas filas y espera innecesaria. Con solo unos clics, asegura tu lugar y aprovecha al máximo tu tiempo en nuestras instalaciones. Además, recibirás recordatorios automáticos para que nunca pierdas tu cita. Simplifica tu visita al banco con nuestro servicio de programación de turnos.</p>
    </section>

    <section>
        <h2>Programas de beneficios y recompensas</h2>
        <p>Explora nuestros programas de beneficios y recompensas diseñados para premiar tu lealtad. En esta sección, encontrarás información sobre nuestras ofertas exclusivas, programas de puntos, y descuentos especiales para clientes. Desde reembolsos en compras hasta acceso privilegiado a eventos, nuestros programas están diseñados para brindarte un valor añadido por confiar en nosotros como tu institución financiera. ¡Descubre cómo puedes aprovechar al máximo tus relaciones bancarias con nuestros programas de beneficios y recompensas!</p>
    </section>

    <footer>©2024 NexusReactBank. Todos los derechos reservados.</footer>
    </>
)
}

export default Home;