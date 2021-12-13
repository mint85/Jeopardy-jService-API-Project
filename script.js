// variables
const URL = "https://jservice.io/api/random";
const ajaxResult = [];

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
        ajaxResult.push(data);
        displayNewClue(data);
        // displayAnswer(data);
        console.log(data);
        console.log(ajaxResult);
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

// trying to access the answer from the ajaxResult array I created
function displayAnswer() {
    $('#answer').html(`Answer: ${ajaxResult[0,0][0].answer}`);
}

function resetFields() {
    $('#category').html(`Category:`);
    $('#clue').html(`Clue:`);
    $('#answer').html(`Answer:`);
    ajaxResult.length = 0;
}
