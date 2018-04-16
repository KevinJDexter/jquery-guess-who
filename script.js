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
        alert('You are the smartest!\nLet\'s play again! (b^_^)b');
        displayRandomName();
    }
    else {
        console.log('nay');
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

