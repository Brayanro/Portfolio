import { IoOpenOutline } from 'react-icons/io5'
import { portfolio } from '../profile'
import { ButtonCode, ButtonContainer, ButtonVisit, Card, CardDescription, CardInformation, CardItem, CardTitle, Container, ContainerPortfolio, Image, Title } from './Styles'

const Portfolio = () => {
    return (
        <ContainerPortfolio id='portfolio'>
            <Title>Portfolio</Title>
            <Container>
                <Card>
                    {
                        portfolio.map(({ title, image, description, hrefdemo, hrefcode }, i) => (
                            <CardItem key={i}>
                                <Image src={image} alt='Portfolio image' />
                                <CardInformation>
                                    <CardTitle>{title}</CardTitle>
                                    <CardDescription>{description}</CardDescription>
                                    <ButtonContainer>
                                        <ButtonVisit
                                            rel="noopener"
                                            href={hrefdemo}
                                            target="_blank">
                                            Demo<IoOpenOutline />
                                        </ButtonVisit>
                                        <ButtonCode
                                            rel="noopener"
                                            href={hrefcode}
                                            target="_blank">
                                            Code<IoOpenOutline />
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