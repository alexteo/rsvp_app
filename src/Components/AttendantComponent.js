import React, {Component} from "react";

class Attendant extends Component {

    state = {
        guests : this.props.guests
    }
    
    setTags = (id)=>{
        if(id > 0){

        }
    }

    firstState =(
        <div> </div>
    )

    secondState = (
        <div>
            <label>
                <input type="checkbox"  value = {(this.props.confirmed) ?"true" : "false"} /> Confirmed
            </label>
            <button>edit</button>
            <button>remove</button>
        </div>
    )


    render() {

        console.log(this.props.guests);
        
        return(

            <li className = {(this.props.id ===0 )? "pending" : "confirmed"}>
                <span>{this.props.name}</span>
                {(this.props.id === 0) ? this.firstState : this.secondState}            
            </li>
        )
    }
}

export default Attendant;