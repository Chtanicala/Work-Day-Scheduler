// Defining a variable to format and display today's date
let todaysDate = moment().format('dddd, MMMM Do')



// Displaying today's date variable to the page as text
$('#currentDay').text(todaysDate);

/* Creating a visually dynamic scheduler
    - Assign each time block a time value
    - Compare each time block time value with the current time
    - Determine if a time block is past, present, or future
    - Create a function to append .past, .preset, .future classes based on the comparisons made for each time value
    - function runs each time the page loads
    -- should it by dynamic? ie, if page is already loaded and time changes from 4pm to 5pm, should page update without reload? */


    // moment().hours();
