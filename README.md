# SaranaJS

Open Source JS & TS Utility Package

**Note**: This project will slowly be expanded over time

## Installation

### Using npm
`npm i sarana`

## Usage

### Example 1: isNumber

#### Javascript
```javascript
const { isNumber } = require("sarana");

console.log(isNumber(7.2));     // -> true
console.log(isNumber({}));      // -> false
```

#### Typescript
```typescript
import { isNumber } from "sarana";

console.log(isNumber(42));      // -> true
console.log(isNumber("foo"));   // -> false
```

### Example 2: mapNum

#### Javascript
```javascript
const { mapNum } = require("sarana");

console.log(mapNum(1, 0, 2, 0, 1)); // -> 0.5
```

#### Typescript
```typescript
import { mapNum } from "sarana";

console.log(mapNum(1, 0, 2, 0, 1)); // -> 0.5
```