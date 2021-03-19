import React from "react";
import './App.css';
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import MiddleContainer from "./sections/Middle-container";
import NavBar from "./components/Nav-bar";
import Services from "./sections/Services";
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Header />
      <NavBar />
      <MiddleContainer />

      <div className="services-container">
      <Services 
        service="Kitchens" 
        description="Write description here" 
        img="images/kitchen.jpg" />

      <Services 
        service="Rock Retaining Walls" 
        description="Write description here" 
        img="https://images.app.goo.gl/QnYxWELrDJjRcq52A"/>

      <Services 
        service="Landscaping" 
        description="Write description here"/>

      <Services 
        service="Bathrooms" 
        description="Write description here"/>

      <Services 
        service="Fencing" 
        description="Write description here"/>

      <Services 
        service="Sprinklers" 
      description="Write description here"/>

      <Services 
        service="Paint and Finish" 
        description="Write description here"/>
      
      </div>
      
      


    </div>
    <Footer /> 
    </div>
  );
}

export default App;
