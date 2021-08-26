import React, {Component} from "react"
import "./Pokedex.css"

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"



class PokeCard extends Component{

    render(){
        let imgSrc = POKE_API + this.props.id + ".png"

        return (
            <div className="poke-card">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <div>{this.props.type}</div>
                <div>{this.props.base_experience}</div>
            </div>
        )
    }
}
export default PokeCard;