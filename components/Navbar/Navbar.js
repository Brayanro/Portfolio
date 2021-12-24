import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { Button, ContainerHeader, Hamburger, Logo, Menu, MenuLink, Nav } from "./Styles"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <ContainerHeader>
            <Nav>
                <Link href="/">
                    <Logo>Brayan</Logo>
                </Link>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                    <span />
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <Link href="#about">
                        <MenuLink>AboutMe</MenuLink>
                    </Link>
                    <Link href="#skills">
                        <MenuLink>Skills</MenuLink>
                    </Link>
                    <Link href="#portfolio">
                        <MenuLink>Portfolio</MenuLink>
                    </Link>
                    <Button href="mailto:brayan7890123@gmail.com">
                        Contact<AiOutlineMail />
                    </Button>
                </Menu>
            </Nav>
        </ContainerHeader>
    )
}

export default Navbar