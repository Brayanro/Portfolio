import styled from 'styled-components'

export const ContainerNotFound = styled.div`
    text-align: center;
`

export const Image = styled.img`
`

export const NotFoundText = styled.div`

    @media only screen and (max-width: 568px) {
        position: absolute;
        left: 10rem;
    }
`

export const Text = styled.h1`
    color: #fff;
    letter-spacing: 0.05rem;
`

export const Span = styled.span`
    font-size: 0.8rem;
    color: #fff;
`

export const ContainerButton = styled.div`
    padding-top: 1.3rem;
`

export const ButtonHome = styled.a`
    text-decoration: none;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.7rem;
    letter-spacing: 0.04rem;
    cursor: pointer;
    color: #fff;
    background: #00ADB5;

    &:hover {
      transition: all 0.3s ease;
      background: #00D7E2;
    }
`