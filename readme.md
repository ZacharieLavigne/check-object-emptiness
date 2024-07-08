# check-object-emptiness

check-object-emptiness provides utility functions to check if an object is empty or not.

## What Does it Mean for an Object to be Empty?

An object is considered empty if it, or any of its descendants, do not contain any defined values as properties. The following values are considered non-defined:

- undefined or null values
- Empty objects ({})
- Empty arrays ([])
- Objects or arrays where all values are empty as defined above
  
## Installation

### npm
```bash
npm install check-object-emptiness
```

### yarn
```bash
yarn add check-object-emptiness
```

## Usage

This library exports two main functions: `isEmptyOfDefinedValues` and `containsDefinedValues`.

### isEmptyOfDefinedValues

Recursively verifies if the object or its descendants contain only empty values as properties.

#### Parameters:

`obj (Object)`: The object to check for defined values.

#### Returns:

`boolean`: True if the object or its descendants are empty of defined values, false otherwise.

#### Example:

```javascript
import { isEmptyOfDefinedValues } from 'check-object-emptiness';

const emptyObj = {};
const nonEmptyObj = { key: 'value' };

console.log(isEmptyOfDefinedValues(emptyObj)); // true
console.log(isEmptyOfDefinedValues(nonEmptyObj)); // false
```

### containsDefinedValues

Verifies if the object or its descendants contain any defined values.

#### Parameters:

obj (Object): The object to check for defined values.

#### Returns:

boolean: True if the object or its descendants contain defined values, false otherwise.

#### Example:

```javascript
import { containsDefinedValues } from 'check-object-emptiness';

const emptyObj = {};
const nonEmptyObj = { key: 'value' };

console.log(containsDefinedValues(emptyObj)); // false
console.log(containsDefinedValues(nonEmptyObj)); // true
```

## License

This project is licensed under the MIT License. See licenses details. [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

