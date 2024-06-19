import './PokemonNames.css'
import PokemonInfos from './PokemonInfos';

function PokemonNames (props) {
    return(
        <div>
            <div id="gengarName">
                <h2>The Pokemon is: {props.name}</h2>
                <PokemonInfos type="Ghost" type2="Dark" evolution="Latest form" generation="First" />
            </div>
            <div id="cinderaceName">
                <h2>The Pokemon is: {props.name2}</h2>
                <PokemonInfos type="Fire" type2="Fighting" evolution="Latest form" generation="Eighth" />
            </div>
        </div>
    )
}

export default PokemonNames;
