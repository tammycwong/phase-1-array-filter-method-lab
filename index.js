// Code your solution here
function findMatching(drivers, name) {
const driverName = drivers.filter(function(driver) {
    return driver.toUpperCase() === name.toUpperCase() ;
    })
    return driverName;
}
function fuzzyMatch(drivers, firstLetters) {
    let match = drivers.filter(function(driver) {
        if (driver.substring(0,2) === firstLetters) {   
            return driver
        }
    })
    return match
}

function matchName (drivers, name) {
    return drivers.filter(function(driver) {
        if (driver.name === name) {
            return driver
        }
    })
}