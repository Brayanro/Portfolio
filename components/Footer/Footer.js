import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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
            </Container>
        </FooterContainer>
    )
}

export default Footer