var heroes = ["Raynor", "Kerrigan", "Artanis", "Svon",
			 "Zagara", "Vorazun", "Karaks", "Abatur",
			 "Alarak", "Nova", "Stukov", "Phoenix",
			 "Dehaka", "Han & Horner", "Tychus"];

var temp = 0;
var count = 0;


document.write("<table class='mx-auto mt-4'>");

for (var i = 0; i < 4; i++) {

  document.write("<tr>");

  for (var j = 0; j < 4; j++) {
	count++;
      document.write("<td class='px-4'>" + "<a href='#'><img src='img/" + count + ".png' class='part_two_images' alt='" + heroes[j+temp] + "'></a>" + "</td>");
	 if (count == heroes.length) {
		    break;
	  }
  }

  document.write("</tr>");

  /*---------------------------------------------------------------------------------------------------*/
   document.write("<tr>");

  for (var j = 0; j < 4; j++) {
	  if (heroes[j+temp] == undefined) {
		    break;
	  }
      document.write("<td class='color pb-5'>" + heroes[j+temp] + "</td>");
  }

temp += 4;
  document.write("</tr>");

}

document.write("</table><br><br>");





/* if (count == heroes.length) {
		break;
	  }*/
