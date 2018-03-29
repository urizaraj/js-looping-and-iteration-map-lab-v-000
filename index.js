function lowerCaseDrivers(drivers) { return drivers.map((driver) => { return driver.toLowerCase()})}

function nameToAttributes(drivers) {
  return drivers.map((driver) => {
    const names = driver.split(' ')
    return {
      firstName: names[0],
      lastName: names[1]
    }
  })
}
function attributesToPhrase(drivers) {
  return drivers.map((driver) => {
    console.log('${driver.name} is from ${driver.hometown}')
    return '${driver.name} is from ${driver.hometown}'
  })
}
