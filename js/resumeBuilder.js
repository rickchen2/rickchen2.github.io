var name = "Hongyu Chen";
var role = "QA Analyst";
var skills =
["awesomeness", "programming", "teaching", "JS"];

var work ={};
work.position = "QA Analyst";
work.employer = "Rogers Communications";
work.years = 6;

//var education = {};
//education["name"]= "Seneca College";
//education["years"]= "2001-2008"
//eudcation["city"]= "Toronto, ON, Canada";

var education = {
    "schools": [
        {
            "name": "York University",
            "city": "Toronto, ON, Canada",
            "degree": "BA in progress",
            "major": "Computer Science"    
        },
        {
            "name": "Seneca College",
            "city": "Toronto, ON, Canada",
            "degree": "Diploma",
            "major": "Computer Programming"
        }
    ]
}

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var bio ={
    "name" : name,
    "role"  : role,
    "contacts" : {
        "email" : "wallst.chen@gmail.com",
        "location" : "Toronto"
    },
    "welcomeMessage" : "Thank you for visiting my website",
    "skills" : skills
};

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(bio.name);
