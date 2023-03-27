const express = require('express')
const app = express()
var image = require('path').join(__dirname, '/images');
app.use(express.static(image));

app.listen(3000, () => console.log(`Example app listening on port 3000!`))

app.get('/home', loadHtml);
app.get('/admin', Adminpagee);
app.get('/organizerloginpage', loginnn);
app.get('/registration', studentRegistration);
app.get('/StudentLogin', Registration);

app.get('/adminPage', Adminn);
app.get('/admin/ChangePassword',adminPassword);
app.get('/admin/addOrganizerPage', AddOrganizerr);
app.get('/admin/addFestt', addFests);
app.get('/admin/otherCollege', AddOthercollege);
app.get('/admin/viewEvents', eventsDetailss);
app.get('/admin/organizerView', ViewOrganizerr);
app.get('/admin/viewfestdetails', festDetails);
app.get('/admin/viewothercollege', ViewOtherColleges);

app.get('/organizer', loginView);
app.get('/organizer/ChangeMobile',OrzanizerMobileNo);
app.get('/organizer/addingevent', Addevents);
app.get('/organizer/viewevents', eventtable);
app.get('/organizer/viewfest', Viewfestts);


app.get('/StudentPage', studentHomepage);
app.get('/ViewOthercoleges', ViewotherCollege);
app.get('/Studentprofile', studentProfile);
app.get('/ChangePassword', studentPassword);

app.get('/FestDetails', ViewFest)
app.get('/viewEventss', ViewEvent);


function loadHtml(req, res) {
	console.log(__dirname);
	res.sendFile('home.html', { root: __dirname });
}

function Adminpagee(req, res) {
	res.sendFile('adminlogin.html', { root: __dirname });
}
function adminPassword(req, res) {
	res.sendFile("Admin/ChangePassword.html", { root: __dirname });
}

function Adminn(req, res) {
	res.sendFile("Admin/homePage.html", { root: __dirname });
}

function AddOrganizerr(req, res) {
	res.sendFile("Admin/addOrganizer.html", { root: __dirname });
}

function AddOthercollege(req, res) {
	res.sendFile("Admin/othercolleges.html", { root: __dirname });
}

function ViewOtherColleges(req, res) {
	res.sendFile("Admin/viewothercolleg.html", { root: __dirname });
}

function addFests(req, res) {
	res.sendFile("Admin/addfest.html", { root: __dirname });
}
function festDetails(req, res) {
	res.sendFile("Admin/viewfest.html", { root: __dirname });
}
function eventsDetailss(req, res) {
	res.sendFile("Admin/eventsdetails.html", { root: __dirname });
}

function ViewOrganizerr(req, res) {
	res.sendFile("Admin/vieworganizer.html", { root: __dirname });
}

function loginView(req, res) {
	res.sendFile("Organizer/homepage.html", { root: __dirname });
}

function Viewfestts(req, res) {
	res.sendFile("Organizer/viewfest.html", { root: __dirname });
}

function loginnn(req, res) {
	res.sendFile('organizerlogin.html', { root: __dirname });
}



function OrzanizerMobileNo(req, res) {
	res.sendFile("Organizer/ChangeMobile.html", { root: __dirname });
}




function Addevents(req, res) {
	res.sendFile("Organizer/addevents.html", { root: __dirname });
}

function studentRegistration(req, res) {
	res.sendFile('studentReg.html', { root: __dirname });
}
function Registration(req, res) {
	res.sendFile('studentlogin.html', { root: __dirname });
}



function studentHomepage(req, res) {
	res.sendFile("Student/homepage.html", { root: __dirname });
}
function ViewEvent(req, res) {
	res.sendFile("Student/eventsview.html", { root: __dirname });
}
function studentProfile(req, res) {
	res.sendFile("Student/profile.html", { root: __dirname });
}

function studentPassword(req, res) {
	res.sendFile("Student/ChangePassword.html", { root: __dirname });
}

function ViewFest(req, res) {
	res.sendFile("Student/festview.html", { root: __dirname });
}

function ViewotherCollege(req, res) {
	res.sendFile("Student/viewothercolleges.html", { root: __dirname });
}

function eventtable(req, res) {
	res.sendFile("Organizer/viewevents.html", { root: __dirname });
}

