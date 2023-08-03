import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import { Container } from '@mui/system';
import Content from './Components/content';
import Footer from './Components/Footer';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Container fixed>
        <Content></Content>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
