import React from 'react';
import Attendant from './AttendantComponent.js'

const AttendantsContainer = (props) =>{

    const guest = props.guests.map(guest => (
        <Attendant  
            key ={guest.id.toString()}
            id = {guest.id}
            name ={guest.name}
            confirmed ={guest.confirmed}
        />
        
    ))
    console.log(guest);

    return( 

       
        <ul>
            {guest}
        </ul>
    );
    

}

export default AttendantsContainer;