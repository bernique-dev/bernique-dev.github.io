var language; 

var en = {
    code: 'en',
    about: 'About',
    tools: 'Tools',
    games: 'Games',
    contact: 'Contact',
    aka: 'I am Bernique aka Nicolas Bertin.',
    presentation: 'I am  a developer.',
    tools_title: "TOOLS",
    games_title: "GAMES"
};

var fr = {
    code: 'fr',
    about: 'Présentation',
    tools: 'Outils',
    games: 'Jeux',
    contact: 'Contact',
    aka: 'Je suis Bernique aka Nicolas Bertin.',
    presentation: 'Je suis un développeur.',
    tools_title: "OUTILS",
    games_title: "JEUX"
};

function setLanguage(lang) {
    $('.selected').removeClass("selected");
    switch (lang) {
        case 'en':
            language = en
            var lang_links = $('.lang_link')
            for (let index = 0; index < lang_links.length; index++) {
                const lang_link = lang_links[index];
                $(lang_link).attr('href', $(lang_link).attr('href').split('?')[0]);
            }
            break;
        case 'fr':
            language = fr
            var lang_links = $('.lang_link')
            for (let index = 0; index < lang_links.length; index++) {
                const lang_link = lang_links[index];
                if ($(lang_link).attr('href').indexOf('?') < 0) {
                    $(lang_link).attr('href', $(lang_link).attr('href') + '?lang=' + language.code);
                }
            }
            
            break;
    }
    $('.' + lang).addClass("selected");
    translateTexts()
}

function getLanguage() {
    if (language == null) {
        let searchParams = new URLSearchParams(window.location.search)

        if (searchParams.has('lang')) {
            setLanguage(searchParams.get('lang'))
        } else {
            setLanguage('en')
        }
    }
}


$(document).ready(function(){
    getLanguage()
});

function translateTexts() {
    insertTranslatedTextIfExists('#about', language.about)
    insertTranslatedTextIfExists('#tools', language.tools)
    insertTranslatedTextIfExists('#games', language.games)

    insertTranslatedTextIfExists('#aka', language.aka)
    insertTranslatedTextIfExists('#presentation', language.presentation)
    insertTranslatedTextIfExists('#contact', language.contact)

    insertTranslatedTextIfExists('#tools_title', language.tools_title)
    insertTranslatedTextIfExists('#games_title', language.games_title)

}

function insertTranslatedTextIfExists(selector, text) {
    if ($(selector).length) {
        $(selector).text(text)
    } else {
        console.log( selector + " doesn't exist")
    }
}