import React from 'react'
import Filters from './Filters'
import Results from './Results'

function Main({ regions, input, setInput, enabled, selected, setSelected, handleInput, apiResults }) {
    return (
        <main>
            <Filters regions={regions} input={input} setInput={setInput} selected={selected} setSelected={setSelected} handleInput={handleInput} enabled={enabled} />
            <Results enabled={enabled} apiResults={apiResults}/>
        </main>
    )
}

export default Main
