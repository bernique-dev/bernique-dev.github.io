var language; 

var en = {
    code: 'en',
    about: 'About',
    tools: 'Tools',
    games: 'Games',
    contact: 'Contact',
    presentation1: 'I am Nicolas Bertin, I am a French game developer and I make games as a hobby since 2019. I go by Bernique on the Internet.',
    presentation2: 'I\'m currently doing a Master\'s degree in Software Engineering and working on a civilisation manager game called Nin.',
    tools_title: "TOOLS",
    games_title: "GAMES",
    play_link: "PLAY",
    wip: "WORK IN PROGRESS",
    yahtris_desc1: "Yahtris is a Tetris-like game made for the GTMK Game Jam 2022 (Theme: \"Dice\") by a team of two.",
    yahtris_desc2: "It takes Tetris' essence by using dice combinations to get the best score possible."
                    + " However, the dice concept were used to add some features :",
    yahtris_feature1: "Dice can be rerolled to try to get another value",
    yahtris_feature2: "Reroll gained every 500 points (max 2)",
    yahtris_feature3: "Two gamemodes: smaller & slower, bigger and faster",
    yahtris_wid1: "Part of the code (Combination recognition, points count, menus, game juice, , dice reroll)",
    yahtris_wid2: "Visuals",
    toxic_trail_desc1: "Toxic Trail is a survival game made for the ZenoJam 5 where you play an exterminator protecting the Holy Lantern against voracious insects."   ,    
    toxic_trail_desc2: "The exterminator fights these insects by spreading insecticid behind and luring them with small lanterns.",
    toxic_trail_wid1: "Code",
    toxic_trail_wid2: "Visuals",
    toxic_trail_wid3: "Sound (Monsters' noises)",
    cosmos_path_desc1: "Cosmo's path is short puzzle game where you lead a small astronaut called Cosmo to safety. Its path is filled by obstacles Cosmo will have to overcome.",
    cosmos_path_desc2: "The player will indicate with arrows keys the sequence of direction Cosmo will take to get to safety.",
    cosmos_path_wid1: "Code",
    cosmos_path_wid2: "Visuals",
    wid: "What I did",
    widoing: "What I do",
    softwares: "SOFTWARES",
    skills: "SKILLS"
}

var fr = {
    code: 'fr',
    about: 'Présentation',
    tools: 'Outils',
    games: 'Jeux',
    contact: 'Contact',
    presentation1: 'Je suis Nicolas Bertin, un développeur français de jeux vidéos et je fais des jeux dans mon temps libre depuis 2019. Je porte le pseudonyme de Bernique sur Internet.',
    presentation2: 'Actuellement, je fais un Master Génie de l\'Informatique Logicielle et travaille dans mon temps libre sur un jeu de gestion de civilisation appelé Nin.',
    tools_title: "OUTILS",
    games_title: "JEUX",
    play_link: "JOUER",
    wip: "EN COURS DE DÉVELOPPEMENT",
    yahtris_desc1: "Yahtris est un jeu Tetris-like réalisé à deux lors de la GTMK Game Jam 2022 avec comme thème \"Dice\".",
    yahtris_desc2: "Il reprend l'essence du jeu Tetris en utilisant les combinaisons de dés pour réaliser le meilleur score possible."+
                    " Cependant, le concept de dés est utilisé pour ajouter quelques petites fonctionnalités :",
    yahtris_feature1: "Possible de relancer le dé pour tenter d'avoir une autre valeur",
    yahtris_feature2: "Les relances de dé sont gagnées à chaque tranche de 500 points (max 2)",
    yahtris_feature3: "Deux modes de jeux: petit et lent, grand et rapide",
    yahtris_wid1: "Partie du code (Reconnaissance de combinaisons, compte des points, menus, game \"juice\", lancer de dés)",
    yahtris_wid2: "Visuels",
    toxic_trail_desc1: "Toxic Trail est un jeu de survie réalisé pour la ZenoJam 5 où l'on incarne un exterminateur chargé de protéger la Lanterne Sacrée contre de terribles insectes.",    
    toxic_trail_desc2: "L'exterminateur combat ces insectes en propageant de l'insecticide derrière lui et en les attirant grâce à ses lanternes",
    toxic_trail_wid1: "Code",
    toxic_trail_wid2: "Visuels",
    toxic_trail_wid3: "Audio (Bruits de monstres)",
    cosmos_path_desc1: "Cosmo's path est un court jeu de puzzle où l'on doit amener un jeune astronaute appelé Cosmo à un point sûr. Les niveaux sont remplis d'obstacles que Cosmo va devoir surpasser.",
    cosmos_path_desc2: "Le joueur doit indiquer une séquence de directions à prendre pour diriger Cosmo vers l'arrivée.",
    cosmos_path_wid1: "Code",
    cosmos_path_wid2: "Visuels",
    wid: "Ce que j'ai fait",
    widoing: "Ce que je fais",
    softwares: "LOGICIELS",
    skills: "COMPÉTENCES"
};

function setLanguage(lang) {
    $('.selected').removeClass("selected");
    setCookie('lang',lang,7)
    switch (lang) {
        case "fr":
            language = fr;
            break;
        case "en":
            language = en;
            break;
    }
    $('.' + lang).addClass("selected");
    translateTexts()
}

function getLanguage() {
    if (language == null) {
        if (document.cookie.includes('lang')) {
            const value = ('; '+document.cookie).split(`; lang=`).pop().split(';')[0];
            setLanguage(value)
        } else {
            setLanguage('en')
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // console.log(document.cookie)
}

$(document).ready(function(){
    getLanguage()
});

function translateTexts() {
    if (language != undefined) {
        
        insertTranslatedTextIfExists('#about', language.about)
        insertTranslatedTextIfExists('#tools', language.tools)
        insertTranslatedTextIfExists('#games', language.games)

        insertTranslatedTextIfExists('#presentation1', language.presentation1)
        insertTranslatedTextIfExists('#presentation2', language.presentation2)
        insertTranslatedTextIfExists('#contact', language.contact)

        insertTranslatedTextIfExists('#tools_title', language.tools_title)
        insertTranslatedTextIfExists('#games_title', language.games_title)

        insertTranslatedTextIfExists('.play_link', language.play_link)
        insertTranslatedTextIfExists('.wip', language.wip)
        insertTranslatedTextIfExists('.wid', language.wid)
        insertTranslatedTextIfExists('.widoing', language.widoing)
        insertTranslatedTextIfExists('#yahtris_desc1', language.yahtris_desc1)
        insertTranslatedHTMLIfExists('#yahtris_desc2', language.yahtris_desc2)

        insertTranslatedTextIfExists('#yahtris_feature1', language.yahtris_feature1)
        insertTranslatedTextIfExists('#yahtris_feature2', language.yahtris_feature2)
        insertTranslatedTextIfExists('#yahtris_feature3', language.yahtris_feature3)
        insertTranslatedTextIfExists('#yahtris_wid1', language.yahtris_wid1)
        insertTranslatedTextIfExists('#yahtris_wid2', language.yahtris_wid2)

        insertTranslatedTextIfExists('#toxic_trail_desc1', language.toxic_trail_desc1)
        insertTranslatedTextIfExists('#toxic_trail_desc2', language.toxic_trail_desc2)
        insertTranslatedTextIfExists('#toxic_trail_wid1', language.toxic_trail_wid1)
        insertTranslatedTextIfExists('#toxic_trail_wid2', language.toxic_trail_wid2)
        insertTranslatedTextIfExists('#toxic_trail_wid3', language.toxic_trail_wid3)

        insertTranslatedTextIfExists('#cosmos_path_desc1', language.cosmos_path_desc1)
        insertTranslatedTextIfExists('#cosmos_path_desc2', language.cosmos_path_desc2)
        insertTranslatedTextIfExists('#cosmos_path_wid1', language.cosmos_path_wid1)
        insertTranslatedTextIfExists('#cosmos_path_wid2', language.cosmos_path_wid2)
        
        insertTranslatedTextIfExists('#skills', language.skills)
        insertTranslatedTextIfExists('#softwares', language.softwares)
    }
}

function insertTranslatedTextIfExists(selector, text) {
    if ($(selector).length) {
        $(selector).text(text)
    } else {
        // console.log( selector + " doesn't exist")
    }
}

function insertTranslatedHTMLIfExists(selector, text) {
    if ($(selector).length) {
        $(selector).html(text)
    } else {
        // console.log( selector + " doesn't exist")
    }
}