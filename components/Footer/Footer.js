import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import { Container, FooterContainer, FooterInfo, Social, SocialLink } from './Styles';

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <hr></hr>
                <FooterInfo>
                    Made with ❤️ by Brayan Rodriguez Montealegre
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
                        href='https://www.linkedin.com/in/brayan-rodriguez-montealegre-7ba099224/'
                        target='_blank'>
                        <IoLogoLinkedin />
                    </SocialLink>
                    <SocialLink
                        rel='noopener'
                        href='https://www.instagram.com/brayan.rodriguezmontealegre/'
                        target='_blank'>
                        <IoLogoInstagram />
                    </SocialLink>
                </Social>
            </Container>
        </FooterContainer>
    )
}

export default Footer