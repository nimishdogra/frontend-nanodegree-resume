var bio = {
	name: "Nimish Dogra",
	role: "Web Developer",
	contactInfo: {
		mobile: "+91(9967926269)",
		email: "nimishdogra@gmail.com",
		github: "nimishdogra",
		twitter: "@nimishdogra",
		location: "Gurgaon,India"
	},
	welcomeMsg: "Expertise in Application Development & Maintenance using Mainframe, Data Analytics & Encryption usning MS-SQL, DB2 and IDMS;" + 
				"Looking forward to explore carrer in-field of front-end development ",
	skills: [ "Javascript", "HTML", "CSS", "Front-end Development", "Mainframe", "MS-SQL", "COBOL", "CICS" , "JCL" , "DB2" , "VSAM", "IDMS" , "ADSO",
			  "Easytrieve", "File-aid", "Platinum", "RTC", "REXX", "DFSORT", "MS-SQL", "SSMS", "Git"],
	biopic: "images/nim.jpg"
}

// 
function displayWork() {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedName + formattedRole);
}
displayWork();

// function for internationalized button of names
function inName(iName) {
	iName = iName.trim().split(" ");
	iName[1] = iName[1].toUpperCase();
	iName[0] = iName[0].slice(0,1).toUpperCase() + iName[0].slice(1).toLowerCase();

 //   $("#intdisplay").append(iName[0] + " " + iName[1]);
   return iName[0] + " " + iName[1]
}
// $("#iintnameid").click(inName("Jack Reacher"));

//
function displayWork1() {
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

$("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation );
}
displayWork1();

//
function displayWork2() {
var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").append(formattedbiopic + formattedwelcomeMsg);
}
displayWork2();

//
function displayWork3() {
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	}
}
}
displayWork3();

var work = {
	jobs: [
	{
		employer: "Lochbridge, A DMI Company",
		title: "Senior Consultant",
		location: "Gurgaon, India",
		dates: "January 2016 - Until now",
		description: "Provided Technical Leadership and worked closely with business analysts, managers, developers and DBAs." + 
					 "Develop/Enhance mainframe batch/online applications using SDLC models i.e. Waterfal & Agile, Automate recurring issues using Rexx," + 
					 "Prepare technical design, Supported mainframe admin activities i.e. FTP's of setup JCL from IBM & Compuware Server to Lochbridge MVS server," + 
					 "installed mainframe tools i.e. Fileaid, Hiperstation, etc. as well as maintaining MVS Volume storage," + 
					 "Extract data from mainframe/distributed environment and & idntify/encrypt sensitive data."
	},
	{
		employer: "IBM India Pvt Ltd",
		title: "Application Developer",
		location: "Mumbai, India",
		dates: "December 2014 - December 2015",
		description: "Provided Technical Leadership and worked closely with business analysts, managers, developers and DBAs." + 
					 "Develop/Enhance mainframe batch/online applications using SDLC models i.e. Waterfal & Agile, Automate recurring issues using Rexx," + 
					 "Prepare technical design, Supported mainframe admin activities i.e. FTP's of setup JCL from IBM & Compuware Server to Lochbridge MVS server," + 
					 "installed mainframe tools i.e. Fileaid, Hiperstation, etc. as well as maintaining MVS Volume storage," + 
					 "Extract data from mainframe/distributed environment and & idntify/encrypt sensitive data."
	},
	{
		employer: "Syntel Ltd",
		title: "Software Engineer",
		location: "Pune, India",
		dates: "September 2011 - December 2014",
		description: "Provided Technical Leadership and worked closely with business analysts, managers, developers and DBAs." + 
					 "Develop/Enhance mainframe batch/online applications using SDLC models i.e. Waterfal & Agile, Automate recurring issues using Rexx," + 
					 "Prepare technical design, Supported mainframe admin activities i.e. FTP's of setup JCL from IBM & Compuware Server to Lochbridge MVS server," + 
					 "installed mainframe tools i.e. Fileaid, Hiperstation, etc. as well as maintaining MVS Volume storage," + 
					 "Extract data from mainframe/distributed environment and & idntify/encrypt sensitive data."
	}
	]
};

//
function displayWork4() {
if (work.jobs.length > 0) {
	for (var i = 0; i < work.jobs.length; i++) {
		var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;

		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

		$('#workExperience').append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployerTitle + formattedworkDates + formattedworkLocation + formattedworkDescription);
	}
}
}
displayWork4();
	

var projects = {
	projectDetails: [
	{
		title: "Mainframe DB2 Data Warehouse Production/support",
		Client: "BCBSM, Michigan-headquartered",
		dates: "January 2016 - Until now",
		workLocation: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 "Resolve high priority Production abends i.e. Data, Coding & Sort issues, etc., fix recurring issues too." +
					 "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate repeated customer requests." +
					 " Prepare High Level design as well as Technical design of the system processes."
	},
	{
		title: "MVS (Mainframe) Setup",
		Client: "BCBSM, Michigan-headquartered",
		dates: "January 2016 - Until now",
		workLocation: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 "Resolve high priority Production abends i.e. Data, Coding & Sort issues, etc., fix recurring issues too." +
					 "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate repeated customer requests." +
					 " Prepare High Level design as well as Technical design of the system processes."
	},
	{
		title: "Data Privacy to encrypt sensitive information",
		Client: "BCBSM, Michigan-headquartered",
		dates: "January 2016 - Until now",
		workLocation: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 "Resolve high priority Production abends i.e. Data, Coding & Sort issues, etc., fix recurring issues too." +
					 "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate repeated customer requests." +
					 " Prepare High Level design as well as Technical design of the system processes."
	},
	{
		title: "Multi-currency Reporting based on Local currency",
		Client: "BCBSM, Michigan-headquartered",
		dates: "January 2016 - Until now",
		workLocation: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 "Resolve high priority Production abends i.e. Data, Coding & Sort issues, etc., fix recurring issues too." +
					 "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate repeated customer requests." +
					 " Prepare High Level design as well as Technical design of the system processes."
	},
	{
		title: "Credit Risk Calculation for equity transactions",
		Client: "BCBSM, Michigan-headquartered",
		dates: "January 2016 - Until now",
		workLocation: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 "Resolve high priority Production abends i.e. Data, Coding & Sort issues, etc., fix recurring issues too." +
					 "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate repeated customer requests." +
					 " Prepare High Level design as well as Technical design of the system processes."
	},
	{
		title: "ICD-9 to ICD-10 Conversion",
		Client: "BCBSM, Michigan-headquartered",
		dates: "January 2016 - Until now",
		workLocation: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 "Resolve high priority Production abends i.e. Data, Coding & Sort issues, etc., fix recurring issues too." +
					 "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate repeated customer requests." +
					 " Prepare High Level design as well as Technical design of the system processes."
	},
	{
		title: "IDMS to DB2 Migration for Member-provider Relationship data table",
		Client: "BCBSM, Michigan-headquartered",
		dates: "January 2016 - Until now",
		workLocation: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 "Resolve high priority Production abends i.e. Data, Coding & Sort issues, etc., fix recurring issues too." +
					 "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate repeated customer requests." +
					 " Prepare High Level design as well as Technical design of the system processes."
	},
	{
		title: "Manual Adjustment at member claim level",
		Client: "BCBSM, Michigan-headquartered",
		dates: "January 2016 - Until now",
		workLocation: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 "Resolve high priority Production abends i.e. Data, Coding & Sort issues, etc., fix recurring issues too." +
					 "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate repeated customer requests." +
					 " Prepare High Level design as well as Technical design of the system processes."
	},
	{
		title: "Settlement Process of Provider Claims",
		Client: "BCBSM, Michigan-headquartered",
		dates: "January 2016 - Until now",
		workLocation: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 "Resolve high priority Production abends i.e. Data, Coding & Sort issues, etc., fix recurring issues too." +
					 "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate repeated customer requests." +
					 " Prepare High Level design as well as Technical design of the system processes."
	},
	{
		title: "Stress load claim testing",
		Client: "BCBSM, Michigan-headquartered",
		dates: "January 2016 - Until now",
		workLocation: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 "Resolve high priority Production abends i.e. Data, Coding & Sort issues, etc., fix recurring issues too." +
					 "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate repeated customer requests." +
					 " Prepare High Level design as well as Technical design of the system processes."
	}
	]
};

function displayWork5() {
if (projects.projectDetails.length > 0) {
	for (var i = 0; i < projects.projectDetails.length; i++) {
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projectDetails[i].title);
		var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projectDetails[i].dates);
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projectDetails[i].description);

		$('#projects').append(HTMLprojectStart);
		$(".project-entry:last").append(formattedprojectTitle + formattedprojectDates + formattedprojectDescription);
	}
}
}
displayWork5();

var education = {
	schools: [
	{
		name: "A.M.I. Shishu Mandir",
		location: "Gwalior, M.P.",
		degree: "Higher Secondary",
		majors: "Science-Mathematics",
		dates: "1992-2005",
		url: "http://amishishumandir.com/"
	},
	{
		name: "Skyline Institue of Engineering & Technology",
		location: "Greater Noida, U.P.",
		degree: "Bachelor of Technology",
		majors: "Electronics & Communication Engineering",
		dates: "2006-2011",
		url: "http://xxxxxxxx/"
	}
	],
	onlineCourses: [
	{
		title: "SQL server Specialist",
		school: "Udemy",
		date: "September 2014",
		url: "https://lochbridge.udemy.com/certificate/UC-MMJUTEQY/"
	},
	{
		title: "Front-End Web Developer nanodegree",
		school: "Udacity",
		date: "June 2017 - April 2018",
		url: "xxxxxxxx"
	}
	]
};

$('#mapDiv').append(googleMap);