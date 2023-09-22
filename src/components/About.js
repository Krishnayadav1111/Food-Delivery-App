import React from 'react'
import { Outlet } from 'react-router-dom';
import { Component } from 'react';
import UserContext from '../utils/UserContext';

// function About2() {
//   return (
//     <div>
//       Hello
//       <Outlet />
//     </div>
//   )
// }

class About extends Component {
  constructor(props) {
    super(props);
    
      }

  render() {
    return (
      <div>
        <h1>About US Page</h1>

        <UserContext.Consumer>
         {({user})=><h4 className='font-bold text-xl p-10'>{user.name} - {user.email} </h4>} 
        </UserContext.Consumer>
       
        <Outlet />
      </div>
    )
  }
}


export default About;
