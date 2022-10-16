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
    games_title: "GAMES",
    play_link: "PLAY",
    yahtris_desc1: "Yahtris is a Tetris-like game made for the GTMK Game Jam 2022 by a team of two.",
    yahtris_desc2: "It takes Tetris' essence by using dice combinations to get the best score possible."
                    + " However, the dice concept were used to add some features :",
    yahtris_feature1: "Dice can be rerolled to try to get another value",
    yahtris_feature2: "Reroll gained every 500 points (max 2)",
    yahtris_feature3: "Two gamemodes: smaller & slower, bigger and faster"
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
    games_title: "JEUX",
    play_link: "JOUER",
    yahtris_desc1: "Yahtris est un jeu Tetris-like réalisé à deux lors de la GTMK Game Jam 2022 avec comme thème \"Dice\".",
    yahtris_desc2: "Il reprend l'essence du jeu Tetris en utilisant les combinaisons de dés pour réaliser le meilleur score possible."+
                    " Cependant, le concept de dés est utilisé pour ajouter quelques petites fonctionnalités :",
    yahtris_feature1: "Possible de relancer le dé pour tenter d'avoir une autre valeur",
    yahtris_feature2: "Les relances de dés sont gagnées à chaque tranche de 500 points (max 2)",
    yahtris_feature3: "Deux modes de jeux: petit et lent, grand et rapide"
                    
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

    insertTranslatedTextIfExists('.play_link', language.play_link)
    insertTranslatedTextIfExists('#yahtris_desc1', language.yahtris_desc1)
    insertTranslatedHTMLIfExists('#yahtris_desc2', language.yahtris_desc2)

    insertTranslatedTextIfExists('#yahtris_feature1', language.yahtris_feature1)
    insertTranslatedTextIfExists('#yahtris_feature2', language.yahtris_feature2)
    insertTranslatedTextIfExists('#yahtris_feature3', language.yahtris_feature3)
}

function insertTranslatedTextIfExists(selector, text) {
    if ($(selector).length) {
        $(selector).text(text)
    } else {
        console.log( selector + " doesn't exist")
    }
}

function insertTranslatedHTMLIfExists(selector, text) {
    if ($(selector).length) {
        $(selector).html(text)
    } else {
        console.log( selector + " doesn't exist")
    }
}