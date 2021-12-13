

function App() {
  return (
    <div className="App">
      <h1>Alpaca Generator</h1>
      <div className="main-content">
        <div className="alpaca-img-container">
          <img src={require("./img/alpaca/backgrounds/darkblue70.png").default} alt="darkblue background" />
        </div>
        <div className="styling-container">
          <div className="category-container">
            <h2>Accesorize the Alpacas</h2>
            <div className="category-btn-container">
              <button>Hair</button>
              <button>Ears</button>
              <button>Eyes</button>
              <button>Mouth</button>
              <button>Neck</button>
              <button>Leg</button>
              <button>Accesories</button>
              <button>Background</button>
            </div>
          </div>
          <div className="style-options-container">
            <h2>Style</h2>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
