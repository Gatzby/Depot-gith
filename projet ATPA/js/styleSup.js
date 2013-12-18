
/*Variables globale*/
var seconde = 30;
var minute = 0;
var timer = setInterval('decompte()',1000);
var counter = 0;
var counter1 = 0;
/*--------------------------------------------------*/

document.ready=function () {

    // On cache les sous-menus :
    $(".navigation ul.subMenu").hide();

    // On sélectionne tous les items de liste portant la classe "toggleSubMenu"
    // et on remplace l'élément span qu'ils contiennent par un lien :
    $(".navigation li.toggleSubMenu span").each( function () {
        $(this).replaceWith('<a href="">' + $(this).text() + '<\/a>') ;
    }) ;
    
     // On modifie l'évènement "click" sur les liens dans les items de liste
    // qui portent la classe "toggleSubMenu" :
    $(".navigation li.toggleSubMenu > a").click( function () {
        // Si le sous-menu était déjà ouvert, on le referme :
        if ($(this).next("ul.subMenu:visible").length != 0) {
            $(this).next("ul.subMenu").slideUp("normal");
        }
        // Si le sous-menu est caché, on ferme les autres et on l'affiche :
        else {
            $(".navigation ul.subMenu").slideUp("normal");
            $(this).next("ul.subMenu").slideDown("normal");
        }
        // On empêche le navigateur de suivre le lien :
        return false;
    });    
	//on ré-active les boutons réponses
    activebtn(); 
}

function affrRO(){
	$("#AffRepFermee").hide();
	$("#AffRepSaisie").hide();
	$("#AffRepOuverte").show();
	document.getElementById("stylebtn").innerHTML = "<section class=\"alert-info span3\">Question à choix multiple</section><br /><br />";
	$(".navigation ul.subMenu").hide();
}
    
function affrRF(){
	$("#AffRepOuverte").hide();
	$("#AffRepSaisie").hide();
	$("#AffRepFermee").show();
	document.getElementById("stylebtn").innerHTML = "<section class=\"alert-info span2\">Question Fermée</section><br /><br />";
	$(".navigation ul.subMenu").hide();
}  
   
function affrRZS(){
	$("#AffRepFermee").hide();
    $("#AffRepOuverte").hide();
    $("#AffRepSaisie").show();
    document.getElementById("stylebtn").innerHTML = "<section class=\"alert-info span3\">Question avec saisie réponse</section><br /><br />";
    $(".navigation ul.subMenu").hide();
}

function cache(){
  $("#question").hide();
  $("#repFausse1").hide();$("#repFausse2").hide();$("#repFausse3").hide();
  $("#repVrai1").hide();$("#repVrai2").hide();$("#repVrai3").hide();
  document.getElementById("stylebtn").innerHTML = "";
  document.getElementById('btnAjoutRepF').disabled= false;
  document.getElementById('btnAjoutRepV').disabled= false;
}

function conversion()
{
	var seconde=0;// ajouter un get element by id
	var minute=0;// ajouter un get element by id
	var heure=0;// ajouter un get element by id
	
	if (minute>0)
	{
		seconde += (minute*60);
	}
	if (heure>0)
	{
		seconde += (heure*3600);
	}
}

function decompte()
{
	
	if(seconde <= 1) {
	var pluriel = "";
	} else {
	pluriel = "s";
	}
				
	if(minute <= 1) {
	var pluriel2 = "";
	} else {
	pluriel2 = "s";
	}
				
	if (seconde > 59){	
		minute = parseInt(seconde/60);
		var seconde2 = seconde % 60;
	}
	else{
			seconde2=seconde;
			minute=0;
		}
	$("#compt2").html(minute +" minute"+pluriel2 +" "+ seconde2 + " seconde" + pluriel);
	$("#compt2").css("font-size","x-large");
	//$("#compt").html(seconde + " seconde" + pluriel);
	//$("#compt").css("font-size","x-large");
	
	if(seconde <= 10 || seconde < 0) {
		//$("#compt").css("color","red");
		$("#compt2").css("color","red");
	}
		
	if(seconde == 0 || seconde < 0) {
		seconde = 0;minute=0;	
		clearInterval(timer);	
		//$("#compt").html("Terminé");
		$("#compt2").html("Terminé");
		desactivebtn();
	}			
	seconde--;
	return seconde;
}

function question(){
	$("#question").toggle("slow");
}

function desactivebtn(){
	document.getElementById('btnEtuYes').disabled= true;
	document.getElementById('btnEtuNo').disabled= true;	
}

function activebtn(){
	document.getElementById('btnEtuYes').disabled= false;
	document.getElementById('btnEtuNo').disabled= false;	
}

function reponse(){
	$("#reponseEns").toggle("slow");
}
function cachereponse(){
	$("#reponseEns").hide();
}

function stopTime(){
		
	$("#compt2").html("Terminé");
	$("#compt2").css("color","red");	
	seconde = 0;	
}

function ajoutSec(){
	var sec1 = decompte();
	var sec2 = document.getElementById("rangeS").value;
	var ajout = parseInt(sec1)+parseInt(sec2);
	seconde = ajout;
}


	
function ajoutRepF(id) {
counter++;
	switch(counter)
	{
		case 1:
		$("#repFausse1").show();
		break;
		case 2:
		$("#repFausse2").show();
		break;
		case 3:
		$("#repFausse3").show();
		$("#btnAjoutRepF").hide();
		break;
		default:
		exit();
	}
	var temp =0;
	temp = counter + counter1;
	temp +=2;
	if (temp>=4){
			document.getElementById('btnAjoutRepF').disabled= true;
			document.getElementById('btnAjoutRepV').disabled= true;	
			$("#btnAjoutRepF").hide();
			$("#btnAjoutRepV").hide();
	}
}
	

function ajoutRepV(id){
	counter1++;
	switch(counter1)
	{
		case 1:
		$("#repVrai1").show();
		break;
		case 2:
		$("#repVrai2").show();
		break;
		case 3:
		$("#repVrai3").show();
		$("#btnAjoutRepV").hide();
		break;
		default:
		exit();
	}
	var temp =0;
	temp = counter + counter1;
	temp +=2;
	if (temp>=4){
			document.getElementById('btnAjoutRepF').disabled= true;
			document.getElementById('btnAjoutRepV').disabled= true;
			$("#btnAjoutRepF").hide();
			$("#btnAjoutRepV").hide();	
	}
}
