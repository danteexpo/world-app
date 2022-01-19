import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Results from './components/Results'
import './App.css'

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
      <Routes>
        <Route path='/' element={
          <main>
            <Filters regions={regions} input={input} setInput={setInput} selected={selected} setSelected={setSelected} handleInput={handleInput} enabled={enabled} />
            <Results enabled={enabled} apiResults={apiResults}/>
          </main>
        }/>
        <Route path='/name'>
          <Route path=':numericCode'></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
