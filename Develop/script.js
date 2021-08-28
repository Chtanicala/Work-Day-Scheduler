// Defining a variable to format and display today's date
let todaysDate = moment().format('dddd, MMMM Do');
let timeBlock = document.querySelectorAll(".time-block");

moment().hour(Number)

// Displaying today's date variable to the page as text
$('#currentDay').text(todaysDate);

    // - function runs each time the page loads
    moment().hour(Number)

    // Saves description to the local storage on save button click
    $(document).ready(function(){
        $(".saveBtn").on("click", function(){
            let scheduleDescription = $(this).siblings(",description").val();
            let timeValue = $(this).parent().attr("id");
            console.log(scheduleDescription, timeValue);
            localStorage.setItem(timeValue, scheduleDescription)
        })
        
    })
    // - Compare each time block time value with the current time
    // - Determine if a time block is past, present, or future
    // - Create a function to append .past, .preset, .future classes based on the comparisons made for each time value
    for (let index = 0; index < timeBlock.length; index++) {
       
        let hour = timeBlock[index].getAttribute('id').split("-")[1]
        console.log(hour)
        let currentHour = moment().hours();

        if (hour < currentHour) {
            timeBlock[index].classList.add("past")
        } else if (hour === currentHour) {
            timeBlock[index].classList.add("present")
        } else if (hour > currentHour) {
            timeBlock[index].classList.add("future")
        } 
     }
        