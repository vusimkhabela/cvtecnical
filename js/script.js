
var clock = setInterval(function clock() {

  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;

  document.getElementById("clock").innerHTML = strTime;

}, 100);


function showIntro() {
  var x = document.getElementById('intro');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}


function showAboutMe() {
  document.getElementById('aboutme-content').style.display = "block";
}

function showRecycle() {
  document.getElementById('recycle-content').style.display = "block";
}

function showMyPC() {
  document.getElementById('mypc-content').style.display = "block";
}

function showProfile() {
  document.getElementById('profile-content').style.display = 'block';
}

function showContact() {
  document.getElementById('contact-content').style.display = "block";
}

function showGithub() {
  document.getElementById('github-content').style.display = "block";
}

function showYoutube() {
  document.getElementById('youtube-content').style.display = "block";
}

function showEDUTerminal() {
  document.getElementById('education-content').style.display = 'block';
}

function showEXPTerminal() {
  document.getElementById('experience-content').style.display = 'block';
}


function showTerminal() {
  document.getElementById('terminal-content').style.display = 'block';
}

function showCredits() {
  document.getElementById('credits-content').style.display = 'block';
}

function showMatric() {
  document.getElementById('matric-content').style.display = 'block';
}

function closeOutCredits() {
  document.getElementById('credits-content').style.display = 'none';
}

function closeOutRecycle() {
  document.getElementById('recycle-content').style.display = 'none';
}

function closeOutTerminal() {
  document.getElementById('terminal-content').style.display = 'none';
}

function closeOutEDUTerminal() {
  document.getElementById('education-content').style.display = 'none';
}

function closeOutEXPTerminal() {
  document.getElementById('experience-content').style.display = 'none';
}

function closeOut() {
  document.getElementById('intro').style.display = 'none';
}

function closeOutAboutMe() {
  document.getElementById('aboutme-content').style.display = 'none';
}

function closeOutMatric() {
  document.getElementById('matric-content').style.display = 'none';
}

function closeOutContact() {
  document.getElementById('contact-content').style.display = 'none';
}

function closeOutYoutube() {
  document.getElementById('youtube-content').style.display = 'none';
}

function closeOutProfile() {
  document.getElementById('profile-content').style.display = 'none';
}

function closeOutMyPC() {
  document.getElementById('mypc-content').style.display = 'none';
}

function closeOutGithub() {
  document.getElementById('github-content').style.display = 'none';
}

function openResume() {
  window.open('src/Mkhabela_V_CurriculumVitae.pdf', '_blank');
  return false;
}

function openMatric() {
  window.open('src/Mkhabela_V_Matric_Certified.pdf', '_blank');
  return false;
}

function showStart() {
  var x = document.getElementById('startmenu');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

