// Declarer un tableau appeler motifsCartes pour y stocker les numero de chaque carte de chacune des paires de cartes

// Declarer un tableau appeler EtatsCartes pour y stocker la valeur d'état de chaque carte : 
// * etat  0 : face cachée
// * etat  1 : face visible
// * etat  -1 : enlevée 
// valeur de départ de chaque carte = 0;

// Declarer un tableau vide pour y stocker les carte retournée

// Declarer une variable pour compter le nombre de paire trouver initialisé à zero

// Cette variable recupére les elements "img" de chaque cellule du tableau "tapis"
var imgCartes=document.getElementById("tapis").getElementsByTagName("img");		
// Cette boucle for ajoutes a chaque carte face caché la propriété noCarte ,elle sera à utilisé comme argument aux fonction majAffichage() et controleJeu()
// Elle ajoute aussi a chaque carte un gestionnaire d'evenements onClick qui appelle la fonction controleJeu()
for(var i=0;i<imgCartes.length;i++){
	imgCartes[i].noCarte=i; //Ajout de la propriété noCarte à l'objet img
	imgCartes[i].onclick=function(){
		controleJeu(this.noCarte);
	}                      
}

//initialiser le jeu 


function majAffichage(noCarte){

	// Tester l'etat de la carte et en fonction de son etat(0, 1 ou -1) afficher soit l'image fondcarte ,soit la face de l'image positionner la ou l'utilisateur a cliquer ,
	// soit cacher l'image  
	
}

// fonction a appeler quand on a trouver toutes les paires
function rejouer(){
	alert("Bravo !");
	location.reload();
}

// fonction pour initialiser le jeu 
function initialiseJeu(){
	for(var position=motifsCartes.length-1; position>=1; position--){
		var hasard=Math.floor(Math.random()*(position+1));
		var sauve=motifsCartes[position];
		motifsCartes[position]=motifsCartes[hasard];
		motifsCartes[hasard]=sauve;
	}
}

// fonction de controle principale du jeu 
function controleJeu(noCarte){

	// tester si on a retourné moins de 2 cartes 
	
		// si oui tester si etat de la carte retourné est egale a 0
		
			// si oui passé l'état de la carte à 1, ajouter la carte aux tableau carteRetournees et mettre a jour l'affichage
			
		// tester si on a retourner 2 cartes 
		
			// si oui declarer une variable appeler nouveauEtat initialiser a zero 
			
			// tester si les deux cartes retournée font la paire
			
				// si oui modifier nouveauEtat a -1
				
				// incrementer la variable nbPairesTrouver
				

			// mettre a jour l'etat des 2 cartes retournées avec la variable nouveauEtat
			

			// un setTimeout pour mettre a jour l'affichage des 2 carte retournée, reinitialisé le tableau carte retournée
			// et tester si on a trouver 10 paires, si oui on appelle la fonction rejouer()
			// ce setTimeout a un interval de 750 millisecondes
			
}