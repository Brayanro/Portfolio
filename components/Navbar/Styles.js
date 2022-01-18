import styled from 'styled-components'

export const ContainerNav = styled.nav`
    background-color: #222831;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 8px;
`

export const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const Logo = styled.a`
    cursor: pointer;
    padding: 1rem 0;
    color: #fff;
    font-weight: 800;
    font-size: 1.7rem;

    &:hover {
        transition: all 0.3s ease;
        color: #95D1CC;
    }
`

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #fff;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

export const NavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in-out;
    }
`

export const NavLink = styled.a`
    color: #fff;
    padding: 1rem 1.5rem;
    cursor: pointer;
    text-align: center;
    transition: 0.3s all ease-in-out;
    font-size: 0.9rem;
    letter-spacing: 0.02rem;

    svg {
      margin-right: 0.15rem;
      font-size: 0.9rem;
      vertical-align: middle;
    }

    &.active {
        transition: all 0.3s ease;
        color: #00ADB5;
    }

    &:hover {
        transition: all 0.3s ease;
        color: #00ADB5;
    }
`