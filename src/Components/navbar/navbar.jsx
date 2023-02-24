import React from 'react'
import { data } from './data'
import { loged } from './data'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdMenu } from 'react-icons/md'
import './navbar.css'

const NavbarContainer = styled.nav`
  width: 14rem;
  height: 100vh;
  position: fixed;
  z-index: 100;
  background-color: var(--clr-primary-1);
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px var(--dark-shadow);
`
const Loged = styled.div`
  line-height: 3.4rem;
`

const List = styled.ul`
  list-style: none;
`
const LinkContainer = styled.li`
  margin: 0 1rem;
  &:hover {
    border-radius: 4px;
    padding: 0.2rem;
    background-color: var(--dark-shadow);
  }
`

const UnLoged = styled.div`
  line-height: 3.4rem;
`
const UserPhoto = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: var(--clr-grey-1);
  justify-content: center;
  alig-items: center;
  margin: 2rem auto;
  border-radius: 20px;
`
const Photo = styled.img`
  justify-content: center;
  alig-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 20px;
`
const UserProfile = styled.div``

const Username = styled.h1`
  color: var(--clr-primary-3);
  text-align: center;
  justify-content: center;
  margin: auto;
  font-seize: 2rem;
`
const Menu = styled.button`
  color: var(--clr-primary-3);
  background-color: var(--clr-primary-1);
  font-size: 2rem;
  border: none;
`
function Navbar() {
    return (
        <NavbarContainer>
            <Menu>
                <MdMenu />
            </Menu>
            <UserProfile>
                <UserPhoto>
                    <Link to={'/Profile'}>
                        <Photo src="https://i.pinimg.com/originals/7b/b0/c7/7bb0c7c3684088adced7c455f9b0a307.jpg" />
                    </Link>
                </UserPhoto>
                <Username>
                    <Link className="link-list" to={'/Profile'}>
            Username
                    </Link>
                </Username>
            </UserProfile>

            <UnLoged>
                <List>
                    {data.map((links) => {
                        const { id, name, icon, url } = links
                        return (
                            <LinkContainer key={id}>
                                <Link to={url} className="link-list">
                                    {icon} {name}
                                </Link>
                            </LinkContainer>
                        )
                    })}
                </List>
            </UnLoged>
            <Loged>
                <List>
                    {loged.map((log) => {
                        const { id, name, icon, url } = log
                        return (
                            <LinkContainer key={id}>
                                <Link to={url} className="link-list">
                                    {icon} {name}
                                </Link>
                            </LinkContainer>
                        )
                    })}
                </List>
            </Loged>
        </NavbarContainer>
    )
}
export default Navbar
