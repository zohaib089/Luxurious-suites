import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Rooms from './pages/Rooms';
import Home from './pages/Home';
import RoomDetail from './pages/RoomDetail';
import Error from './pages/Error';
import {Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';


class App extends Component {
  render(){
    return (
      <>
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/" exact component={Rooms}/>
      <Route path="/rooms/:slug" exact component={RoomDetail}/>
      <Route component={Error}/>
      </Switch>
      </>
    );
  }
  }

export default App;
