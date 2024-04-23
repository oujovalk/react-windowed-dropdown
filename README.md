# react-windowed-dropdown

> Composed component of react-window and react-dropdown for cases where the dropdown has performance problems

[![NPM](https://img.shields.io/npm/v/react-windowed-dropdown.svg)](https://www.npmjs.com/package/react-windowed-dropdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-windowed-dropdown
```

## Usage

```jsx
import React, { Component } from 'react'

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

class Example extends Component {
  render() {
    return <ReactWindowedSelect options={values} optionsCutoff={5000} />
  }
}
```

## License

MIT © [oujovalk](https://github.com/oujovalk)
