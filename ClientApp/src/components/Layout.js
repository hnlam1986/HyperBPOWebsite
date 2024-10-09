import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
            <Container className="main-container">

                {/*{this.props.children}*/}
                <Outlet></Outlet>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}
