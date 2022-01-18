import styled from 'styled-components'

export const ContainerContact = styled.section`
  padding: 70px 0;
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 2rem;
  }
`

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.12rem;
`

export const Subtitle = styled.span`
  color: #00ADB5;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
`

export const ContactImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`

export const ContainerForm = styled.div`
  padding-top: 2rem;
`
export const ContactForm = styled.form`
  display: grid;
  gap: 1.3rem;

  @media only screen and (max-width: 1200px) {
    margin: 2rem;
  }
`

export const ContactContent = styled.div`
  background-color: #393E46;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.25rem;
`
export const Label = styled.label`
  color: #fff;
  font-size: 0.9rem;
`

export const Input = styled.input`
  width: 100%;
  background-color: #393E46;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  border: none;
  outline: none;
  padding: 0.25rem 0.5rem 0.5rem 0;
`

export const TextArea = styled.textarea`
  width: 100%;
  background-color: #393E46;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  border: none;
  outline: none;
  padding: 0.25rem 0.5rem 0.5rem 0;
`

export const ContactButton = styled.button`
  font-size: 0.9rem;
  border: none;
  padding: 1rem;
  border-radius: 0.7rem;
  letter-spacing: 0.04rem;
  cursor: pointer;
  color: #fff;
  background: #00ADB5;
  display: flex;
  justify-content: center;
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