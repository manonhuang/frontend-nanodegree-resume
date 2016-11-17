
var bio = {
"characters": [
   
],
"defaultCharacter": 1, // store the default character to show on first run (Eric)
"addCharacter": function(name, role, skills) { // Create a character object and add it to characters array
  // Create character Object - this will look like the sample character object above
  var character = {};
  // Add Name
  character.name = bio.capitalize(name);
  // Add Role
  character.role = role.toLowerCase();
  // Add Skills
  character.skills = skills;
  // Add Welcome Message
  character.welcomeMessage = character.name;
  // Username Short - used to generate image URL and fake email
  var usernameShort = name.split(" ")[0].toLowerCase();
  // Username Long - used to generate fake github and twitter accounts
  var usernameLong = usernameShort + name.split(" ")[1].toLowerCase();
  // Construct and add image URL - Obviously I have image files with equivalent filenames like img/kenny.png, img/eric.jpg etc.
 // character.bioPic = "img/" + usernameShort + ".png";
    character.bioPic = "images/manon.jpg"
  // Generate and add Contacts
  character.contacts = {
    "email": "manonhuang000@gmail.com",
    "github": usernameLong,
    "twitter": "@" + usernameLong,
    "location": "Fremont, CA"
  };
  // Construct and add marker Icon URL - Again I have image files like img/kenny_marker.png
  character.markerIcon = "img/" + usernameShort + "_marker.png";
  // Increment the bio global refID and provide a unique ID
  character.refID = ++bio.refID;
  // Add character to Bio Characters array
  bio.characters.push(character);
}, // END of addCharacter function
"capitalize": function(name) { // Take a string and return each word capitalized
  var capitalizedString = "";
  // Create array of words from string
  var words = name.split(" ");
  // Capitalize each word and add to result string
  for(var i = 0; i < words.length; i++) {
    var word = words[i];
    capitalizedString += " " + (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  }
  return capitalizedString.trim(); // Clears starting whitespace
}, // END of capitalize function
"display": function() { // display Bio of selectedCharacter
  // Store all HTML code for the Header class in a string
  var HTMLheaderClass = "";
  // Consruct an array that holds all HTML strings for this character's Bio
  var HTMLheader = [];
  // Set displayed character
  var character = bio.displayCharacter;
  // Push formatted HTML sections into Header class
  // Add Bio Pic
  HTMLheader.push(HTMLbioPic.replace("%data%", character.bioPic));
  // Add Welcome Message
  HTMLheader.push(HTMLwelcomeMsg.replace("%data%", character.welcomeMessage));
  // Add Role
  HTMLheader.push(HTMLheaderRole.replace("%data%", character.role));
  // Add Skills
  // Check if character has any skills
  if (character.skills.length > 0) {
    HTMLheader.push(HTMLskillsStart);
    for(skill in character.skills) {
      HTMLheader.push(HTMLskills.replace("%data%", character.skills[skill]));
    }
    HTMLheader.push(HTMLskillsEnd);
  }
  // Convert header array into an HTML string
  HTMLheaderClass = HTMLheader.join("");
  // Replace Header
  $(".header").empty().append(HTMLheaderClass);
  // Add contacts the same way
  var HTMLcontactsClass = "";
  var HTMLcontacts = [];
  // Get first name of character by splitting the string into an array and getting the 0 index
  var firtName = character.name.split(" ")[0];
  // Add first name
  HTMLcontacts.push(HTMLcontactsTitle.replace("%data%", firtName));
  HTMLcontacts.push(HTMLcontactsStart);
  // Add email
  HTMLcontacts.push(HTMLcontactsEmail.replace("%data%", character.contacts.email));
  // Add github
  HTMLcontacts.push(HTMLcontactsGithub.replace("%data%", character.contacts.github));
  // Add twitter
  HTMLcontacts.push(HTMLcontactsTwitter.replace("%data%", character.contacts.twitter));
  HTMLcontacts.push(HTMLcontactsEnd);
  // Convert contacts array into an HTML string
  HTMLcontactsClass = HTMLcontacts.join("");
  // Replace Header
  $(".contacts").empty().append(HTMLcontactsClass);
}, // END of display function
"displayCharacter": {
  // Holds currently displayed character as an object - By default this is the defaultCharacter
},
"refID": -1 // incremented for to generate reference IDs for each character
} //// END of BIO

// Add Bio for each South Park character
/* WARNING: Although the display functions work in any order, the characters need
   to be added in this order! I hard coded array indeces in this order for work, projects & education. */
bio.addCharacter("Manon Huang", "for the tools others don't like", ["git", "grunt"]);
bio.addCharacter("Manon Huang", "Web developer", ["Java", "C++", "HTML5", "JavaScript"]);


//////////////////
//     WORK     //
//////////////////

var work = {
  "jobs": {
    "character": [
      // the displayCharacter's array of job objects is referenced using bio.displayCharacter.refID
      // 0 - Manon -- //
       [
        {
          "employer": "The Krazy Kenny Show",
          "title": "Host",
          "location": "Los Angeles, USA",
          "dates": "2000",
          "description": "Mrmph disgustimrrrmph mmmrpph battermrmph acid mmmrrrmph."
        }
      ],
      // 1 - Manon -- //
      [
        {
          "employer": "Ohlone",
          "title": "Web developer",
          "location": "Fremont, CA",
          "dates": "2010-2016",
          "description": "Involved in code reviews, code refining and documentation at various levels of the project"
        },
        {
          "employer": "Optovue",
          "title": "Web Developer/Graphic Designer",
          "location": "Fremont, CA",
          "dates": "2009-2010",
          "description": "Responsibilities included layout/paste-up ill. Electronic retouching of photos. Created design and introduced new e-commerce site consisting of catalog search, shopping cart facilities, and order procedures"
        },
        {
          "employer": "SourceCorp", 
          "title": "Database Administrator",
          "location": "Plesanton, CA",
          "dates": "2008-2009",
          "description": "Worked on Oracle advanced supply chain planning in light assembly environment "
        }
      ]
    ]
  },
  "display": function() {
    // This string will store all HTML code for the Work class
    var HTMLWorkClass = "";
    // Get displayCharacter's refID
    var refID = bio.displayCharacter.refID;
    // Use refID to get displayCharacter's jobs
    var jobs = work.jobs.character[refID];
    // Go through each job
    var jobsLength = jobs.length;
    for(var i = 0; i < jobsLength; i++) {
      // Get job
      var job = jobs[i];
      // Construct an array that holds all HTML strings for this job
      var HTMLjob = [];
      // Push formatted HTML strings into the HTMLjob array
      HTMLjob.push(HTMLsectionDivider);
      HTMLjob.push(HTMLworkEmployer.replace("%data%", job.employer));
      HTMLjob.push(HTMLworkTitle.replace("%data%", job.title));
      HTMLjob.push(HTMLworkLocation.replace("%data%", job.location));
      HTMLjob.push(HTMLworkDates.replace("%data%", job.dates));
      HTMLjob.push(HTMLworkDescription.replace("%data%", job.description));
      // Add job to main HTML Work class string
      HTMLWorkClass += HTMLjob.join("");
    }
    // Replace Work
    $(".work").empty().append(HTMLWorkClass);
  } // END of function
} //// END of WORK



//////////////////
//   PROJECTS   //
//////////////////

var projects = {
  // The projects are shared between all characters since they are working as one team.
  // However they can add their own image for each project which can be referenced by their refID
  // For example Kenny who was refID = 0 will use projects.images[0] for Online Resume
  projects: [
    {
      "title": "Online Resume",
      "dates": "Nov 2016",
      "description": "Using JavaScript language writing Resume. The real life challenge that front-end developers face. You'll be required to write clean code and to apply your knowledge of variables, objects, JSON, and functions",
      "images": [ "img/manon.jpg", "img/manon.jpg"]
    },
    {
      "title": "Arcade Game",
      "dates": "Nov 2016",
      "description": "You will be provided with visual assets and a game loop engine; using these tools you must add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
      "images": [ "img/Arcade_game.png", "img/Arcade_game.png" ]
    },
    {
      "title": "Neighborhood Map",
      "dates": "DEC 2016",
      "description": "You will develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this application.",
      "images": [ "img/sp_map.jpg" , "img/sp_map.jpg" ]
    }
  ],
  "display": function() {
    // This string will store all HTML code for the Projects Class
    var HTMLprojectsClass = HTMLprojectsStart;
    // Get displayCharacter ref ID
    var refID = bio.displayCharacter.refID;
    // Go through each project
    var projectsLength = projects.projects.length;
    for(var i = 0; i < projectsLength; i++) {
      // Get project
      var project = projects.projects[i];
      // Create an array that holds all HTML strings for this project
      var HTMLproject = [];
      // Use ref ID to get the character's project image for that project
      var img = project.images[refID];
      // Push formatted HTML sections into the Project class
      HTMLproject.push(HTMLprojectCardImage.replace("%data%", img));
      HTMLproject.push(HTMLprojectCardDescription.replace("%data%", project.description));
      HTMLproject.push(HTMLprojectCardDates.replace("%data%", project.dates));
      HTMLproject.push(HTMLprojectCardTitle.replace("%data%", project.title));
      // Add project to main HTML projects string
      HTMLprojectsClass += HTMLproject.join("");
    }
    // End Projects - This closes the row div
    HTMLprojectsClass += HTMLprojectsEnd;
    // Replace Projects
    $(".projects").empty().append(HTMLprojectsClass);
  } // END of function
} //// END of PROJECTS



/////////////////
//  EDUCATION  //
/////////////////

var education = {
    "schools": {
      // Schools for each character
      "character": [
        // the displayCharacter's array of school objects is referenced using bio.displayCharacter.refID
        // In this case all characters went to the same school so it doesn't really make a difference
        [
          {
            "name": "Ohlone College",
            "location": "Fremont, CA",
            "degree": "Associate",
            "majors": "Computer Science",
            "dates": "2009-2013",
            "url": "http://www.ohlone.edu"
          }
        ],
        [
          {
            "name": "University of Texas at Austin",
            "location": "Austin, Tx",
            "degree": "Bachelor",
            "majors": "Computer Science",
            "dates": "1998-2002",
            "url": "www.utexas.edu"
          }
        ]
        
      ]
    },
    "onlineCourses": {
      // Online Course for each character
      "character": [
        // the displayCharacter's array of onlineCourse objects is referenced using bio.displayCharacter.refID
        // 0 - Manon
        [
          {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
          },
          {
            "title": "Responsive Images",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://www.udacity.com/course/responsive-images--ud882"
          }
        ],
        // 1 - MANON
        [
          {
            "title": "How to Build a Startup",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://www.udacity.com/course/how-to-build-a-startup--ep245"
          }
        ]
      ]
  }, // END of onlineCourses
  "display": function(){
    // Start constructing HTML string to replace Work class
    // The HTML string will store all HTML string for both Schools and Online Courses
    // Schools
    var HTMLeducationClass = HTMLeducationSchoolStart;
    // Get displayCharacter refID
    var refID = bio.displayCharacter.refID;
    // Use refID to get all character's schools
    var schools = education.schools.character[refID];
    // Go through each school
    var schoolsLength = schools.length;
    for(var i = 0; i < schoolsLength; i++) {
      // Get School
      var school = schools[i];
      // Construct an array to store all HMTL strings for this school
      var HTMLschool = [];
      // Push formatted HTML sections into the array
      HTMLschool.push(HTMLsectionDivider);
      HTMLschool.push(HTMLeducationSchool.replace("%data%", school.name));
      HTMLschool.push(HTMLeducationSchoolDegree.replace("%data%", school.degree));
      HTMLschool.push(HTMLeducationSchoolDates.replace("%data%", school.dates));
      HTMLschool.push(HTMLeducationSchoolLocation.replace("%data%", school.location));
      HTMLschool.push(HTMLeducationSchoolMajors.replace("%data%", school.majors));
      // Add to HTML string
      HTMLeducationClass += HTMLschool.join(" ");
    } // END of Schools
    // Online Courses
    HTMLeducationClass += HTMLeducationOnlineCoursesStart + HTMLsectionDivider;
    // Use refID to get all character's online courses
    var onlineCourses = education.onlineCourses.character[refID];
    // Go through each online course
    var onlineCoursesLength = onlineCourses.length;
    for(var i = 0; i < onlineCoursesLength; i++) {
      // Get online course
      var onlineCourse = onlineCourses[i];
      // Construct an array to store all HMTL strings for this online course
      var HTMLonlineCourse = [];
      // Push formatted HTML sections into the online Course class
      HTMLonlineCourse.push(HTMLeducationOnlineCourse.replace("%data%", onlineCourse.title));
      HTMLonlineCourse.push(HTMLeducationOnlineCourseSchool.replace("%data%", onlineCourse.school));
      HTMLonlineCourse.push(HTMLeducationOnlineCourseDates.replace("%data%", onlineCourse.dates));
      HTMLonlineCourse.push(HTMLeducationOnlineCourseURL.replace("%data%", onlineCourse.url));
      // Add to main HTML education class string
      HTMLeducationClass += HTMLonlineCourse.join(" ");
    } // END of Online Courses
    // Replace Education
    $(".education").empty().append(HTMLeducationClass);
  }
} //// END of EDUCATION



//////////////////
//    FOOTER    //
//////////////////

var footer = {
  "currentFooterImage": 1, // Stores current footer image
  "display": function() {
    // This string will store all HTML code for the Footer class
    var HTMLfooterClass = "";
    // Consruct an array that holds all HTML strings for this Bio
    var HTMLfooter = [];
    // Push formatted HTML sections into Header class
    // Footer Start - Starts column
    HTMLfooter.push(HTMLfooterStart);
    // Footer Title
    HTMLfooter.push(HTMLfooterTitle);
    // Footer Text
    HTMLfooter.push(HTMLfooterText);
    // Convert footer array into an HTML string
    HTMLfooterClass = HTMLfooter.join("");
    // Replace Footer
    $("#footerContent").empty().append(HTMLfooterClass);
  }, // END of display function
  "getNextFooterImage": function() {
    // There's 4 footer images named footer1.jpg - footer4.jpg in img/ folder
    var nextFooterImage;
    do {
      // Pick a random number from 1 to 4
      nextFooterImage = (Math.floor(Math.random() * 4) + 1);
    } while (nextFooterImage === footer.currentFooterImage); // make sure it's different from last image

    // Construct image URL
    var footerImageURL = "img/footer" + nextFooterImage + ".jpg";
    // Update current image
    footer.currentFooterImage = nextFooterImage;
    // Return next footer image URL
    return footerImageURL;
  } // END of getNextFooterImage function
} //// END of FOOTER



// display default character to page
setCharacter(bio.defaultCharacter);
// Footer is the same for all characters and only needs to initialize once
footer.display();
// Append Map
$("#mapDiv").append(googleMap);
