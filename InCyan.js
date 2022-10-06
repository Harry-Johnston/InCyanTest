 //function to find the largest value in the items object
 function findLargestBar(items) {
     let largestValue = 0
     let largestKey = ''
     let largestBar = {}
     for (const [key, value] of Object.entries(items)) {
        if (value > largestValue) {
            largestValue = value
            largestKey = key
        }
        largestBar = {key: largestKey, value: largestValue}
     }
     return largestBar
 }
 // function to create an array of values for each bar
 function createArrayOfValues(items) {
     let arrayOfValues = []
     for (const [key, value] of Object.entries(items)) {
         arrayOfValues.push(value)
     }
     return arrayOfValues
 }

 // json input
 const jsonData = {
     "title": "stock count",
     "xtitle": "asset",
     "ytitle": "count",
     "items": [
         {"chairs": 20},
         {"tables": 5},
         {"stands": 7},
         {"lamps": 8},
         {"cups": 10}
     ]
 }

 const title = jsonData.title
 const xtitle = jsonData.xtitle
 const ytitle = jsonData.ytitle
 const items = jsonData.items
 const largestBar = findLargestBar(items)
 const valueArray = createArrayOfValues(items)
 // graph will largestBar + 10 tall and items.length * 5 wide to provide space for labels
 const graphHeight = largestBar.value + 10
 const graphWidth = items.length * 5

 console.log ('----- ' + title + ' -----')
 console.log (xtitle)
 console.log ('-------')

 for (i = 0; i < graphHeight; i++) { // creates a graph of height graphHeight
     for (j = 0; j < graphWidth; j++) { // creates a graph of width graphWidth
         if (j % 5 === 0) { // every fifth column print a bar to provide space for labels
             let currentItemValue = valueArray[j/5] // get the value of the item at the current column

             if (i > currentItemValue) {
                 console.log(' ') // if the current row is greater than the value of the item at the current column, print a space
             } else {
                 console.log('*') // if the current row is less than or equal to the value of the item at the current column, print a star
             }
         }
     }
 }

 console.log('----------------')
 console.log (ytitle)

