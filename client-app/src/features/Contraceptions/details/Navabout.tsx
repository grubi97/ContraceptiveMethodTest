import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const Navabout = () => {
    return (
        <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header as={Link} to='/'>
          <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}} />
          Contraception Method
        </Menu.Item>
        <Menu.Item  header as={Link} to='/about' name="About" />
        
        
      </Container>
    </Menu>
    )
}
