// Defining a variable to format and display today's date
let todaysDate = moment().format('dddd, MMMM Do')

// Displaying today's date variable to the page as text
$('#currentDay').text(todaysDate);