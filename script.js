// variables
const URL = "https://jservice.io/api/random";
const ajaxResult = [];

// element references
const $category = $("#category");
const $getClue = $("#getClue");
const $getAnswer = $("#getAnswer");
const $reset = $("#reset");
const $titleText = $("#titleText");

// event listeners
$getClue.on("click", getJeopardyData);
$getAnswer.on("click", displayAnswer);
$reset.on("click", resetFields);


// functions
function getJeopardyData(evt) {
    evt.preventDefault();
    $.ajax(URL).then(function (data) {
            // put all received data in ajaxResult array for later use
            ajaxResult.push(data);
            displayNewClue(data);
            console.log(data);
            console.log(ajaxResult);
            // console.log(data[0].category.title);
            // console.log(data[0].question);
            // console.log(data[0].answer);
        },
        function (error) {
            console.log("something went wrong");
            console.log(error);
        }
    );
}

function displayNewClue(clueData) {
    $("#category").html(`Category: ${clueData[0].category.title}`);
    $("#clue").html(`Clue: ${clueData[0].question}`);
}

    // Access the answer from the ajaxResult array I created
function displayAnswer() {
    $("#answer").html(`Answer: ${ajaxResult[(0, 0)][0].answer}`);
}

function resetFields() {
    $("#category").html(`Category:`);
    $("#clue").html(`Clue:`);
    $("#answer").html(`Answer:`);
    // resets ajaxResult array to empty, ready to recieve
    // another set of data
    ajaxResult.length = 0;
}

// possible event listener to fade in parts of the page on initial page load?
// window.addEventListener('DOMcontentLoaded', function() {
//     window.onload = function() {
//         $titleText.fadeIn(3000);
// }
//  } );