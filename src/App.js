import './App.css';
import Cinderace from './components/Cinderace';
import PokemonNames from './components/PokemonNames';
import PokemonInfos from './components/PokemonInfos';

function App() {
  const title = "PokeQuiz In React"
  const  gengarImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgHeQfNQ-NI8xRp7NdHwlnAf90vry3B2a8w&s"
  const name2 = "Cinderace"

  return (
    <div id="container">
      <div id="header">
            <h1 id="logo">{title}</h1>
            <h3 id="sublogo">My first contact with React, and for will have funny, i create a quiz of Pokemon and your types</h3>
            <ul id="menu">
                <li><a href= "http://localhost:3000"><strog>Home</strog></a></li>
            </ul>
      </div>
      <div id="PokemonGengarAndCinderace">
          <p><img src={gengarImg} alt="gengar"/></p>
          <PokemonInfos type="Ghost" type2="Dark" evolution="Latest form" generation="First" />
          <PokemonNames name="Gengar" name2={name2}/>
          <Cinderace />
      </div>
      <div id="footer">
        <p>&copy;POKEQUIZ <img src="https://cdn3.emoji.gg/emojis/4889-pokeball.png" alt="pokeball"></img></p>
      </div>
    </div>
  );
}

export default App;
