let printForecast = (array) => {
    index = 0
    array.forEach((temp) => {
        index += 1
        console.log(index > 1 ? temp + "°C" + " in " + index + " days" : temp +  "°C" + " in " + index + " day")
        
    })
}


array1 =  [17, 21, 23]
array2 = [12,5,-5,0,4]

console.log(printForecast(array1))