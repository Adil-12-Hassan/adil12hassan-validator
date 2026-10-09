# Hassan Validator

A lightweight JavaScript validation library built with vanilla JavaScript.

## Installation

```bash
npm install hassan-validator
```

## Features

- `isRequired(value)` -checks whether a value is present and not empty
- `isEmail(value)` -validates email format
- `isNumber(value)` -checks if a value is a valid number
- `isString(value)` -verifies a value is a string
- `isURL(value)` -validates a URL
- `isStrongPassword(value)` -ensures a strong password policy
- `isPhoneNumber(value)` -validates phone numbers
- `isUsername(value)` -validates usernames

## Usage

```js
import {
  isRequired,
  isEmail,
  isNumber,
  isStrongPassword,
  isURL,
  isPhoneNumber,
  isUsername
} from "hassan-validator";

console.log(isRequired("Hassan")); // true
console.log(isEmail("test@example.com")); // true
console.log(isNumber(42)); // true
console.log(isStrongPassword("Hassan@123")); // true
console.log(isURL("https://example.com")); // true
console.log(isPhoneNumber("+923331234567")); // true
console.log(isUsername("Hassan_123")); // true
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
