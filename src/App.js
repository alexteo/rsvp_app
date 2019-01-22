import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AttendantsContainer from './Components/AttendantsContainer'
import {GUESTS} from './shared/guests.js'


class App extends Component {

  state ={

    guests : GUESTS

  }

  addGuest = () =>{

  }

  render() {
    return (
      
        <div className="App">
          <header>
            <h1>RSVP</h1>
            <p>A Treehouse App</p>
            <form>
              <input type="text" defaultValue="" placeholder="Invite Someone" />
              <button type="submit" name="submit" value="submit">Submit</button>
            </form>
          </header>
          <div className="main">
            <div>
              <h2>Invitees</h2>
              <label>
                <input type="checkbox" /> Hide those who haven't responded
              </label>
            </div>
            <table className="counter">
              <tbody>
                <tr>
                  <td>Attending:</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Unconfirmed:</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Total:</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>

            <AttendantsContainer 
              guests = {this.state.guests}
            />
            
          </div>
        </div>

    );
  }
}

export default App;
