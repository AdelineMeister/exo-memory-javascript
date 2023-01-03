// Variables globales
var vBudget = 20;
var vRepas  = 0;

// Affiche le budget
document.getElementById("hBudget").innerHTML = vBudget;

// Capte la passation de commande
document.getElementById("btnCommander").addEventListener("click", acheterSW);

/* Achète le nombre de sandwiches par jour au prix du jour */
function acheterSW() {
   
    // * Réinitialiser le formulaire*/
      reinitFormu();
    // * declarer une variable pour stocker le nombre de jour initialise a zero
   var jour = 0;
    // * Lancer une boucle while
   while(vBudget > 0)
   {
   		jour++;
   		var prixDuJour = calculerPrixDuJour();
   		var nbrSandwiches = document.getElementById('hNSandwiches').value;
   		if(nbrSandwiches < 1)
   		{
   			nbrSandwiches = 1000;
   		}

   		var prixTotal = prixDuJour * nbrSandwiches;

   		if(vBudget >= prixTotal)
   		{
   			vBudget = vBudget - prixTotal;
   			vRepas++;
   			document.getElementById('hTicket').innerHTML += "<p>Le jour " + jour + ", les sandwiches sont à " + prixDuJour + "€. Il te reste " + vBudget.toFixed(2) + "€.</p>";
   			if(jour == 5)
   			{
   				document.getElementById("hTicket").innerHTML += "<p><em>Mais tu as tenu CINQ jours au moins. Bravo !</em></p>";
   			}
   		} else 
   		{
   			document.getElementById("hTicket").innerHTML += "<p>Aujourd'hui, les sandwiches sont à " + prixDuJour + "€.Tu n'a plus assez d'argent.</p>";
   			vBudget = 0;
   		}
   }
   document.getElementById("hTicket").innerHTML += "<p>Avec " + nbrSandwiches + " commandés tu as pu faire " + vRepas + " repas cette semaine.</p>";
    // * Obtenir le prix du jour
    
   
    // * stocker dans une variable le nombre de sandwich choisi par l'utilisateur
   
    // * s'assurer que l'utilisateur ne puisse pas entrer de valeur inférieur à 1
   
    // * Calculer le total et stocker le resultat dans une variable
    
    // * Tester si le budget suffit encore
    
        //* Si oui, soustraire le montant, augmenter le nombre de repas et reboucler
     
       // * Si non, afficher un message
   
     //* Afficher le total de repas pris en sortie de boucle 
  
}

/* Etablit le prix des sandwiches pour un jour */
function calculerPrixDuJour() {
    var prixSW = (Math.random() * (5 - 1) + 1).toFixed(2);
    return prixSW;
}

/* Réinitialise le jeu pour la prochaine commande */
function reinitFormu() {
    vBudget = 20;
    vRepas  = 0;
    document.getElementById("hTicket").innerHTML = "";

}