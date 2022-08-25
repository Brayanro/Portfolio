import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import { Container, FooterContainer, FooterInfo, FooterSpan, Social, SocialLink } from './Styles'

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <hr></hr>
                <FooterInfo>
                    Hecho con ❤️ por <FooterSpan>Brayan Rodriguez Montealegre</FooterSpan>
                </FooterInfo>
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
            </Container>
        </FooterContainer>
    )
}

export default Footer