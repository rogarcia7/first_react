import './App.css';

function App() {
  const title = "PokeQuiz In React"
  const imageDog = "https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg"

  return (
    <div id="container">
      <div id="header">
            <h1 id="logo">{title}</h1>
            <h3 id="sublogo">My first contact with React, and for will have funny, i create a quiz of Pokemon and your types</h3>
            <ul id="menu">
                <li><a href= "http://localhost:3000"><strog>Home</strog></a></li>
            </ul>
      </div>
      <div id="imagemDog">
        <img src={imageDog} alt="imagem de um cachorro"/>
      </div>
      <div id="footer">
        <p>&copy; Fiel a minha namorada BIA, jogador de fortnite e mandrake em tempos passados...</p>
      </div>
    </div>
  );
}

export default App;
