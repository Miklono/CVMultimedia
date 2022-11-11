function changeDiv(i) {
    let educacio = document.getElementById("educacio");
    let experiencia = document.getElementById("experiencia");
    let habilitats = document.getElementById("habilitats");
    let idiomes = document.getElementById("idiomes");

    let itemEducacio = document.getElementById("itemEducacio");
    let itemExperiencia = document.getElementById("itemExperiencia");
    let itemHabilitats = document.getElementById("itemHabilitats");
    let itemIdiomes = document.getElementById("itemIdiomes");

    educacio.hidden = true;
    experiencia.hidden = true;
    habilitats.hidden = true;
    idiomes.hidden = true;

    itemEducacio.setAttribute("class", "item");
    itemExperiencia.setAttribute("class", "item");
    itemHabilitats.setAttribute("class", "item");
    itemIdiomes.setAttribute("class", "item");

    switch (i) {
        case 1:
            itemEducacio.setAttribute("class", "itemSelected");
            educacio.hidden = false;
            break;
        case 2:
            itemExperiencia.setAttribute("class", "itemSelected");
            experiencia.hidden = false;
            break;
        case 3:
            itemHabilitats.setAttribute("class", "itemSelected");
            habilitats.hidden = false;
            break;
        case 4:
            itemIdiomes.setAttribute("class", "itemSelected");
            idiomes.hidden = false;
            break;
    }

}
