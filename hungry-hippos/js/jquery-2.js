$('.nextButton').attr('disabled', true);

$('.inputCode').on('keyup',function() {
    if($('.inputCode').val() == 'grid-column-start: 2;' || $('.inputCode').val() == 'grid-column-start: 2' || $('.inputCode').val() == 'grid-column-start:2' || $('.inputCode').val() == 'grid-column-start:2;') {
        $('.nextButton').attr('disabled' , false);
    } else{
        $('.nextButton').attr('disabled' , true);
    }
})

function feedHungryHippo() {
    var inputCodeValue = $('.inputCode').val();
    $('.hippoFood').attr('style', inputCodeValue);
}

$('.inputCode').keyup(feedHungryHippo);


function goToLevel1() {
    window.location.href = 'index-1.html'
}
$('.level1').click(goToLevel1);


function goToLevel3() {
    window.location.href = 'index-3.html'
}
$('.level3').click(goToLevel3);


function goToLevel4() {
    window.location.href = 'index-4.html'
}
$('.level4').click(goToLevel4);


function goToLevel5() {
    window.location.href = 'index-5.html'
}
$('.level5').click(goToLevel5);


function goToNextLevel() {
    window.location.href = 'index-3.html'
}
$('.nextButton').click(goToNextLevel);
