// variables
const URL = "https://jservice.io/api/random"


// element references


// event listeners



// functions
function getJeopardyData() {
    // evt.preventDefault();

    $.ajax(URL).then(function(data) {
        // render(data);
        console.log(data);
        console.log(data[0].category.title);
        console.log(data[0].question);
        console.log(data[0].answer);
        
    })
}

getJeopardyData();
