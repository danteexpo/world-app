import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import axios from 'axios'

const regions = [
  { name: 'Africa' },
  { name: 'Asia' },
  { name: 'America' },
  { name: 'Europe' },
  { name: 'Oceania' },
]

function App() {

  const [input, setInput] = useState("")
  const [selected, setSelected] = useState(regions[0])
  const [enabled, setEnabled] = useState(false)

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const [apiResults, setApiResults] = useState([])

  const url = `https://restcountries.com/v3.1/region/${selected.name.toLowerCase()}`

  useEffect(() => {
    axios.get(url).then((response) => {
      setApiResults(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [url])

  return (
    <>
    <Navbar enabled={enabled} setEnabled={setEnabled}/>
    <Main apiResults={apiResults} regions={regions} input={input} setInput={setInput} selected={selected} setSelected={setSelected} handleInput={handleInput} enabled={enabled} />
    </>
  );
}

export default App;
