import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { Error404 } from './pages/Error404';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { ComingSoon } from './pages/ComingSoon';
import i18n from "./i18n";

export default class App extends Component {
  static displayName = App.name;
    state = {
        isOpen: false
    }
  render() {
      return (
        <Routes>
              <Route path="*" element={<Error404></Error404>}></Route>
              <Route path="/coming-soon" element={<ComingSoon></ComingSoon>}></Route>
              
              <Route element={<Layout />} >

                    {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                    })}

            </Route>
        </Routes>
    );
  }
}
