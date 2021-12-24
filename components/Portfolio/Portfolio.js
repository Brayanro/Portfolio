import { AiOutlineExport, AiOutlineGithub } from 'react-icons/ai'
import { portfolio } from '../profile'
import { ButtonCode, ButtonContainer, ButtonVisit, Card, CardDescription, CardInformation, CardItem, CardTitle, Container, ContainerPortfolio, Image, Title } from './Styles'

const Portfolio = () => {
    return (
        <ContainerPortfolio id='portfolio'>
            <Title>Portfolio</Title>
            <Container>
                <Card>
                    {
                        portfolio.map(({ title, image, description }, i) => (
                            <CardItem key={i}>
                                <Image src={image} alt="" />
                                <CardInformation>
                                    <CardTitle>{title}</CardTitle>
                                    <CardDescription>{description}</CardDescription>
                                    <ButtonContainer>
                                        <ButtonVisit rel="noopener" href="https://github.com/" target="_blank">
                                            Demo<AiOutlineExport />
                                        </ButtonVisit>
                                        <ButtonCode rel="noopener" href="https://github.com/" target="_blank">
                                            Code<AiOutlineGithub />
                                        </ButtonCode>
                                    </ButtonContainer>
                                </CardInformation>
                            </CardItem>
                        ))
                    }
                </Card>
            </Container>
        </ContainerPortfolio>
    )
}

export default Portfolio