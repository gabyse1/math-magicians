import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
      display: '0',
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {
        display: obj.display,
      };
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { ...obj, next: obj.next + buttonName, display: obj.next + buttonName };
      }
      return { ...obj, next: buttonName, display: buttonName };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
        display: obj.next + buttonName,
      };
    }
    return {
      next: buttonName,
      total: null,
      operation: null,
      display: buttonName,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.`, display: `${obj.next}.` };
    }
    if (obj.operation) {
      return { next: '0.', display: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return { display: obj.display };
      }
      return { total: `${obj.total}.`, display: `${obj.total}.` };
    }
    return { total: '0.', display: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
        display: operate(obj.total, obj.next, obj.operation),
      };
    }
    // '=' with no operation, nothing to do
    return {
      display: obj.display,
    };
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return {
        ...obj,
        next: (-1 * parseFloat(obj.next)).toString(),
        display: (-1 * parseFloat(obj.next)).toString(),
      };
    }
    if (obj.total) {
      return {
        ...obj,
        total: (-1 * parseFloat(obj.total)).toString(),
        display: (-1 * parseFloat(obj.total)).toString(),
      };
    }
    return { display: obj.display };
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation after pressing '='
  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: buttonName };
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: buttonName };
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
      display: operate(obj.total, obj.next, obj.operation),
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { operation: buttonName };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
    display: obj.next,
  };
}
