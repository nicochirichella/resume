import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Hero from './components/hero/hero';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';

import { ResumeData } from './constants/resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Hero/> */}
        <About resumeData = {ResumeData}/>
        <Resume resumeData = {ResumeData}/>
        <Portfolio />
        {/* <Testimonials /> */}
        <ContactUs resumeData = {ResumeData}/>
        <Footer />
      </div>
    );
  }
}
export default App;