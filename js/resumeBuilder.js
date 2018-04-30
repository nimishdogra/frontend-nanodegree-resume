var bio = {
		name 			: "Nimish Dogra",
		role 			: "Fullstack Developer", 
		contacts : {
			mobile		: "+91(9967926269)",
			email		: "nimishdogra@gmail.com",
			github		: "nimishdogra",
			twitter		: "@nimishdogra",
			location	: "Gurgaon,India"
		},
	welcomeMessage		:"Expertise in Applications Development & Maintenance using Mainframe, Data Analytics & " +
						 "Encryption usning MS-SQL, DB2 and IDMS; " +
						 "Looking forward to explore carrer in-field of front-end development. ",
	skills				: [ "Javascript", "HTML", "CSS", "Front-end web Development", "jQuery", "DOM", "Mainframe",
							"MS-SQL", "COBOL", "CICS" , "JCL" , "DB2" , "VSAM", "IDMS" , "ADSO", "File-aid", "RTC",
							"Easytrieve", "Platinum", "REXX", "DFSORT", "MS-SQL", "SSMS", "Git"],
	biopic				: "images/nim.jpg",

	display: function() {
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		$("#header").prepend(formattedName + formattedRole);
		
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		$("#topContacts,#footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation );

		var formattedbiopic = HTMLbioPic.replace('%data%', bio.biopic);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
		$("#header").append(formattedbiopic + formattedwelcomeMsg);
		
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
				$("#skills").append(formattedSkills);
				}
			}
		}
	};


var work = {
	jobs: [
	{
		employer	: "Lochbridge, A DMI Company",
		title		: "Senior Consultant",
		location	: "Gurgaon, India",
		dates		: "January 2016 - Until now",
		description	: "Provided Technical Leadership and worked closely with business analysts, managers, developers and DBAs. " + 
					  "Develop/Enhance mainframe batch/online applications using SDLC models i.e. Waterfall & Agile, Automate " + 
					  "recurring issues using Rexx, Prepare technical design, Supported mainframe admin activities i.e. FTP's " +
					  "of setup JCL from IBM & Compuware Server to Lochbridge MVS server, installed mainframe tools i.e. Fileaid, " +
					  "Hiperstation, etc. as well as maintaining MVS Volume storage, Extract data from mainframe/distributed " +
					  "environment and & idntify/encrypt sensitive data."
	},
	{
		employer	: "IBM India Pvt Ltd",
		title		: "Application Developer",
		location	: "Mumbai, India",
		dates		: "December 2014 - December 2015",
		description	: "Provided Technical Leadership and worked closely with business analysts, managers, developers and DBAs. " + 
					  "Develop/Enhance mainframe batch/online applications using SDLC models i.e. Waterfall & Agile, Automate " + 
					  "recurring issues using Rexx, Prepare technical design, Supported mainframe admin activities i.e. FTP's " +
					  "of setup JCL from IBM & Compuware Server to Lochbridge MVS server, installed mainframe tools i.e. Fileaid, " +
					  "Hiperstation, etc. as well as maintaining MVS Volume storage, Extract data from mainframe/distributed " +
					  "environment and & idntify/encrypt sensitive data."
	},
	{
		employer	: "Syntel Ltd",
		title		: "Software Engineer",
		location	: "Pune, India",
		dates		: "September 2011 - December 2014",
		description	: "Provided Technical Leadership and worked closely with business analysts, managers, developers and DBAs. " + 
					  "Develop/Enhance mainframe batch/online applications using SDLC models i.e. Waterfall & Agile, Automate " + 
					  "recurring issues using Rexx, Prepare technical design, Supported mainframe admin activities i.e. FTP's " +
				      "of setup JCL from IBM & Compuware Server to Lochbridge MVS server, installed mainframe tools i.e. Fileaid, " +
					  "Hiperstation, etc. as well as maintaining MVS Volume storage, Extract data from mainframe/distributed " +
					  "environment and & idntify/encrypt sensitive data."
	}
	],

	display: function() {
		if (work.jobs.length > 0) {
			for (var i = 0; i < work.jobs.length; i++) {
				var formattedworkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
				var formattedworkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
				var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
		
				var formattedworkDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
				var formattedworkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
				var formattedworkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
		
				$('#workExperience').append(HTMLworkStart);
				$(".work-entry:last").append(formattedEmployerTitle + formattedworkDates + formattedworkLocation + 
											 formattedworkDescription);
			}
		}	

	}
};

var projectDetails = {
	projects: [
	{
		title			: "Mainframe DB2 Data Warehouse Production/support",
		Client			: "BCBSM, Michigan-headquartered",
		dates			: "January 2016 - Until now",
		workLocation	: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description		: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 	  "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 	  "Resolve high priority Production abends i.e. data & Sort issues, etc., fix recurring issues too." +
						  "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate" + 
						  "repeated customer requests. Prepare High Level design as well as Technical design of the system processes.",
		images			: "images/prj.jpg"
	},
	{
		title			: "MVS (Mainframe) Setup",
		Client			: "BCBSM, Michigan-headquartered",
		dates			: "January 2016 - Until now",
		workLocation	: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description		: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 	  "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 	  "Resolve high priority Production abends i.e. data & Sort issues, etc., fix recurring issues too." +
						  "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate" + 
						  "repeated customer requests. Prepare High Level design as well as Technical design of the system processes.",
		images			: "images/prj.jpg"
	},
	{
		title			: "Data Privacy to encrypt sensitive information",
		Client			: "BCBSM, Michigan-headquartered",
		dates			: "January 2016 - Until now",
		workLocation	: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description		: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 	  "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 	  "Resolve high priority Production abends i.e. data & Sort issues, etc., fix recurring issues too." +
						  "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate" + 
						  "repeated customer requests. Prepare High Level design as well as Technical design of the system processes.",
		images			: "images/prj.jpg"
	},
	{
		title			: "Multi-currency Reporting based on Local currency",
		Client			: "BCBSM, Michigan-headquartered",
		dates			: "January 2016 - Until now",
		workLocation	: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description		: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 	  "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 	  "Resolve high priority Production abends i.e. data & Sort issues, etc., fix recurring issues too." +
						  "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate" + 
						  "repeated customer requests. Prepare High Level design as well as Technical design of the system processes.",
		images			: "images/prj.jpg"
	},
	{
		title			: "Credit Risk Calculation for equity transactions",
		Client			: "BCBSM, Michigan-headquartered",
		dates			: "January 2016 - Until now",
		workLocation	: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description		: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 	  "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 	  "Resolve high priority Production abends i.e. data & Sort issues, etc., fix recurring issues too." +
						  "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate" + 
						  "repeated customer requests. Prepare High Level design as well as Technical design of the system processes.",
		images			: "images/prj.jpg"
	},
	{
		title			: "ICD-9 to ICD-10 Conversion",
		Client			: "BCBSM, Michigan-headquartered",
		dates			: "January 2016 - Until now",
		workLocation	: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description		: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 	  "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 	  "Resolve high priority Production abends i.e. data & Sort issues, etc., fix recurring issues too." +
						  "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate" + 
						  "repeated customer requests. Prepare High Level design as well as Technical design of the system processes.",
		images			: "images/prj.jpg"
	},
	{
		title			: "IDMS to DB2 Migration for Member-provider Relationship '%data%' table",
		Client			: "BCBSM, Michigan-headquartered",
		dates			: "January 2016 - Until now",
		workLocation	: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description		: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 	  "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 	  "Resolve high priority Production abends i.e. data & Sort issues, etc., fix recurring issues too." +
						  "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate" + 
						  "repeated customer requests. Prepare High Level design as well as Technical design of the system processes.",
		images			: "images/prj.jpg"
	},
	{
		title			: "Manual Adjustment at member claim level",
		Client			: "BCBSM, Michigan-headquartered",
		dates			: "January 2016 - Until now",
		workLocation	: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description		: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 	  "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 	  "Resolve high priority Production abends i.e. data & Sort issues, etc., fix recurring issues too." +
						  "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate" + 
						  "repeated customer requests. Prepare High Level design as well as Technical design of the system processes.",
		images			: "images/prj.jpg"
	},
	{
		title			: "Settlement Process of Provider Claims",
		Client			: "BCBSM, Michigan-headquartered",
		dates			: "January 2016 - Until now",
		workLocation	: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description		: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 	  "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 	  "Resolve high priority Production abends i.e. data & Sort issues, etc., fix recurring issues too." +
						  "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate" + 
						  "repeated customer requests. Prepare High Level design as well as Technical design of the system processes.",
		images			: "images/prj.jpg"
	},
	{
		title			: "Stress load claim testing",
		Client			: "BCBSM, Michigan-headquartered",
		dates			: "January 2016 - Until now",
		workLocation	: "Onshore (Detroit, US) and Offshore (Gurgaon, India)",
		description		: "BCBSM provides and administers health benefits to more than 4.3 million members residing in" + 
					 	  "Michigan in addition to members of Michigan-headquartered groups who reside outside the state." +
					 	  "Resolve high priority Production abends i.e. data & Sort issues, etc., fix recurring issues too." +
						  "Responsible for maintenance and enhancement of existing production process. Optimize Process and automate" + 
						  "repeated customer requests. Prepare High Level design as well as Technical design of the system processes.",
		images			: "images/prj.jpg"
	}
	],

	display: function() {
		if (projectDetails.projects.length > 0) {
			for (var i = 0; i < projectDetails.projects.length; i++) {
				var formattedprojectTitle = HTMLprojectTitle.replace('%data%', projectDetails.projects[i].title);
				var formattedprojectDates = HTMLprojectDates.replace('%data%', projectDetails.projects[i].dates);
				var formattedprojectDescription = HTMLprojectDescription.replace('%data%', projectDetails.projects[i].description);
				var formattedprojectImage = HTMLprojectImage.replace('%data%', projectDetails.projects[i].images);
		
				$('#projects').append(HTMLprojectStart);
				$(".project-entry:last").append(formattedprojectTitle + formattedprojectDates + 
												formattedprojectDescription + formattedprojectImage);
			}
		}	
	}		
};

var education = {
	schools: [
	{
		name		: "A.M.I. Shishu Mandir",
		location	: "Gwalior, M.P.",
		degree		: "Higher Secondary",
		majors		: ["Science-Mathematics"],
		dates		: "1992-2005",
		url			: "http://amishishumandir.com/"
	},
	{
		name		: "Skyline Institue of Engineering & Technology",
		location	: "Greater Noida, U.P.",
		degree		: "Bachelor of Technology",
		majors		: ["Electronics & Communication Engineering"],
		dates		: "2006-2011",
		url			: "http://xxxxxxxx/"
	}
	],
	onlineCourses: [
	{
		title		: "SQL server Specialist",
		school		: "Udemy",
		date		: "September 2014",
		url			: "https://lochbridge.udemy.com/certificate/UC-MMJUTEQY/"
	},
	{
		title		: "Front-End Web Developer nanodegree",
		school		: "Udacity",
		date		: "June 2017 - April 2018",
		url			: "xxxxxxxx"
	}
	],

	display: function() {
		
		
		if (education.schools.length > 0)
			for (var i = 0; i<education.schools.length; i++) {
					var formattedschoolName = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url);
					var formattedschoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
					var formattedschoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
					var formattedschoolLocation = HTMLschoolLocation.replace('%data%',education.schools[i].location);
					for (var j = 0; j<education.schools[i].majors.length; j++) {
						var formattedschoolMajor = HTMLschoolMajor.replace('%data%',education.schools[i].majors[j]);
					}
					$('#education').append(HTMLschoolStart);
					$(".education-entry:last").append(formattedschoolName + formattedschoolDegree + formattedschoolDates +
													  formattedschoolLocation + formattedschoolMajor);
			}
		
		if (education.onlineCourses.length > 0)
		$('#education').append(HTMLonlineClasses);
		$('#education').append(HTMLschoolStart);
		for (var i = 0; i<education.onlineCourses.length; i++) {
				var formattedonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title).replace('#', education.onlineCourses[i].url);
				var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
				var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].date);
				var formattedonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
				$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL);
			
			}
	}
};

bio.display();
work.display();
projectDetails.display();
education.display();

$('#mapDiv').append(googleMap);

// function for internationalized button of names

function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
   return name[0] + " " + name[1]
}
$("#main").append(internationalizeButton);