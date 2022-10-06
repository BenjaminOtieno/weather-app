import React, { useState } from 'react';
import DetailCard from './DetailCard';
import Footer from './Footer';
import SummaryCard from './SummaryCard';

function Main() {
  const API_KEY = process.env.REACT_APP_API_KEY

  const [noData, setNoData] = useState('No Data Yet')
  const [searchTerm, setSearchTerm] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [city, setCity] = useState('Unknown location')
  const [weatherIcon, setWeatherIcon] = useState(
    `${process.env.REACT_APP_ICON_URL}10n@2x.png`
  )

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getWeather(searchTerm)
  }

  const getWeather = async () => {
    setWeatherData([])
    try {
      let resp = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&APPID=${API_KEY}&units=metric&cnt=5&exclude=hourly,minutely`
      )
      let data = await resp.json()
      console.log(typeof data.cod)
      if (data.cod !== '200') {
        setNoData('Location Not Found!!Please input a valid city...')
        setCity('Unknown Location')
        return
      }
      setWeatherData(data)
      setCity(`${data.city.name}, ${data.city.country}`)
      setWeatherIcon(
        `${process.env.REACT_APP_ICON_URL + data.list[0].weather[0]['icon']
        }@4x.png`
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='lg:bg-gray-800 flex items-center justify-center max-w-screen-xl sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-2xl min-h-screen lg:h-screen lg:py-5'>
        <div className='flex w-4/4 md:w-4/4 lg:w-3/4 min-h-screen rounded-sm lg:min-h-full lg:rounded-3xl shadow-lg lg:m-auto bg-gray-100'>
          {/* FORM CARD SECTION */}
          <div className='form-container text-center'>
            <div className='flex items-center justify-center'>
              <h3
                className='my-auto mr-auto text-xs md:text-xl lg:text-xl text-blue-800 font-bold shadow-md py-0.5 px-3 
          rounded-md bg-white bg-opacity-30'
              >
                Globe Weather
              </h3>
              <div className='ml-2 flex px-0.5 md:p-2 xl:p-2 text-gray-100 bg-gray-600 bg-opacity-30 rounded-md lg:rounded-lg'>
                <div className='text-center'>
                  <p className='font-semibold  text-xs md:text-sm xl:text-sm ml-2'>
                    {city}
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col p-1.5 items-center justify-center h-full'>
              <h1 className='text-white  text-lg md:text-xl lg:text-2xl'>
                Whatever the Weather...Stay Ahead!
              </h1>
              <hr className='h-1 bg-white w-1/2 rounded-full my-5' />
              <form
                noValidate
                onSubmit={handleSubmit}
                className='flex justify-center w-full'
              >
                <input
                  value={searchTerm}
                  type='text'
                  placeholder='Enter location'
                  className='relative rounded-md lg:rounded-xl py-2 px-3 w-full lg:w-2/3 bg-gray-300 bg-opacity-60 text-sm text-white placeholder-gray-200'
                  onChange={handleChange}
                  required
                />
                <button
                  type='submit'
                  className='relative rounded-md lg:rounded-xl py-1 px-2 -ml-14 z-10 text-white text-sm bg-green-500 placeholder-green-200'
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          {/* INFO  */}
          <div className='w-2/4 p-2 lg:p-5'>

            <div className='flex flex-col my-0.5'>
              {/* card jsx  */}
              {weatherData.length === 0 ? (
                <div className='container p-4 flex items-center justify-center h-1/3 mb-auto'>
                  <h1 className='text-gray-300 text-4xl font-bold uppercase'>
                    {noData}
                  </h1>
                </div>
              ) : (
                <>
                  <h1 className=' text-lg md:text-xl lg:text-2xl text-gray-800 mb-1 lg:mt-auto lg:mb-4'>
                    Today
                  </h1>
                  <DetailCard weather_icon={weatherIcon} data={weatherData} />
                  <h1 className=' text-sm lg:text-xl text-gray-600 my-2 lg:mb-4 lg:mt-4'>
                    {' '}
                    {city}
                  </h1>
                  <ul className='grid grid-cols-2  gap-2'>
                    {weatherData.list.map((days, index) => {
                      if (index > 0) {
                        return <SummaryCard key={index} day={days} />
                      }
                      return null
                    })}
                  </ul>
                </>
              )}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;