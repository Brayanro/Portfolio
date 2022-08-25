import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { IoSend } from 'react-icons/io5'
import { ContactButton, ContactContent, ContactForm, ContactImage, Container, ContainerContact, ContainerForm, Input, Label, Subtitle, TextArea, Title } from './Styles'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6gjnquk', 'template_2pb696h', form.current, 'user_XPY6IOVxROlyJDFecPYPF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        toast.success('Mensaje Enviado!',
            {
                position: 'top-center',
                duration: 2000,
                style: {
                    borderRadius: '0.7rem',
                    background: '#393E46',
                    padding: '1rem',
                    color: '#fff',
                },
            }
        );
    };

    return (
        <ContainerContact name='contact'>
            <Title>Contacto</Title>
            <Subtitle>Ponte en contacto</Subtitle>
            <Container>
                <ContactImage src='/contact.svg' />
                <ContainerForm>
                    <ContactForm ref={form} onSubmit={sendEmail}>
                        <ContactContent>
                            <Label>Nombre</Label>
                            <Input type='text' name='user_name' required />
                        </ContactContent>
                        <ContactContent>
                            <Label>Correo electrónico</Label>
                            <Input type='email' name='user_email' required />
                        </ContactContent>
                        <ContactContent>
                            <Label>Mensaje</Label>
                            <TextArea name='message' cols='0' rows='6' required />
                        </ContactContent>
                        <ContactButton type='submit'>Enviar Mensaje<IoSend /></ContactButton>
                        <Toaster />
                    </ContactForm>
                </ContainerForm>
            </Container>
        </ContainerContact>
    )
}

export default Contact