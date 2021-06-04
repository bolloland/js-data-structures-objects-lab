// Write your solution in this file!
const driver = {}


function updateDriverWithKeyAndValue(driverObj, key, value) {
  return Object.assign({}, driverObj, {[key]: value})
}