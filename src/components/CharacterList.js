import React, {Component} from 'react';
import {connect } from 'react-redux';
import {addCharacterById} from '../actions';

class CharacterList extends Component{
    render(){
        return(
            <div>
                <h4>Characters</h4>
                <ul className="list-group" >
                    {
                        this.props.characters.map(character => {
                            return(
                                <li key={character.id} className="list-group-item">
                                    <div className="list-item">{character.name}</div>
                                    <div 
                                     className="list-item right-btn"
                                     onClick ={() => this.props.addCharacterById(character.id)}
                                    >
                                        +
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
    console.log('state', state);
    return {
        characters: state.characters
    }
}

export default connect(mapsStateToProps, {addCharacterById})(CharacterList);