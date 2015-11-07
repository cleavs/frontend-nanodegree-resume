var bio = {
	name:"Cleavon Brathwaite",
	role:"Information Specialist",
	contacts:{
		mobile: "712-2900",
		email: "cbrathwaite90@gmail.com",
		github:"https://github.com/cleavs",
		twitter:"https://twitter.com/cleavs",
		location:"Trinidad"
	},
	welcome:"Do or do not there is no try!",
	skills: ["Web Development","Information Management","Server administration-Ubuntu","UX Design"],
	pic: "images/cleavstoo.jpg"
	
}
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);




$("#header").prepend(formattedPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWelcome);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedgithub);
$("#footerContacts").append(formattedLocation);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedMobile);



function displayBio()
{
	if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
	}
}
displayBio();


var work =[
	{
		employer:"College of Science Technology and Applied Arts of Trinidad and Tobago",
		title:"Systems Librarian",
		location:"Port of Spain, Trinidad",
		dates:"2009-present",
		description:"Responsible for the application of technology to assist with the delivery of library services to the college community"
	},
	{
		employer:"Librarians Without Borders(volunteer)",
		title:"Automation Specialist",
		location:"Que­tzal­te­nango, Guatemala (remote)",
		dates:"August 2015-present",
		description:"Automated some of their work in order to free up the librarians for more individual support of community members"
	},
	{
		employer:"IntelliCaribe",
		title:"Managing Director",
		location:"La Romaine,Trinidad",
		dates:"2013-present",
		description:"Providing technology management services for small and medium enterprises"
	},
	
]

function displayWork()
{
	for (job in work)
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer= HTMLworkEmployer.replace("%data%",work[job].employer);
		var formattedTitle= HTMLworkTitle.replace("%data%",work[job].title);
		var formattedEmployerTitle= formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLoc= HTMLworkLocation.replace("%data%",work[job].location);
		$(".work-entry:last").append(formattedLoc);
		var formattedDates= HTMLworkDates.replace("%data%",work[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription= HTMLworkDescription.replace("%data%",work[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
	
}
displayWork();

var projects =
	 [
		{
			title:"Tyroad Ltd",
			dates:"2012",
			description:"Automotive consultants required a business landing page to describe their services",
			images:"images/game.png"

		},
		{
			title:"Tyroad Ltd",
			dates:"2012",
			description:"Automotive consultants required a business landing page to describe their services",
			images:"images/game.png"

		}

	];



projects.display = function()
{
	for(var project in projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects[project].title);
		$(".project-entry:last").append(formattedprojectTitle);
		var formattedprojectDate = HTMLprojectDates.replace("%data%",projects[project].dates);
		$(".project-entry:last").append(formattedprojectDate);
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects[project].description);
		$(".project-entry:last").append(formattedprojectDescription);
		var formattedprojectImage = HTMLprojectImage.replace("%data%",projects[project].images);
		$(".project-entry:last").append(formattedprojectImage);
		}
		
			
};
projects.display();

var education ={
	"schools":[
	{
		name:"Florida State University",
		location:"Tallahassee, Florida",
		degree:"Masters",
		major:"Library & Information Studies",
		dates: 2004,
		url:"http://ischool.cci.fsu.edu/academics/graduate/mslis/specializations/"
	},
	{
		name:"University of the West Indies",
		location:"St.Augustine,Trinidad",
		degree:"BA",
		major:"History",
		dates: 1997,
		url:"https://sta.uwi.edu/"
	}

		
	],
	onlineCourses:[
	{
		"title":"Front-End Web Development",
		"school":"Udacity",
		"date":2016,
		"url":"www.udacity.com"
	}
	]


}

function displayEducation()
{
	for (sch in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedschoolName=HTMLschoolName.replace("%data%",education.schools[sch].name);
		$(".education-entry:last").append(formattedschoolName);
		var formattedschoolDates=HTMLschoolDates.replace("%data%",education.schools[sch].dates);
		$(".education-entry:last").append(formattedschoolDates);
		var formattedschoolMajor=HTMLschoolMajor.replace("%data%",education.schools[sch].major);
		$(".education-entry:last").append(formattedschoolMajor);
		var formattedschoolLocation=HTMLschoolLocation.replace("%data%",education.schools[sch].location);
		$(".education-entry:last").append(formattedschoolLocation);
		var formattedschoolDegree=HTMLschoolDegree.replace("%data%",education.schools[sch].degree);
		$(".education-entry:last").append(formattedschoolDegree);
		}
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
	for(online in education.onlineCourses){
		
		var formattedonlineTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title);
		var formattedonlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school);
		var onlineSchoolTitle= formattedonlineTitle + formattedonlineSchool;
		$(".education-entry:last").append(onlineSchoolTitle);
		var formattedonlineDate=HTMLonlineDates.replace("%data%",education.onlineCourses[online].date);
		$(".education-entry:last").append(formattedonlineDate);
		var formattedonlineUrl=HTMLonlineURL.replace("%data%",education.onlineCourses[online].url);
		$(".education-entry:last").append(formattedonlineUrl);
		$(".education-entry:last").append("<br>");
	}
}
displayEducation();
//$("#main").append(internationalizeButton)
$("#mapDiv").append(googleMap);	






