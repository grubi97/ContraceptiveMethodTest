import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";


interface IProps{
  openCreateForm:()=>void;
}

export const NavBar:React.FC<IProps>= ({openCreateForm}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header as={Link} to='/'>
          <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}} />
          Contraception Method
        </Menu.Item>
        <Menu.Item  header as={Link} to='/about' name="About" />
        <Menu.Item>
          <Button onClick={openCreateForm} color='blue' content='Test' />
        </Menu.Item>


        
      </Container>
    </Menu>
  );
};
