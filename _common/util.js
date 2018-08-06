/**
 * Check if two arrays are equal
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
export const ArrayEqual = (arr1, arr2) => {
  var length = arr1.length
  if (length !== arr2.length) return false
  for (var i = 0; i < length; i++)
    if (arr1[i] !== arr2[i])
      return false
  return true
}
