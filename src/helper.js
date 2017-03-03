const isEmpty = val => {
  if (
    typeof (val) == 'function' ||
    typeof (val) == 'number' ||
    typeof (val) == 'boolean' ||
    Object.prototype.toString.call(val) === '[object Date]'
  ) return false

  if (val == null || val.length === 0) return true

  if (typeof (val) == 'object') {
    let r = true;

    for (const f in val) { // eslint-disable-line no-restricted-syntax, no-unused-vars
      r = false
    }

    return r;
  }

  return false;
}

export {
  isEmpty,
}
