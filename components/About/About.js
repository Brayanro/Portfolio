import { AiOutlineDownload, AiOutlineMail } from 'react-icons/ai';
import { ButtonContact, ButtonContainer, ButtonCV, Container, ContainerAbout, Description, Education, EducationItem, Photo, Title } from "./Styles";

const About = () => {
    return (
        <ContainerAbout id="about">
            <Title>About Me</Title>
            <Container>
                <Photo src="/about.jpg" />
                <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quos, quae asperiores, commodi consequatur ab, quidem accusantium pariatur laboriosam repellendus corrupti. Esse est earum inventore laudantium, enim odit ipsam ad.
                    <br />
                    <br />
                    <b>Education:</b>
                    <Education>
                        <EducationItem>
                            Software Engineering - Universidad Surcolombiana
                        </EducationItem>
                        <EducationItem>
                            React-Guía definitiva: hooks router redux next+Proyectos - Udemy
                        </EducationItem>
                        <EducationItem>
                            Scrum Fundamentals Certified - SCRUMstudy
                        </EducationItem>
                    </Education>
                    <ButtonContainer>
                        <ButtonContact href="mailto:brayan7890123@gmail.com">
                            Contact<AiOutlineMail />
                        </ButtonContact>
                        <ButtonCV href="/cv.pdf" download>
                            Download Resume<AiOutlineDownload />
                        </ButtonCV>
                    </ButtonContainer>
                </Description>
            </Container>
        </ContainerAbout>
    )
}

export default About