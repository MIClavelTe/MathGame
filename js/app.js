var random1 = Math.floor(Math.random() * 10) + 1
var random2 = Math.floor(Math.random() * 10) + 1
var equation = 'What is ' + random1 + ' + ' + random2 + '?';
var answer = random1 + random2;
var hint;
var toggle = 0;
var score = 0;
var stars = 0;
if (answer >= 0 && answer <= 10) {
    hint = "Between 0 and 10"
} else {
    hint = "Between 11 and 20"
}
$('.dropdown-item').text(hint);
$('.dropdown-toggle').on('click', function () {
    toggle += 1
});

$('.alert').hide();
$('#next').hide();
$('iframe').hide();
$('#score').text(`Score: ${score}`);
// $('#stars').text(`Stars: ${stars}`);
$('#equation').text(equation);

function alert(text, bgColor, time) {
    $('.alert').text(text).css( 'background', bgColor );
    $('.alert').slideDown(time).delay(time).fadeOut(time);
    $('#score').text(`Score: ${score}`);
}

$('#toggle').click(function() {
    toggle += 1;
});

$('#done').click(function(evt) {
    evt.preventDefault();

    if ($('#answer').val() == '') {
        alert("Didn't Answer", 'rgb(245, 183, 50)', 500);
    }
     else if ($('#answer').val() == answer) {
        if (score % 5 == 0) {
            stars += 1
            alert('Earned a star!!! ⭐', 'rgb(51, 209, 135)', 1000);
        }
        if (toggle == 0) {
            score += 1
            alert('Correct', 'rgb(51, 209, 135)', 500);
            $('#right').slideToggle(1000);
        } 
        else {
            score += 0
            alert('Good Try', 'rgb(245, 183, 50)', 500);
            toggle = 0;
        }
     }
     else {
        score -= 1
        alert('Wrong!', 'rgb(255, 87, 87)', 500);
        $('#wrong').slideToggle(1000);
    }

    $('#next').show();
    $('#equation').hide();
    $('#answer').hide();
    $('#done').hide();
});


$('#next').click(function(evt) {
    evt.preventDefault();
    
    random1 = Math.floor(Math.random() * 10)
    random2 = Math.floor(Math.random() * 10)
    equation = 'What is ' + random1 + ' + ' + random2 + '?';
    answer = random1 + random2;
    $('#equation').text(equation);
    $('#answer').val('');
    if (answer >= 0 && answer <= 10) {
        hint = "Between 0 and 10"
        $('.dropdown-item').text(hint);
    } else {
        hint = "Between 11 and 20"
        $('.dropdown-item').text(hint);
    }

    $('iframe').hide();
    $('#next').hide();
    $('#equation').show();
    $('#answer').show();
    $('#done').show();
});
