// Code EyesOnMe Component Here
import React, {Component} from 'react'

export default class EyesOnMe extends Component{
    handleonFocus=(e)=>{
        console.log("Good!")
    }

    handleonBlur=(e)=>{
        console.log("Hey! Eyes on me!")
    }
    
    render(){
        return(
            <button onFocus={this.handleonFocus} onBlur={this.handleonBlur}/>
        )
    }
}
