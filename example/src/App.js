import React from 'react'
import Select from 'react-select'

import ReactWindowedSelect from 'react-windowed-dropdown'
import 'react-windowed-dropdown/dist/index.css'

const values = []
for (let i = 0; i < 50000; i = i + 1) {
  values.push({
    value: i,
    label: `${i}`,
    isDisabled: i%3 === 0
  })
}

const App = () => {
  return (
    <div className='App'>
      <h1>Test Bench!</h1>
      <h2>Testing the component</h2>
      <ReactWindowedSelect options={values} />
      <div />
      <h2>Testing the component with options cutoff value</h2>
      <ReactWindowedSelect options={values} optionsCutoff={500} isMulti={true}/>
      <div />
      <h2>Normal react select component</h2>
      <Select options={values} />
    </div>
  )
}

export default App
