var language; 

var en = {
    code: 'en',
    about: 'About',
    tools: 'Tools',
    games: 'Games'
};

var fr = {
    code: 'fr',
    about: 'Présentation',
    tools: 'Outils',
    games: 'Jeux'
};

function setLanguage(lang) {
    $('.selected').removeClass("selected");
    switch (lang) {
        case 'en':
            language = en
            break;
        case 'fr':
            language = fr
            break;
    }
    $('.' + lang).addClass("selected");
    translateTexts()
}

function getLanguage() {
    if (language == null) setLanguage('en')
    // console.log(data);
}

$(document).ready(function(){
    getLanguage()
});

function translateTexts() {
    $('#text').text(language.code);
    $('#about').text(language.about);
    $('#tools').text(language.tools);
    $('#games').text(language.games);
}