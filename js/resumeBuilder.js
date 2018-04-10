/* $("#main").append("Nimish Dogra"); */

/*
var firstName = "Nimish Dogra, ready for first code";
// $("#main").append(firstName);

var awesomeThoughts = "I am " + firstName + " and I am Awesome";
console.log(awesomeThoughts);

var email = "nimish@dmi.com";
var nEmail = email.replace("dmi", "gmail");
console.log(email);
console.log(nEmail);

var funThoughts = awesomeThoughts.replace("Awesome", "fun");
console.log(funThoughts);

$("#main").append(funThoughts);

var name = "Nimish Dogra";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

var bio = {
	name: "Nimish Dogra",
	role: "Web Developer",
	contactInfo: {
		email: "nimishdogra@gmail.com",
		mobile: "+91(9967926269)",
		github: "nimishdogra",
		twitter: "@nimishdogra",
		location: "Gurgaon,India"
	},
	picture: "images/nim.jpg",
	welcomeMessage: "Expertise in Application Development & Maintenance using Mainframe, Data Analytics & Encryption usning MS-SQL, DB2 and IDMS;" + 
					"Looking forward to explore carrer in-field of front-end development ",
	skills: [ "Javascript", "HTML", "CSS", "Front-end Development", "Mainframe", "MS-SQL", "COBOL", "CICS" , "JCL" , "DB2" , "VSAM", "IDMS" , "ADSO",
			  "Easytrieve", "File-aid", "Platinum", "RTC", "REXX", "DFSORT", "MS-SQL", "SSMS", "Git"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);

      for (var i = 0, len = bio.skills.length; i < len; i++) {
      	var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);

        $('#skills').append(formattedSkills);
      }
}

        






