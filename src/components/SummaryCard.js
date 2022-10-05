import React from 'react'
import moment from 'moment'

function SummaryCard({ day }) {
  let day_icon = `${
    process.env.REACT_APP_ICON_URL + day.weather[0]['icon']
  }@2x.png`

  return (
    <li className='container p-1 lg:p-4 flex items-center justify-center bg-gray-200 rounded-lg my-auto mr-1'>
      <div className='my-auto'>
        <p className='font-bold text-xs lg:text-3xl text-pink-500 mb-0.5 lg:mb-2'>
          {Math.round(day.main.temp)}&deg;C
        </p>
        <p className='  text-xs lg:text-2xl text-gray-800 tracking-widest'>
          <span className='w-1/2'>{day.weather[0].main}</span>
          <img
            alt='img2.png'
            src={day_icon}
            className='w-1/6 lg:w-1/4 inline'
          />
        </p>
        <p className='text-gray-400 text-xs uppercase tracking-widest'>
          {day.weather[0].description}
        </p>
        <p className='tracking-wider text-sm'>
          {moment(day.dt_txt).format('dddd hh:mm')}am
        </p>
      </div>
    </li>
  )
}

export default SummaryCard
