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
  font-size: 2.5rem;
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
  margin: 1rem;
`

export const EducationItem = styled.li`
  padding-top: 0.3rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.3rem;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const ButtonCV = styled.a`
  text-decoration: none;
  margin-top: 10px;
  font-size: 0.9rem;
  padding: 1rem;
  border-radius: 0.7rem;
  letter-spacing: 0.04rem;
  cursor: pointer;
  color: #fff;
  background: #00ADB5;
  display: flex;
  align-items: center;
  svg {
      margin-left: 0.5rem;
      font-size: 1.2rem;
  }

  &:hover {
      transition: all 0.3s ease;
      background: #00D7E2;
  }
`