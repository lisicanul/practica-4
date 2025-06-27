document.addEventListener("DOMContentLoaded", ()=>{
    const btn = document.getElementById("btn");
    const fm = document.getElementById("fm")
    const na = document.getElementById("na");

    const body = document.getElementById ("body");

   
    const frases = [
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "Cree en ti y todo será posible.",
        "No tienes que ser grande para empezar, pero tienes que empezar para ser grande.",
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
        "No te rindas, el principio siempre es la parte más difícil.",
        "Hazlo con pasión o no lo hagas."
    ];
    const autores = [
        "Robert Collier",
        "Anónimo",
        "Zig Ziglar",
        "vidal Sassoon",
        "Anónimo",
        "Rosa Nouchette Carey"
    ];
    fm.textContent=frases[0];
    na.textContent=autores[0];

    btn.addEventListener("click", ()=>{
        var num = Math.floor(Math.random * 5);
        alert(num);
        fm.textContent=frases[num];
        na.textContent=autores[num];
    });
});