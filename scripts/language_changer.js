$(document).ready(function () {
    if (document.cookie != '') {
        language = document.cookie.split('=')[1]
        showLanguage(language)
    } else {
        $.get("https://ipinfo.io", function(response) {
            if (response.country = 'FR') {
                showLanguage('fr')
            } else {
                showLanguage('en')
            }
        }, "jsonp");
    }
    
    $('.language-changer').click(function (e) {
        showLanguage($(e.target).attr('language'))
    });
});

function showLanguage(language) {
    setCookie('language',language,1)

    languageClass = '.' + language
    previousLanguageClass = '.language.visible'

    $(previousLanguageClass).removeClass("visible");
    $(languageClass).addClass("visible");
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}