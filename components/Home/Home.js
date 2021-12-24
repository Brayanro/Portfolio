import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Typed from 'react-typed';
import { Caption, Container, ContainerHome, Information, Photo, Social, SocialLink, Subtitle, Title } from './Styles';

const AboutMe = () => {
    return (
        <ContainerHome>
            <Container>
                <Information>
                    <Subtitle>Hello, My Name is</Subtitle>
                    <Title>Brayan Rodriguez Montealegre</Title>
                    <Caption>
                        <Typed
                            strings={[
                                'Frontend Developer',
                                'Software Engineering Student'
                            ]}
                            typeSpeed={60}
                            backSpeed={60}
                            loop
                        />
                    </Caption>
                    <Social>
                        <SocialLink rel="noopener" href="https://github.com/Brayanro" target="_blank">
                            <AiFillGithub />
                        </SocialLink>
                        <SocialLink rel="noopener" href="https://www.linkedin.com/in/brayan-rodriguez-montealegre-7ba099224/" target="_blank">
                            <AiFillLinkedin />
                        </SocialLink>
                        <SocialLink rel="noopener" href="https://web.facebook.com/people/Brayan-Rodriguez-Montealegre/100065340333128/" target="_blank">
                            <AiFillFacebook />
                        </SocialLink>
                    </Social>
                </Information>
                <Photo src="/home.png" />
            </Container>
        </ContainerHome>
    )
}

export default AboutMe