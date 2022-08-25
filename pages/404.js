import Link from 'next/link'
import { ButtonHome, ContainerButton, ContainerNotFound, Image, NotFoundText, Span, Text } from '../components/404/Styles'

const PageNotFound = () => {
    return (
        <ContainerNotFound>
            <Image src='/404.png' alt='Error 404' />
            <NotFoundText>
                <Text>Ooops! <br />Página no encontrada</Text>
                <Span>Esta página fue removida o no existe! <br /> Te sugiero que regreses al inicio</Span>
                <ContainerButton>
                    <Link href='/' passHref>
                        <ButtonHome>Regresar al inicio</ButtonHome>
                    </Link>
                </ContainerButton>
            </NotFoundText>
        </ContainerNotFound>
    )
}

export default PageNotFound