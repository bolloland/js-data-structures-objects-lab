// // Write your solution in this file!
// const driver = {}

// // function updateDriverWithKeyAndValue(driverObj, key, value) {
// //   return Object.assign({}, driverObj, {[key]: value})
// // } THIS ^^^ does the same as BELOW

// function updateDriverWithKeyAndValue(driverObj, key, value) {
//     return {...driverObj, ...{[key]: value} }
// }

// function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value) {
//     driverObj[key] = value
//     return driverObj
// }
// function deleteFromDriverByKey(driverObj, key) {
//     const newDriver = Object.assign({}, driverObj)
//     delete newDriver[key]
//     return newDriver
// }

// function destructivelyDeleteFromDriverByKey(driverObj, key) {
//     delete driverObj[key]
//     return driverObj
// }