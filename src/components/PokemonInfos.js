function PokemonInfos ({type, type2, evolution, generation}){

    return(
        <div>
            <h2>Types: {type} and {type2}</h2>
            <h3>Evolution: {evolution}</h3>
            <h3>Generation: {generation}</h3>
        </div>
    )

}

export default PokemonInfos;