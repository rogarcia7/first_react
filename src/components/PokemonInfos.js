function PokemonInfos (props){

    return(
        <div>
            <h2>Types: {props.type} and {props.type2}</h2>
            <h3>Evolution: {props.evolution}</h3>
            <h3>Generation: {props.generation}</h3>
        </div>
    )

}

export default PokemonInfos;