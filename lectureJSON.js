var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    //teste si les codes retour sont OK = on a bien lu le fichier demande
    if (this.readyState == 4 && this.status == 200) {
      // lit la premiere ligne du fichier et la met dans maLigne
        var maLigne = this.responseText;
            // contient un seul objet JSON de type
            //{"hum":"47.61 ","temp":" +21.00 ","pression":"996.15 ","timestamp":1585494629661}
            console.log(maLigne);
            try{
              // parse le JSON = recupere l'objet au format JSON
              data = JSON.parse(maLigne);
            }catch (e) {
              console.error("Erreur d'analyse du JSON :", e);
            }


        }

};
xhttp.open("GET", "cheminEtFichier.json", true);
xhttp.send();
