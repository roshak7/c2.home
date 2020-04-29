var percent = 0;

function progress(value) {
    percent += value;
    (percent >=100) ? alert('yje 100 alo') : $('#progressbar').width(percent + value + "%");
    
}
function progress2(value) {
    percent += value;
    (percent >=100) ? alert('yje 100 alo') : $('#progressbar2').width(percent + value + "%");
    
}
function progress3(value) {
    percent += value;
    (percent >=100) ? alert('yje 100 alo') : $('#progressbar3').width(percent + value + "%");
    
}