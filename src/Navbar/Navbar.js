import React from 'react';
import {Link} from 'react-router-dom';
import * as routes from '../Const/Routes'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }


  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" className="container-fluid" light>
          <NavbarBrand href="/" className="mr-auto">Josceline Jaimes</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink >
                  <Link to={routes.WORKS}>Works</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                <Link to={routes.TOOLS}>Tools</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}