import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Menus from './components/Menu/menu';
import EmployeesHome from './pages/EmployeesHome/EmployeesHome';

function App() {
  return (
    <Fragment>
      <Header />
      {/* <Menus /> */}
      <EmployeesHome />
    </Fragment>
  );
}

export default App;
