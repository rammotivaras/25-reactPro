
// import './App.css'
import ImageSlider from './components/image-slider'
// import StarRating from './components/star-reting'
// import RendomColorGenorator from './components/RendomColorGenerator'

function App() {

  return (
      <div className='App'>
      {/* <RendomColorGenorator />  */}
      {/* <StarRating noOfStart={10}/> */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/>
      </div>
     
  )
}

export default App
