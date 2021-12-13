// variables
const URL = "https://jservice.io/api/random";


// element references
const $category = $('#category')
const $getClue = $('#getClue');
const $getAnswer = $('#getAnswer');

// event listeners
$getClue.on('click', getJeopardyData);
$getAnswer.on('click', displayAnswer);

// functions
function getJeopardyData(evt) {
    evt.preventDefault();

    $.ajax(URL).then(function (data) {
        displayNewClue(data);
        console.log(data);
        console.log(data[0].category.title);
        console.log(data[0].question);
        console.log(data[0].answer);
    }, function(error) {
        console.log('something went wrong');
        console.log(error);
    });
}

function displayNewClue(clueData) {
    $('#category').html(`<p>${clueData[0].category.title}</p>`);
    $('#clue').html(`Clue: ${clueData[0].question}`);
}

function displayAnswer(clueData) {
    
}

function resetFields() {

}