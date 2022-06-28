var fatFingers = function(str) {
    isCapsPressed = false;

    let newSentence = "";

    for(let i=0;i<str.length;i++){
        if(str[i].toLowerCase() == "a"){
            isCapsPressed = !isCapsPressed;
            continue;
        }
        if(isCapsPressed){
            newSentence += str[i].toUpperCase();
        }else{
            newSentence += str[i]
        }
    }
    
    return newSentence;
};


console.log(fatFingers("The end of the institution, maintenance, and administration of government, is to secure the existence of the body politic, to protect it, and to furnish the individuals who compose it with the power of enjoying in safety and tranquillity their natural rights, and the blessings of life: and whenever these great objects are not obtained, the people have a right to alter the government, and to take measures necessary for their safety, prosperity and happiness.") == "The end of the institution, mINTENnce, ND dministrTION OF GOVERNMENT, IS TO SECURE THE EXISTENCE OF THE BODY POLITIC, TO PROTECT IT, nd to furnish the individuLS WHO COMPOSE IT WITH THE POWER OF ENJOYING IN Sfety ND TRnquillity their nTURl rights, ND THE BLESSINGS OF LIFE: nd whenever these greT OBJECTS re not obtINED, THE PEOPLE Hve  RIGHT TO lter the government, ND TO Tke meSURES NECESSry for their sFETY, PROSPERITY nd hPPINESS.")