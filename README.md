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
  })
}

class Example extends Component {
  render() {
    return <ReactWindowedSelect options={values} optionsCutoff={5000} />
  }
}
```

## Note

This project could have simply been forked from
[react-windowed-select](https://github.com/jacobworrel/react-windowed-select)
but alas I found out about it too late.

## Credits

Additional credits go to
[react-windowed-select](https://github.com/jacobworrel/react-windowed-select)
project creator Jacob Worrel [@jacobworrel](https://github.com/jacobworrel)
and all the contributors on that project.
Implementation of the MenuList from that project helped creatly redusing issues and errors.

## License

MIT © [oujovalk](https://github.com/oujovalk)
