import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import {useState} from "react"
import './App.css'
function App() {

  const apiKey = "70dff8d17a5021edaf75e9f17b55c87a"
  const [inputCity,setInputCity]= useState('')
  const [data,setData] = useState({})

  const getWeatherDetails = (cityname)=>{
    if (!cityname) return
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`
    axios.get(apiURL).then((res)=>{
      console.log('response',res)
      setData(res.data)
    }).catch((err)=>{
      console.log('err',err)
    })
    }

    const handleChangeInput=(e) =>{
      setInputCity(e.target.value)
    }

    const handleSearch = ()=>{
      getWeatherDetails(inputCity)
    }
   
  return (
    <div className="col-md-12">
      <div className="weatherbg">
      <div className="heading">Weather App</div>
      <div>
      <input type="text" className="form-control" value = {inputCity} onChange={handleChangeInput}/>
      <button className="btn btn-primary" type="button"
      onClick={handleSearch}
      >Search</button>
      </div>
      </div>

      {Object.keys(data).length>0 &&
      <div className ='col md-12 test-center mt-5'>
        <div className='shadow rounded weather-result-box'>
          <img className= "weatherIcon" 
          src="https://imgs.search.brave.com/BtmkoepkVXgymFCR9WKgTTFyyl51z8W2QzRidkXP6L8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aXBob25lZmFxLm9y/Zy9maWxlcy9zdHls/ZXMvbGFyZ2UvcHVi/bGljL2lvcy13ZWF0/aGVyLmpwZz9pdG9r/PTd1Z2ljaVd2"/>
          <h5 className = "weatherCity">
            {data?.name}
          </h5>
          <h6 className = "weatherTemperature">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
        </div>
      </div>
}
  
    </div>
  );
}

export default App;
