import { useEffect, useState } from "react";
import CategoryButton from "./components/CategoryButton";
import StyleButton from "./components/StyleButton";
import Alpaca from "./components/Alpaca";
import { stylesData } from "./Data/Styles";

import mergeImages from 'merge-images';


function App() {

  const [allData, setAllData] = useState([])
  
  const [activeCategory, setActiveCategory] = useState("Background")
  const [activeStyle, setActiveStyle] = useState([])
  
  const [alpacaImage, setAlpacaImage] = useState([])
  const [styleOptions, setStyleOptions] = useState([])
  
  const [categoryIndex, setCategoryIndex] = useState(0)

  useEffect(() => {
    const alpacaImageArray = []
    const defaultAlpacaStyles = []
    Object.values(stylesData).forEach(val => {
        alpacaImageArray.push(val[0].pic);
        defaultAlpacaStyles.push(val[0].name)
    })
    setAlpacaImage(alpacaImageArray)
    setActiveStyle(defaultAlpacaStyles)
    setAllData(stylesData)
    console.log(stylesData)
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

  function randomAlpaca() {
    const randomAlpaca = []
    const randomActiveStyle = []
    Object.values(allData).forEach(val => {
      const randomValue = val.length
      const randomArrayIndex = Math.floor(Math.random() * randomValue)
      randomAlpaca.push(val[randomArrayIndex].pic)
      randomActiveStyle.push(val[randomArrayIndex].name)
    })
    setAlpacaImage(randomAlpaca)
    setActiveStyle(randomActiveStyle)
  }

  function downloadAlpaca() {
    // mergeImage dependency takes array of png images, merges, then downloads as one png
    mergeImages(alpacaImage)
    .then((b64) => {
      var a = document.createElement("a");
      a.href = b64;
      a.download = "Alpaca.png";
      a.click();
    });
  }

  const styleButtons = styleOptions.map((item, index) => {
    return (
      <StyleButton
        name={item.name}
        key={index}
        className="carousel-item"
        activeStyle={activeStyle[categoryIndex]}
        generateAlpacaImage={() => generateAlpacaImage(item.name, item.pic, index)} 
      />
    )
  })

  const categoryButtons = Object.keys(stylesData).map((item, index) => {
    return (
      <CategoryButton
        key={index} 
        name={item}
        className="carousel-item"
        activeCategory={activeCategory}
        generateStyleOptions={() => generateStyleOptions(item, index)}
      />
    )
  })

  const alpacaDude = alpacaImage.map((item, index) => {
    return (
      <Alpaca
        pic={item}
        key={index}
        activeStyle={activeStyle[categoryIndex]}
      />
    )
  })

  return (
    <div className="flex-wrapper">
      <h1>Alpaca Generator</h1>
      <div className="main-content">
        <div className="alpaca-img-container">
            {alpacaDude}
          <div className="random-download-container">
            <button onClick={() => randomAlpaca()}>🔀   Randomize</button>
            <button onClick={() => downloadAlpaca()}>🖼   Download</button>
          </div>
        </div>
        <div className="styling-container">
          <div className="category-container">
            <h2>Accesorize the Alpacas</h2>
            <div className="category-btns-container">
              {categoryButtons}
            </div>
          </div>
          <div className="style-options-container">
            <h2>{activeCategory} Style</h2>
            <div className="style-btns-container">
              {styleButtons}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <footer> Meticulously made by <a href="https://github.com/aakeohane/alpaca-generator" rel="noreferrer" target="_blank">Aaron</a></footer>
      </div>
    </div>
  );
}

export default App;
