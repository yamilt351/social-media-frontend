import React from 'react'
import { data } from './data'
import { loged } from './data'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarContainer = styled.nav`
  width: 10rem;
  height: 100vh;
  position: fixed;
  z-index: 100;
  background-color: #222;
`
const Loged = styled.div``
const List = styled.ul`
  list-style: none;
`
const LinkContainer = styled.li`

`

const UnLoged = styled.div``
function Navbar() {
    return (
        <NavbarContainer>
            <Loged>
                <List>
                    {loged.map((log) => {
                        const { id, name, icon, url } = log
                        return (
                            <LinkContainer key={id}>
                                <Link to={url}>
                                    {icon} {name}
                                </Link>
                            </LinkContainer>
                        )
                    })}
                </List>
            </Loged>
            <UnLoged>
                <List>
                    {data.map((links) => {
                        const { id, name, icon, url } = links
                        return (
                            <LinkContainer key={id}>
                                <Link to={url}>
                                    {icon} {name}
                                </Link>
                            </LinkContainer>
                        )
                    })}
                </List>
            </UnLoged>
        </NavbarContainer>
    )
}
export default Navbar
