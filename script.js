console.log('script.js');

$(document).ready(onReady);

function onReady () {
    console.log('jquery-3.3.1.min.js');
    displayProfilePics();
    displayRandomName();
}

function displayProfilePics () {
    for (let person of people) {
        let imgSrc = 'https://github.com/' + person.githubUsername + '.png?size=250';
        console.log(imgSrc);
        let imgAlt = 'Profile image of ' + person.name;
        console.log(imgAlt);
        let img = '<img src="' + imgSrc + '" alt="' + imgAlt + '">';
        $('#picture').append(img);
    }
}

function displayRandomName() {
    let i = randomNumber(0, 19);
    $('#name').append(people[i].name); 

}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}