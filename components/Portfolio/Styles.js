import styled from "styled-components"

export const ContainerPortfolio = styled.section`
  padding: 70px 0;
`
export const Container = styled.div`
  margin: 0 auto;
  padding-top: 1rem;
  max-width: 1200px;
`

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 2.7rem;
  font-weight: 600;
  letter-spacing: 0.12rem;
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  place-items: center;
  
  @media only screen and (min-width: 1200px){
    margin: 30px;
  }

  @media only screen and (max-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 20px;
  }

  @media only screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CardItem = styled.article`
  background: #fff;
  border: none;
  box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
  border-radius: 5px;
  text-align: center;
  width: 350px;
  transition: transform .3s;

  &:hover {
    transform: translateY(5px);
    box-shadow: 2px 2px 26px 0px rgba(0,0,0,0.3);
  }
  
  @media only screen and (max-width: 768px) {
    width: 300px;
  }

  @media only screen and (max-width: 500px) {
    text-align: center;
  }
`

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const CardInformation = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 0 20px 20px;
`

export const CardTitle = styled.h3`
  background: #fff;
  color: #232946;
  letter-spacing: .12rem;
  text-transform: uppercase;
`

export const CardDescription = styled.p`
  background: #fff;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.3rem;
  background-color: transparent;
`

export const ButtonVisit = styled.a`
  text-decoration: none;
  margin-top: 10px;
  font-size: 1.1em;
  padding: 0.25em 1em;
  border: 2px solid #5584AC;
  border-radius: 3px;
  letter-spacing: 0.04rem;
  cursor: pointer;
  color: #fff;
  background: #5584AC;
  display: flex;
  align-items: center;
  svg {
      margin-left: 0.5rem;
      background: none;
      color: #fff;
      font-size: 1.2rem;
    }

    &:hover {
      transition: all 0.3s ease;
      background: #95D1CC;
    }
`

export const ButtonCode = styled.a`
  text-decoration: none;
  margin-top: 10px;
  font-size: 1rem;
  padding: 0.25em 1em;
  border: 2px solid #4F7269;
  border-radius: 3px;
  letter-spacing: 0.04rem;
  cursor: pointer;
  color: #fff;
  background: #4F7269;
  display: flex;
  align-items: center;
  svg {
    margin-left: 0.5rem;
    background: none;
    color: #fff;
    font-size: 1.2rem;
  }

  &:hover {
    transition: all 0.3s ease;
    background: #95D1CC;
  }
`