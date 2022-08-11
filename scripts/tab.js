// Ajouter/Enlever la classe dark aux éléments de classe "darkable" pour le dark mode

data = {
    dark: true
}

toggleDarkness();

function toggleDarkness() {
    if (data["dark"]) {
        $(".darkable").addClass("dark")
    } else {
        $(".darkable").removeClass("dark")
    }

    data["dark"] = !data["dark"] 
}
