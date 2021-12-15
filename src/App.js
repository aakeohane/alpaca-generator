import { useState } from "react";
import CategoryButton from "./components/CategoryButton";
import StyleButton from "./components/StyleButton";
import Alpaca from "./components/Alpaca";
import { stylesData } from "./Data/Styles";


function App() {

  const [styleOptions, setStyleOptions] = useState([])

  const [activeCategory, setActiveCategory] = useState('Background')
  const [activeStyle, setActiveStyle] = useState('')

  const [alpacaImage, setAlpacaImage] = useState([
    stylesData.Background[2].pic,
    stylesData.Neck[1].pic,
    stylesData.Eyes[3].pic
  ])


  function generateStyleOptions(category) {
    // sets button to active when clicked changing styles
    const activeName = category
    setActiveCategory(activeName)

    // sets the state to be the options in the category
    const optionsArray = []
    stylesData[category].map(item => {
      return optionsArray.push(item)
    })
    setStyleOptions(optionsArray)
  }

  function generateAlpacaImage(name) {
    // sets button to active when clicked changing styles
    const activeStyle = name
    setActiveStyle(activeStyle)
  }

  
  const styleButtons = styleOptions.map(item => {
      return (
        <StyleButton
          name={item.name}
          pic={item.pic}
          activeStyle={activeStyle}
          generateAlpacaImage={() => generateAlpacaImage(item.name)} 
        />
      )
    })

  const categoryButtons = Object.keys(stylesData).map(item => {
    return (
      <CategoryButton 
        name={item}
        activeCategory={activeCategory}
        generateStyleOptions={() => generateStyleOptions(item)}
      />
    )
  })

  const alpacaDude = alpacaImage.map((item, index) => {
    return (
      <Alpaca
        pic={item}
        index={index}
      />
    )
  })

  return (
    <div className="App">
      <h1>Alpaca Generator</h1>
      <div className="main-content">
        <div className="alpaca-img-container">
          {alpacaDude}
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
