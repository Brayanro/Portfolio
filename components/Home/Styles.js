import styled from 'styled-components'

export const ContainerHome = styled.section`
    padding: 70px 0;
`

export const Container = styled.div`
    margin: 0 auto;
    padding-top: 1rem;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-left: 3.8rem;

    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        text-align: center;
        padding: 0;     
    }
`

export const Information = styled.div`

    @media only screen and (max-width: 768px) {
        padding-top: 3rem;
    }    
`

export const Title = styled.h1`
    font-weight: 800;
    font-size: 4.2rem;
    color: #fff;

    @media only screen and (max-width: 568px) {
        font-size: 3rem;
    }

    @media only screen and (max-width: 320px) {
        font-size: 2.5rem;
    }
`

export const Subtitle = styled.p`
    font-size: 1.8rem;
    line-height: 2rem;
    font-weight: 400;
    margin-top: 2rem;
    color: #00ADB5;
`

export const Caption = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 0.5rem;
    color: #00ADB5;
`

export const Photo = styled.img`
	object-fit: contain;
    width: 90%;
    height: auto;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

export const Social = styled.div`
    display: flex;
    padding-top: 0.5rem;
    gap: 0 1rem;

    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`

export const SocialLink = styled.a`
    cursor: pointer;
    padding: 0 0.5rem;
    font-size: 3.5rem;
    color: #fff;
    
    &:hover {
        transition: all 0.3s ease;
        color: #00ADB5;
    }
`
