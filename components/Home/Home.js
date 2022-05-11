import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import Typed from 'react-typed'
import { Caption, Container, ContainerHome, Information, Photo, Social, SocialLink, Subtitle, Title } from './Styles'

const AboutMe = () => {
    return (
        <ContainerHome id='home'>
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