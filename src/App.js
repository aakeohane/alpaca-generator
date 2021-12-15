import { useEffect, useState } from "react";
import CategoryButton from "./components/CategoryButton";
import StyleButton from "./components/StyleButton";
import Alpaca from "./components/Alpaca";
import { stylesData } from "./Data/Styles";


function App() {

  const [styleOptions, setStyleOptions] = useState([])

  const [activeCategory, setActiveCategory] = useState('Background')
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [activeStyle, setActiveStyle] = useState([])

  const [alpacaImage, setAlpacaImage] = useState([])

  useEffect(() => {
    const alpacaArray = []
    Object.values(stylesData).forEach(val => {
      return alpacaArray.push(val[0].pic)
    })
    setAlpacaImage(alpacaArray)
  }, [])

  useEffect(() => {
    const alpacaArray = []
    Object.values(stylesData).forEach(val => {
      return alpacaArray.push(val[0].name)
    })
    setActiveStyle(alpacaArray)
  }, [])

  useEffect(() => {
    const optionsArray = []
    stylesData[activeCategory].map(item => {
      return optionsArray.push(item)
    })
    setStyleOptions(optionsArray)
  }, [activeCategory])


  function generateStyleOptions(category,index) {
    // sets button to active when clicked changing styles
    const activeName = category
    setActiveCategory(activeName)
    setCategoryIndex(index)

    // sets the state to be the options in the category
    const optionsArray = []
    stylesData[category].map(item => {
      return optionsArray.push(item)
    })
    setStyleOptions(optionsArray)
  }

  function generateAlpacaImage(name, pic) {
    // sets button to active when clicked changing styles
    const newActiveArray = [...activeStyle]
    newActiveArray.splice(categoryIndex, 1, name)
    setActiveStyle(newActiveArray)
    
    // generates the alpacaImage by replacing image in state array with style picked
    const newAlpacaImage = [...alpacaImage]
    newAlpacaImage.splice(categoryIndex, 1, pic)
    setAlpacaImage(newAlpacaImage)
  }

  
  const styleButtons = styleOptions.map((item, index) => {
      return (
        <StyleButton
          name={item.name}
          activeStyle={activeStyle[categoryIndex]}
          generateAlpacaImage={() => generateAlpacaImage(item.name, item.pic, index)} 
        />
      )
    })

  const categoryButtons = Object.keys(stylesData).map((item, index) => {
    return (
      <CategoryButton 
        name={item}
        activeCategory={activeCategory}
        generateStyleOptions={() => generateStyleOptions(item, index)}
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
