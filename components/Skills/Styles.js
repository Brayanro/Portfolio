import styled from 'styled-components'

export const ContainerSkills = styled.section`
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
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.12rem;
`

export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;

  @media only screen and (max-width: 568px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
  }
`

export const SkillItem = styled.div`
  display: grid;
  place-items: center;
  gap: 0.5rem;
  padding-top: 1.5rem;
`

export const NameSkill = styled.p`
  color: #00ADB5;
  font-size: 1.2rem;
  letter-spacing: 0.04rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;  
  }
`

export const ImageSkill = styled.img`
  object-fit: contain;
  width: 33%;

  @media only screen and (max-width: 768px) {
    width: 30%;
  }
`