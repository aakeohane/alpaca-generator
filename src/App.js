import { useState } from "react";
import CategoryButton from "./components/CategoryButton";
import StyleButton from "./components/StyleButton";
import { stylesData } from "./Data/Styles";


function App() {

  const [styleOptions, setStyleOptions] = useState([])

  

  
  const styleButtons = styleOptions.map(item => {
      return (
        <StyleButton
          name={item.name}
          pic={item.pic} 
        />
      )
    })

  function generateStyleOptions(category) {
    // const optionsArray = []
    stylesData[category].map(item => {
      return setStyleOptions([...styleOptions, item])
    })
    
  }

  const categoryButtons = Object.keys(stylesData).map(item => {
    return (
      <CategoryButton 
        name={item}
        generateStyleOptions={() => generateStyleOptions(item)}
      />
    )
  })

  return (
    <div className="App">
      <h1>Alpaca Generator</h1>
      <div className="main-content">
        <div className="alpaca-img-container">
          <img src={stylesData.Background[2].pic} alt="darkblue background" />
        </div>
        <div className="styling-container">
          <div className="category-container">
            <h2>Accesorize the Alpacas</h2>
            <div className="category-btns-container">
              {categoryButtons}
            </div>
          </div>
          <div className="style-options-container">
            <h2>Style</h2>
            <div className="style-btns-container">
              {styleButtons}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
