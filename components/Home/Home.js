import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import Typed from 'react-typed'
import { Caption, Container, ContainerHome, Information, Photo, Social, SocialLink, Subtitle, Title } from './Styles'

const AboutMe = () => {
    return (
        <ContainerHome name='home'>
            <Container>
                <Information>
                    <Subtitle>Hola, Mi nombre es</Subtitle>
                    <Title>Brayan Rodriguez Montealegre</Title>
                    <Caption>
                        <Typed
                            strings={[
                                'Desarrollador Frontend',
                                'Estudiante de Ingeniería de Software'
                            ]}
                            typeSpeed={60}
                            backSpeed={60}
                            loop
                        />
                    </Caption>
                    <Social>
                        <SocialLink
                            rel='noopener'
                            href='https://github.com/Brayanro'
                            target='_blank'>
                            <IoLogoGithub />
                        </SocialLink>
                        <SocialLink
                            rel='noopener'
                            href='https://www.linkedin.com/in/brayanromon/'
                            target='_blank'>
                            <IoLogoLinkedin />
                        </SocialLink>
                        <SocialLink
                            rel='noopener'
                            href='https://twitter.com/BrayanRodMonte'
                            target='_blank'>
                            <IoLogoTwitter />
                        </SocialLink>
                    </Social>
                </Information>
                <Photo src='/home.png' />
            </Container>
        </ContainerHome>
    )
}

export default AboutMe