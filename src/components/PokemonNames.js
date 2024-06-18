import './PokemonNames.css'

function PokemonNames (props) {
    return(
        <div>
            <div id="gengarName">
                <h2>The Pokemon is: {props.name}</h2>
            </div>
            <div id="cinderaceName">
                <h2>The Pokemon is: {props.name2}</h2>
            </div>
        </div>
    )
}

export default PokemonNames;
