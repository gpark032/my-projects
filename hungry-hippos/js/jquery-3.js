$('.nextButton').attr('disabled', true);

$('.inputCode').on('keyup',function() {
    if($('.inputCode').val() == 'grid-row-start: 4;' || $('.inputCode').val() == 'grid-row-start: 4' || $('.inputCode').val() == 'grid-row-start:4' || $('.inputCode').val() == 'grid-row-start:4;') {
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


function goToLevel2() {
    window.location.href = 'index-2.html'
}
$('.level2').click(goToLevel2);


function goToLevel4() {
    window.location.href = 'index-4.html'
}
$('.level4').click(goToLevel4);


function goToLevel5() {
    window.location.href = 'index-5.html'
}
$('.level5').click(goToLevel5);


function goToNextLevel() {
    window.location.href = 'index-4.html'
}
$('.nextButton').click(goToNextLevel);
