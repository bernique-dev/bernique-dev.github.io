var language; 

var en = {
    code: 'en',
    about: 'About',
    tools: 'Tools',
    games: 'Games',
    contact: 'Contact',
    aka: 'I am Bernique aka Nicolas Bertin.',
    presentation: 'I am  a developer.'
};

var fr = {
    code: 'fr',
    about: 'Présentation',
    tools: 'Outils',
    games: 'Jeux',
    contact: 'Contact',
    aka: 'Je suis Bernique aka Nicolas Bertin.',
    presentation: 'Je suis un développeur.'
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
    $('#about').text(language.about);
    $('#tools').text(language.tools);
    $('#games').text(language.games);

    $('#aka').text(language.aka);
    $('#presentation').text(language.presentation);
    // $('#contact').text(language.contact);
}