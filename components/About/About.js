import { IoDownloadOutline } from 'react-icons/io5'
import { AboutMe, BackgroundPhoto, ButtonContainer, ButtonCV, Container, ContainerAbout, ContainerPhoto, Description, Education, EducationItem, Photo, Title } from './Styles'

const About = () => {
    return (
        <ContainerAbout id='about'>
            <Title>About Me</Title>
            <Container>
                <ContainerPhoto>
                    <BackgroundPhoto>
                        <Photo src='/aboutme.png' />
                    </BackgroundPhoto>
                </ContainerPhoto>
                <Description>
                    <AboutMe>I am a frontend developer with knowledge in web technologies. Passionate about software development, good code and design practices, I keep in constant learning. I consider myself a persistent, cooperative, productive person who loves to work in a team. I am a software engineering student and I am currently in the eighth semester.</AboutMe>
                    <br />
                    <b>Education:</b>
                    <Education>
                        <EducationItem>
                            Software Engineering - Universidad Surcolombiana - Actually
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
                        <ButtonCV href='/CV.pdf' download>
                            Download CV<IoDownloadOutline />
                        </ButtonCV>
                    </ButtonContainer>
                </Description>
            </Container>
        </ContainerAbout>
    )
}

export default About