$('.nextButton').attr('disabled', true);

$('.inputGridRowCode').on('keyup',function() {
    var inputGridColumnCode = $('.inputGridColumnCode').val() == 'grid-column-start: 2;' || $('.inputGridColumnCode').val() == 'grid-column-start: 2' || $('.inputGridColumnCode').val() == 'grid-column-start:2' || $('.inputGridColumnCode').val() == 'grid-column-start:2;';
    var inputGridRowCode = $('.inputGridRowCode').val() == 'grid-row-start: 3;' || $('.inputGridRowCode').val() == 'grid-row-start: 3' || $('.inputGridRowCode').val() == 'grid-row-start:3' || $('.inputGridRowCode').val() == 'grid-row-start:3;';

    if(inputGridColumnCode && inputGridRowCode) {
        $('.nextButton').attr('disabled' , false);
    } else{
        $('.nextButton').attr('disabled' , true);
    }
})

function feedHungryHippoColumn() {
    var inputGridColumnOnlyCodeValue = $('.inputGridColumnCode').val();
    $('.hippoFood').attr('style', inputGridColumnOnlyCodeValue);
}

$('.inputGridColumnCode').keyup(feedHungryHippoColumn);

function feedHungryHippoRow() {
    var inputGridRowOnlyCodeValue = $('.inputGridRowCode').val();
    $('.hippoFood').attr('style', inputGridRowOnlyCodeValue);
}

$('.inputGridRowCode').keyup(feedHungryHippoRow);


function feedHungryHippo() {
    var inputGridColumnCodeValue = $('.inputGridColumnCode').val();
    var inputGridRowCodeValue = $('.inputGridRowCode').val();

    $('.hippoFood').attr('style' , inputGridColumnCodeValue + ';' + inputGridRowCodeValue + ';');
}

$('.inputGridRowCode' || '.inputGridColumnCode').keyup(feedHungryHippo);


function goToLevel1() {
    window.location.href = 'index-1.html'
}
$('.level1').click(goToLevel1);


function goToLevel2() {
    window.location.href = 'index-2.html'
}
$('.level2').click(goToLevel2);


function goToLevel3() {
    window.location.href = 'index-3.html'
}
$('.level3').click(goToLevel3);


function goToLevel4() {
    window.location.href = 'index-4.html'
}
$('.level4').click(goToLevel4);

