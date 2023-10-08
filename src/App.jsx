import './App.css'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Input from './components/Input/Input'
import Header from './components/Header/Header'
import TimeAndLocation from './components/TimeAndLocation/TimeAndLocation'
import Temperature from './components/Temperature/Temperature'
import Forecast from './components/Forecast/Forecast'

function App() {

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <Header></Header>
      <Input></Input>

      <TimeAndLocation></TimeAndLocation>
      <Temperature></Temperature>
      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>
    </div>
  )
}

export default App
