import styled from 'styled-components'

export const ContainerAbout = styled.section`
  padding: 70px 0;
`
export const Container = styled.div`
    margin: 0 auto;
    padding-top: 1rem;
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media only screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
    }
`

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 2.7rem;
  font-weight: 600;
  letter-spacing: 0.12rem;
`

export const Photo = styled.img`
  width: 350px;
  border-radius: 0.5rem;
  justify-self: center;
  align-self: center;
  
  @media only screen and (max-width: 768px) {
    width: 250px;      
  }
`

export const Description = styled.div`
  color: #fff;
  font-size: 1rem;
  margin-top: 1rem;

  @media only screen and (max-width: 768px) {
    margin: 45px;
  }
`

export const Education = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`

export const EducationItem = styled.li`
  display: flex;
  align-items: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.3rem;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const ButtonContact = styled.a`
    text-decoration: none;
    margin-top: 10px;
    font-size: 1rem;
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

export const ButtonCV = styled.a`
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