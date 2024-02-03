// VARIABLES
const DATAURL = "https://jepp.app/api/clue?random";
const ajaxResult = [];


// ELEMENT REFERENCES
const $category = $("#category");
const $getClue = $("#getClue");
const $getAnswer = $("#getAnswer");
const $reset = $("#reset");
const $titleText = $("#titleText");


// EVENT LISTENERS
$getClue.on("click", getJeopardyData);
$getAnswer.on("click", displayAnswer);
$reset.on("click", resetFields);


// FUNCTIONS

// Resets the Category, Clue, and Answer fields on the page. Also resets the ajaxResult array to empty.
function resetFields() {
    $("#category").html(`<u>Category</u> :`);
    $("#clue").html(`<u>Clue</u> :`);
    $("#answer").html(`<u>Answer</u> :`);
    ajaxResult.length = 0; 
};

// Calls resetFields function. 
// Retrieves new random Jeopardy clue data from jService API.
// Stores clue data in ajaxResult array.
// Calls displayNewClue function.
function getJeopardyData(evt) {
    evt.preventDefault();
    resetFields();
    $.ajax({
        url: "https://jepp.app/api/clue?random",
        dataType: "jsonp"}).then(function (data) {
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
        });
};

// Retrieves the category and clue data and displays it on the page.
function displayNewClue(clueData) {
    $("#category").html(`<u>Category</u> : ${clueData[0].category.title}`);
    $("#clue").html(`<u>Clue</u> : ${clueData[0].question}`);
};

// Access the answer from the ajaxResult array and displays it on the page.
function displayAnswer() {
    $("#answer").html(`<u>Answer</u> : ${ajaxResult[(0, 0)][0].answer}`);
};



// possible event listener to fade in parts of the page on initial page load?
// window.addEventListener('DOMcontentLoaded', function() {
//     window.onload = function() {
//         $titleText.fadeIn(3000);
// }
//  } );