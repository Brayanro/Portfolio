import styled from 'styled-components'

export const FooterContainer = styled.footer`
`

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    text-align: center;

    @media only screen and (max-width: 1024px){
        max-width: 950px;
    }

    @media only screen and (max-width: 968px) {
        max-width: 900px;
    }

    @media only screen and (max-width: 768px) {
        max-width: 700px;
    }

    @media only screen and (max-width: 568px) {
        max-width: 490px;
    }

    @media only screen and (max-width: 500px) {
        max-width: 400px;
    }

    @media only screen and (max-width: 375px) {
        max-width: 300px;
    }
`

export const FooterInfo = styled.p`
    color: #fff;
    font-size: 1rem;
`

export const Social = styled.div`
    margin-top: 0.5rem;
`

export const SocialLink = styled.a`
    cursor: pointer;
    padding: 0 0.5rem;
    font-size: 1.6rem;
    color: #fff;
    
    &:hover {
        transition: all 0.3s ease;
        color: #00ADB5
    }
`