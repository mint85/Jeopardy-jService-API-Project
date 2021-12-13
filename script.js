// variables
const URL = "https://jservice.io/api/random";


// element references
const $category = $('#category')
const $getClue = $('#getClue');
const $getAnswer = $('#getAnswer');
const $reset = $('#reset');

// event listeners
$getClue.on('click', getJeopardyData);
$getAnswer.on('click', displayAnswer);
$reset.on('click', resetFields);

// functions
function getJeopardyData(evt) {
    evt.preventDefault();

    $.ajax(URL).then(function (data) {
        displayNewClue(data);
        // displayAnswer(data);
        console.log(data);
        // console.log(data[0].category.title);
        // console.log(data[0].question);
        // console.log(data[0].answer);
    },     
        function(error) {
        console.log('something went wrong');
        console.log(error);
        });
}

function displayNewClue(clueData) {
    $('#category').html(`Category: ${clueData[0].category.title}`);
    $('#clue').html(`Clue: ${clueData[0].question}`);
}

// this does not display the answer. I don't think it can access
// the d
function displayAnswer(clueData) {
    $('#answer').html(`Answer: ${clueData[0].answer}`);
}

function resetFields() {
    $('#category').html(`Category:`);
    $('#clue').html(`Clue:`);
    $('#answer').html(`Answer:`);
}