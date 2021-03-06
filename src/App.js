import React, {Component } from 'react';

//const App = () => <h1> Hi! </h1>
class App extends Component{
  render(){
    return (
      <div> 
        <Header/>
        <Body />
        <Footer/>
      </div>
      )
  }
}

const Header =() => <img src= "pic_mountain.jpg" alt="Mountain View" />
const Body =() => <p> A mountain is a large landform that stretches above the surrounding land in a limited area,
 usually in the form of a peak. A mountain is generally steeper than a hill. Mountains are formed through tectonic
  forces or volcanism. These forces can locally raise the surface of the earth. Mountains erode slowly through the action
   of rivers, weather conditions, and glaciers. A few mountains are isolated summits, but most occur in huge mountain 
   ranges. </p>
const Footer =() => <p>High elevations on mountains produce colder climates than at sea level. These colder climates 
strongly affect the ecosystems of mountains: different elevations have different plants and animals. Because of the less 
hospitable terrain and climate, mountains tend to be used less for agriculture and more for resource extraction and 
recreation, such as mountain climbing.</p>

export default App;