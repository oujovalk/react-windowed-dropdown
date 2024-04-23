import React, { Component } from 'react'
import AsyncSelect from 'react-select/async'
import { FixedSizeList as List } from 'react-window'
import { createFilter } from 'react-select'

const ReactWindowedSelect = (props) => {
  const { options, optionsCutoff } = props

  const cutOff = (values) => {
    return isFinite(optionsCutoff) ? values.slice(0, optionsCutoff) : values
  }

  const filterFromAllOptions = (inputValue) => {
    return options.filter((value) => {
      return value.label.toLowerCase().includes(inputValue.toLowerCase())
    })
  }

  const loadOptions = (inputValue, callback) => {
    const filterResult = filterFromAllOptions(inputValue)
    const result = cutOff(filterResult)
    return callback(result)
  }

  const height = 35

  class MenuList extends Component {
    render() {
      const { options, children, maxHeight, getValue } = this.props
      const [value] = getValue()
      const initialOffset = options.indexOf(value) * height

      return (
        <List
          height={maxHeight}
          itemCount={children.length}
          itemSize={height}
          initialScrollOffset={initialOffset > 0 ? initialOffset : 0}
        >
          {({ index, style }) => <div style={style}>{children[index]}</div>}
        </List>
      )
    }
  }

  const SelectComponent = () => {
    return (
      <div className='WindowedDropdown'>
        <AsyncSelect
          {...props}
          cacheOptions
          defaultOptions
          components={{ MenuList }}
          loadOptions={loadOptions}
          filterOption={createFilter({ ignoreAccents: false })}
        />
      </div>
    )
  }

  return <SelectComponent />
}

export default ReactWindowedSelect
