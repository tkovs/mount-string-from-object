export function solution(string, values) {
  return string.replace(/\{(.*?)\}/g, (match, property) => {
    const value = property.split(/[\.\[\]]/g).filter(item => item).reduce(
      (reducer, propertyItem) => {
        return reducer[propertyItem]
      },
      values
    )

    if (value === '' || value === 0)
      return value

    return value ||''
  })
}
