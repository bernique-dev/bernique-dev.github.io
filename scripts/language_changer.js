$(document).ready(function () {
    showLanguage('fr')

    $('.language-changer').click(function (e) {
        showLanguage($(e.target).attr('language'))
    });
});

function showLanguage(language) {
    languageClass = '.' + language
    previousLanguageClass = '.language.visible'

    console.log(previousLanguageClass)
    console.log($(languageClass))
    console.log($(previousLanguageClass))

    $(previousLanguageClass).removeClass("visible");
    $(languageClass).addClass("visible");
}