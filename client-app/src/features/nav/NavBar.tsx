import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";


interface IProps{
  openCreateForm:()=>void;
}

export const NavBar:React.FC<IProps>= ({openCreateForm}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}} />
          Contraception Method
        </Menu.Item>
        <Menu.Item name="Contraceptions" />
        <Menu.Item>
          <Button onClick={openCreateForm} positive content='Test' />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
