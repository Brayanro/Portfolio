import { useState } from 'react'
import { IoBriefcase, IoConstruct, IoHome, IoMail, IoPerson } from 'react-icons/io5'
import { Link } from 'react-scroll'
import { ContainerNav, Hamburger, Logo, Nav, NavLink, NavMenu } from './Styles'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <ContainerNav>
            <Nav>
                <Logo>Brayan</Logo>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                    <span />
                </Hamburger>
                <NavMenu isOpen={isOpen}>
                    <NavLink>
                        <Link
                            to='home'
                            smooth
                            duration={500}
                        >
                            <IoHome style={{ marginBottom: '3px' }} />Inicio
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link
                            to='about'
                            smooth
                            offset={-10}
                            duration={500}
                        >
                            <IoPerson style={{ marginBottom: '3px' }} />Sobre mi
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link
                            to='skills'
                            smooth
                            offset={-10}
                            duration={500}
                        >
                            <IoConstruct style={{ marginBottom: '3px' }} />Habilidades
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link
                            to='portfolio'
                            smooth
                            offset={-10}
                            duration={500}
                        >
                            <IoBriefcase style={{ marginBottom: '3px' }} />Portafolio
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link
                            to='contact'
                            smooth
                            offset={-10}
                            duration={500}
                        >
                            <IoMail style={{ marginBottom: '1px' }} />Contacto
                        </Link>
                    </NavLink>
                </NavMenu>
            </Nav>
        </ContainerNav>
    )
}

export default Navbar