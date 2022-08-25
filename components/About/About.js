import { IoDownloadOutline } from 'react-icons/io5'
import { AboutMe, BackgroundPhoto, ButtonContainer, ButtonCV, Container, ContainerAbout, ContainerPhoto, Description, Education, EducationItem, Photo, Title } from './Styles'

const About = () => {
    return (
        <ContainerAbout name='about'>
            <Title>Sobre mi</Title>
            <Container>
                <ContainerPhoto>
                    <BackgroundPhoto>
                        <Photo src='/aboutme.png' />
                    </BackgroundPhoto>
                </ContainerPhoto>
                <Description>
                    <AboutMe>Desarrollador frontend con dominio en tecnologías web, con conocimientos en frameworks como React, Next.js, Bootstrap, Tailwind.Apasionado por el desarrollo de software, las buenas prácticas de código y diseño; mantengo en constante aprendizaje. Proactivo, colaborador y con la capacidad de trabajar en equipo. Soy estudiante de ingeniería de software y actualmente estoy en el noveno semestre.</AboutMe>
                    <br />
                    <b>Educación:</b>
                    <Education>
                        <EducationItem>
                            Ingeniería de Software - Universidad Surcolombiana - Actualmente
                        </EducationItem>
                        <EducationItem>
                            GIT+GitHub: Todo un sistema de control de versiones de cero - 2022
                        </EducationItem>
                        <EducationItem>
                            React-Guía definitiva: hooks router redux next+Proyectos - Udemy - 2021
                        </EducationItem>
                        <EducationItem>
                            Scrum Fundamentals Certified - SCRUMstudy - 2021
                        </EducationItem>
                    </Education>
                    <ButtonContainer>
                        <ButtonCV href='/cv-brayan-rodriguez-montealegre.pdf' download>
                            Descargar CV<IoDownloadOutline />
                        </ButtonCV>
                    </ButtonContainer>
                </Description>
            </Container>
        </ContainerAbout>
    )
}

export default About