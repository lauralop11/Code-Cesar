var alphabetmajuscule = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var  alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function chiffrement_cesar()
{
    let message = document.getElementById ("message1").value;
    let clef = Number(document.getElementById ("clef").value);
    let indice = 0;
    let cesar = '';
    let position = 0;
    let message_sans_espace = eleve_espace(message);
    let longueur = message_sans_espace.length;
    let maximo=alphabet.length;
   

    while (position<longueur)
    {
        if(alphabet [indice]== message_sans_espace[position])
        { 
            if (indice+clef >= maximo){
                let sommeindice=(indice + clef)-maximo;
                cesar=cesar + alphabet [sommeindice];
            } else {
              cesar = cesar + alphabet[indice + clef];  
            }
            position++
            indice = 0;
        } else 
        {    if (alphabetmajuscule[indice]== message_sans_espace[position])
            {
                cesar = cesar + alphabetmajuscule[indice + clef];
                position++
                indice = 0;
            }
            else {
                indice++ 
            }
        }
        
    }
    // Ajouter le texte sur le html
    let MessageCesar = document.getElementById ("messageCesar");
    let paragraphe = document.createElement("p");

    paragraphe.textContent = "Votre message chiffre est: " + cesar;
    MessageCesar.appendChild(paragraphe);
    
}


function dechiffrement_cesar()
{
    let message = document.getElementById ("message1").value;
    let clef = Number(document.getElementById ("clef").value);
    let indice = 0;
    let cesar = '';
    let position = 0;
    let message_sans_espace = eleve_espace(message);
    let longueur = message_sans_espace.length;
    let maximo=alphabet.length;
    

    while (position<longueur)
    {
        if(alphabet [indice]== message_sans_espace[position])
        {
            if (indice-clef < 0){
                let sommeindice=(indice -clef) + maximo;
                cesar=cesar + alphabet [sommeindice];
            } else {
              cesar = cesar + alphabet [indice - clef];
            } 
            position++
            indice = 0;
        } else {
            if (alphabetmajuscule [indice]== message_sans_espace[position]){
                cesar = cesar + alphabetmajuscule [indice - clef];
            position++
            indice = 0;
            } else {
                indice++ 
            }
        }  
    }
    // Ajouter le texte sur le html
    let MessageCesar = document.getElementById ("messageCesar");
    let paragraphe = document.createElement("p");

    paragraphe.textContent = "Votre message dechiffre est: " + cesar;
    MessageCesar.appendChild(paragraphe);
}

function eleve_espace(message){
    let indice=0;
    let message_sans_espace=[];
    
    while (message [indice] != undefined){
        if (message [indice] != " "){
            message_sans_espace.push(message[indice])
        }
    indice++
        }
    return message_sans_espace;
}


