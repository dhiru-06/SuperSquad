import React, {Component} from 'react';
import {connect } from "react-redux";
import { removeCharacterById } from '../actions';


class Heroslist extends Component{
    render(){
        return(
            <div>
                <h1>
                    Your heros Squad
                </h1>
                <ul className="list-group"> 
                {
                    this.props.heros.map(hero => {
                        return (
                            <li key={hero.id} className="list-group-item">
                                <div className="list-item">
                                    {hero.name}
                                </div>
                               
                            </li>
                        )
                    })
                }
                    
                </ul>
                
            </div>
        )
    }
}
function mapsStateToProps(state){
    return{
        heros: state.heros
    }
}

export default connect(mapsStateToProps, {removeCharacterById})(Heroslist);