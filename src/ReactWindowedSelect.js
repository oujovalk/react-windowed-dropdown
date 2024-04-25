import React from 'react'
import AsyncSelect from 'react-select/async'
import { createFilter } from 'react-select'
import MenuList from './MenuList'

const ReactWindowedSelect = (props) => {
  const { options, optionsCutoff } = props

  const cutOff = (values) => {
    return isFinite(optionsCutoff) ? values.slice(0, optionsCutoff) : values
  }

  const filterFromAllOptions = (inputValue) => {
    return options.filter((value) => {
      // TODO: Add the option to provide the filtering condition
      return value.label.toLowerCase().startsWith(inputValue.toLowerCase())
    })
  }

  const loadOptions = (inputValue, callback) => {
    const filterResult = filterFromAllOptions(inputValue)
    const result = cutOff(filterResult)
    return callback(result)
  }

  const SelectComponent = () => {
    return (
      <div className='WindowedDropdown'>
        <AsyncSelect
          {...props}
          cacheOptions
          defaultOptions
          components={{
            ...props.components,
            MenuList
          }}
          loadOptions={loadOptions}
          filterOption={createFilter({ ignoreAccents: false })}
        />
      </div>
    )
  }

  return <SelectComponent />
}

export default ReactWindowedSelect
