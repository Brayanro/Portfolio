import Link from 'next/link'
import { ButtonHome, ContainerButton, ContainerNotFound, Image, NotFoundText, Span, Text } from '../components/404/Styles'

const PageNotFound = () => {
    return (
        <ContainerNotFound>
            <Image src='/404.png' alt='Error 404' />
            <NotFoundText>
                <Text>Ooops! <br />Page Not Found.</Text>
                <Span>This page doesn&apos;t exist or was removed! <br /> I suggest you back to home</Span>
                <ContainerButton>
                    <Link href='/'>
                        <ButtonHome>Back to Home</ButtonHome>
                    </Link>
                </ContainerButton>
            </NotFoundText>
        </ContainerNotFound>
    )
}

export default PageNotFound