//challenges with this lab. Had many successes, but ultimately needed to use lab-walkthrough as guide for passing all the tests
//commented out the last rendition of personally created functions.
let createEmployeeRecord = function(row){
  return {
      firstName: row[0],
      familyName: row[1],
      title: row[2],
      payPerHour: row[3],
      timeInEvents: [],
      timeOutEvents: []
  }
}

// function createEmployeeRecord(arr){
//   const employee = {};
//     employee.firstName = arr[0]
//     employee.familyName = arr[1]
//     employee.title = arr[2]
//     employee.payPerHour = arr[3]
//     employee.timeInEvents = []
//     employee.timeOutEvents = []
//   return employee
// }

let createEmployeeRecords = function(employeeRowData) {
  return employeeRowData.map(function(row){
      return createEmployeeRecord(row)
  })
}

// function createEmployeeRecords(arr){
//   return arr.map(arr => createEmployeeRecord(arr))
// }

//   //  let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
// // let updatedBpRecord = createTimeOutEvent(bpRecord, "2015-02-28 1700")
// // let newEvent = updatedBpRecord.timeOutEvents[0]

let createTimeInEvent = function(employee, dateStamp){
  let [date, hour] = dateStamp.split(' ')

  employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
  })

  return employee
}

// function createTimeInEvent(employee, date){
//   // attempt one didn't work

//   let [date, hour] = dateStamp.split(' ')

//   employee.timeInEvents.push({
//       type: "TimeIn",
//       hour: parseInt(hour, 10),
//       date,
//   })

//   return employee
// }

// // createTimeInEvent(bpRecord, "2015-02-28 1700")

let createTimeOutEvent = function(employee, dateStamp){
  let [date, hour] = dateStamp.split(' ')

  employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
  })

  return employee
}

// function createTimeOutEvent(employee, date){
  
//   let [date, hour] = dateStamp.split(' ')

//   employee.timeOutEvents.push({
//       type: "TimeOut",
//       hour: parseInt(hour, 10),
//       date,
//   })

//   return employee
// }

let hoursWorkedOnDate = function(employee, soughtDate){
  let inEvent = employee.timeInEvents.find(function(e){
      return e.date === soughtDate
  })

  let outEvent = employee.timeOutEvents.find(function(e){
      return e.date === soughtDate
  })

  return (outEvent.hour - inEvent.hour) / 100
}

// function hoursWorkedOnDate(employee, date){
//   let inTime = employee.timeInEvents.find(function(e){
//     return e.date === soughtDate
// })

// let outTime = employee.timeOutEvents.find(function(e){
//     return e.date === soughtDate
// })

// return (outTime.hour - inTime.hour) / 100
// }

let wagesEarnedOnDate = function(employee, dateSought){
  let rawWage = hoursWorkedOnDate(employee, dateSought)
      * employee.payPerHour
  return parseFloat(rawWage.toString())
}

// function wagesEarnedOnDate(employee, date){
//   let wages = hoursWorkedOnDate(employee, dateSought)
//   * employee.payPerHour
// return parseFloat(wages.toString())
// }

let allWagesFor = function(employee){
  let eligibleDates = employee.timeInEvents.map(function(e){
      return e.date
  })

  let payable = eligibleDates.reduce(function(memo, d){
      return memo + wagesEarnedOnDate(employee, d)
  }, 0)

  return payable
}

// function allWagesFor(employee){
//      let eligibleDates = employee.timeInEvents.map(function(e){
//     return e.date
// })

//     let payable = eligibleDates.reduce(function(memo, d){
//     return memo + wagesEarnedOnDate(employee, d)
// }, 0)

//     return payable
// }

let findEmployeeByFirstName = function(srcArray, firstName) {
return srcArray.find(function(rec){
  return rec.firstName === firstName
})
}
//     let findEmployeeByFirstName = function(srcArray, firstName) {
//     return srcArray.find(function(rec){
//     return rec.firstName === firstName
// })
// }


let calculatePayroll = function(arrayOfEmployeeRecords){
  return arrayOfEmployeeRecords.reduce(function(memo, rec){
      return memo + allWagesFor(rec)
  }, 0)
}

// function calculatePayroll(arr){
//     return arr.reduce(function(memo, rec){
//       return memo + allWagesFor(rec)
//     }, 0)

// }