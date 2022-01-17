import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IoBriefcase, IoConstruct, IoHome, IoMail, IoPerson } from 'react-icons/io5'
import { ContainerNav, Hamburger, Logo, Nav, NavLink, NavMenu } from './Styles'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()

    return (
        <ContainerNav>
            <Nav>
                <Link href='/'>
                    <Logo>Brayan</Logo>
                </Link>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                    <span />
                </Hamburger>
                <NavMenu isOpen={isOpen}>
                    <Link href='#home'>
                        <NavLink
                            className={router.asPath === '/#home' ? 'active' : ''}>
                            <IoHome style={{ marginBottom: '3px' }} />Home
                        </NavLink>
                    </Link>
                    <Link href='#about'>
                        <NavLink
                            className={router.asPath === '/#about' ? 'active' : ''}>
                            <IoPerson style={{ marginBottom: '3px' }} />About me
                        </NavLink>
                    </Link>
                    <Link href='#skills'>
                        <NavLink
                            className={router.asPath === '/#skills' ? 'active' : ''}>
                            <IoConstruct style={{ marginBottom: '3px' }} />Skills
                        </NavLink>
                    </Link>
                    <Link href='#portfolio'>
                        <NavLink
                            className={router.asPath === '/#portfolio' ? 'active' : ''}>
                            <IoBriefcase style={{ marginBottom: '3px' }} />Portfolio
                        </NavLink>
                    </Link>
                    <Link href='#contact'>
                        <NavLink
                            className={router.asPath === '/#contact' ? 'active' : ''}>
                            <IoMail style={{ marginBottom: '1px' }} />Contact
                        </NavLink>
                    </Link>
                </NavMenu>
            </Nav>
        </ContainerNav>
    )
}

export default Navbar