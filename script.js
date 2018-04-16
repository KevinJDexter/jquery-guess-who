let currentName;

$(document).ready(onReady);

function onReady () {
    console.log('jquery-3.3.1.min.js');
    displayProfilePics();
    displayRandomName();
    $('img').on('click', checkName)
}

function displayProfilePics () {
    for (let person of people) {
        let imgSrc = 'https://github.com/' + person.githubUsername + '.png?size=250';
        console.log(imgSrc);
        let imgAlt = 'Profile image of ' + person.name;
        console.log(imgAlt);
        let img = '<img src="' + imgSrc + '" alt="' + imgAlt + '" value="' + person.name + '">';
        $('#picture').append(img);
    }
}

function displayRandomName() {
    let i = randomNumber(0, 19);
    $('#randomName').text(people[i].name); 
    currentName = people[i].name;

}

function checkName() {
    if ($(this).attr('value') == currentName) {
        $('body').css('background-color', 'limegreen');
        window.setTimeout(whiteBackground, 2000);
        displayRandomName();
    }
    else {
        // alert('Go think about what you have done. Repent, loser.');
        $('body').css('background-color', 'magenta');
        window.setTimeout(whiteBackground, 2000);
    }
}

function whiteBackground() {
    $('body').css('background-color', 'white');
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

