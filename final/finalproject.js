function myHelp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

// Array of buttons
const soundButtons = document.querySelectorAll(".resize");
const audioPlayer = document.querySelector("#speakers");

// Loop through all buttons
soundButtons.forEach(function (individualButtonElement) {
  // Get the value of the "data-audio-file" attribute on this button
  const audioTrackSource = individualButtonElement.getAttribute("data-audio-file");
  // Add click event listener to each button
  individualButtonElement.addEventListener("click", function () {
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
    audioPlayer.src = `./sounds/${audioTrackSource}`
    audioPlayer.play();
  });
});


// Button Declares

const contemporaryBtn = document.getElementById('contemporary');
const bauhausBtn = document.getElementById('bauhaus');
const gothicBtn = document.getElementById('gothic');
const brutalistBtn = document.getElementById('brutalist');
const industrialBtn = document.getElementById('industrial');
const puebloBtn = document.getElementById('pueblo');
const deconstructionistBtn = document.getElementById('deconstructionist');
const artdeco2Btn = document.getElementById('artdeco2');
const modernBtn = document.getElementById('modern');
const colonialBtn = document.getElementById('colonial');
const romanesqueBtn = document.getElementById('romanesque');
const postmodernismBtn= document.getElementById('postmodernism');



// Button Functionality

contemporaryBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let Sign = "Cap";
  console.log('Sign is: ' + Sign);
  userPicked(Sign);
});
//
bauhausBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let Sign = "Aqu";
  console.log('Sign is: ' + Sign);
  userPicked(Sign);
});
//
gothicBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let Sign = "Pis";
  console.log('Sign is: ' + Sign);
  userPicked(Sign);
});
//
brutalistBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let Sign = "Ari";
  console.log('Sign is: ' + Sign);
  userPicked(Sign);
});
//
industrialBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let Sign = "Tau";
  console.log('Sign is: ' + Sign);
  userPicked(Sign);
});
//
puebloBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let Sign = "Gem";
  console.log('Sign is: ' + Sign);
  userPicked(Sign);
});
//
deconstructionistBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let Sign = "Can";
  console.log('Sign is: ' + Sign);
  userPicked(Sign);
});
//
artdeco2Btn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let Sign = "Leo";
  console.log('Sign is: ' + Sign);
  userPicked(Sign);
});
//
modernBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let Sign = "Vir";
  console.log('Sign is: ' + Sign);
  userPicked(Sign);
});
//
colonialBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let Sign = "Lib";
  console.log('Sign is: ' + Sign);
  userPicked(Sign);
});
//
romanesqueBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let Sign = "Sco";
  console.log('Sign is: ' + Sign);
  userPicked(Sign);
});
//
postmodernismBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let Sign = "Sag";
  console.log('Sign is: ' + Sign);
  userPicked(Sign);
});


// Calendar Code

const userSubmitObj = document.getElementById('userSubmit');

userSubmitObj.addEventListener('click', function () {
  console.log('user submit button clicked');

  // Get the user's date extract the month of year and day of month

  const userBday = new Date(document.getElementById('birthday').value);

  // Figure out the zodiac sign based on month of year and day of month

  let whichMonth = userBday.getUTCMonth();
  whichMonth++;
  console.log('whichMonth is: ' + whichMonth);
  const whichDayOfMonth = userBday.getUTCDate();
  console.log('whichDayOfMonth is: ' + whichDayOfMonth);

  // Display custom image based on zodiac sign

  let AstroSign = "";

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
  }

  console.log('Sign is: ' + Sign);
  userPicked(Sign);
});


// userPicked function

function playSoundFile(sound) {
  console.log("playing sound ", sound);
  audioPlayer.src = `./sounds/${sound}`;
  audioPlayer.play();
}

function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);
  switch (whichOne) {
    case 'Cap':
      zDisplayObj.src = 'images/contemporary.png';
      zTitleObj.innerHTML = 'CONTEMPORARY';
      zDateRangeObj.innerHTML = 'December 22nd to Januard 19th';
      zMoreInfoObj.innerHTML = '<p>This modern looking style with an emphasis on energy efficiency, use of sustainable materials, and lots of natural light fits your desire to be respected and to constantly better yourself.</p>'
      modal.hidden = !modal.hidden;
      soundFile = contemporaryBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Aqu':
      zDisplayObj.src = "images/bauhaus.png";
      zTitleObj.innerHTML = 'BAUHAUS';
      zDateRangeObj.innerHTML = 'January 20th to February 18th';
      zMoreInfoObj.innerHTML = '<p>You are fun, thrive in group settings, and like to consider yourself weird, but are still rational. Bauhaus is right up your alley with its use of abstract shapes, primary color scheme, and its inclusion of basic industrial materials.</p>'
      modal.hidden = !modal.hidden;
      soundFile = bauhausBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Pis':
      zDisplayObj.src = "images/gothic.png";
      zTitleObj.innerHTML = 'GOTHIC';
      zDateRangeObj.innerHTML = 'February 19th to March 20th';
      zMoreInfoObj.innerHTML = '<p>You are difficult to observe from the outside and tend to dilute yourself with a larger personality to avoid having to form coherent identities. You are constantly absorbed in your own thoughts. The gothic style has layers of ornamentation and is very complex like you></p>'
      modal.hidden = !modal.hidden;
      soundFile = gothicBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Ari':
      zDisplayObj.src = "images/brutalist.png";
      zTitleObj.innerHTML = 'BRUTALIST';
      zDateRangeObj.innerHTML = 'March 21st to April 19th';
      zMoreInfoObj.innerHTML = '<p>This bold, in-your-face, and eternally polarizing style has a heavy and grounded appearance. You are direct, like to do things your way, and are unafraid of conflict.</p>'
      modal.hidden = !modal.hidden;
      soundFile = brutalistBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Tau':
      zDisplayObj.src = "images/industrial.png";
      zTitleObj.innerHTML = 'INDUSTRIAL';
      zDateRangeObj.innerHTML = 'April 20th to May 20th';
      zMoreInfoObj.innerHTML = '<p>Industrial architecture lacks ornamentation and uses raw rough materials like concrete, brick, and metal. This reflects how you have an appreciation for materialism, but appreciate stability, are logical, and like to be in control.</p>'
      modal.hidden = !modal.hidden;
      soundFile = industrialBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Gem':
      zDisplayObj.src = "images/pueblo.png";
      zTitleObj.innerHTML = 'PUEBLO';
      zDateRangeObj.innerHTML = 'May 21st to June 20th';
      zMoreInfoObj.innerHTML = '<p>The pueblo style was influenced by the ancient Pueblo people&apos;s simple multi-family homes. The earthy adobe, stucco, and mortar material fluid looking rounded exterior represent your need always having companions around you and your ability to switch from introvert to extrovert and match others energy.</p>'
      modal.hidden = !modal.hidden;
      soundFile = puebloBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Can':
      zDisplayObj.src = "images/deconstructionist.png";
      zTitleObj.innerHTML = 'DECONSTRUCTIONIST';
      zDateRangeObj.innerHTML = 'June 21st to July 22nd';
      zMoreInfoObj.innerHTML = '<p>Deconstructivism rethinks and dismantles traditional modes of thinking; and constructivism. Your personality and emotions are layered and you have many moods, some of which are contradictory, but they also have a deep, core self that persists. Just like the broken down and exposed materials in this style. </p>'
      modal.hidden = !modal.hidden;
      soundFile = deconstructionistBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Leo':
      zDisplayObj.src = "images/artdeco2.png";
      zTitleObj.innerHTML = 'ART DECO';
      zDateRangeObj.innerHTML = 'July 23rd to August 22nd';
      zMoreInfoObj.innerHTML = '<p>You are bold, warm, charismatic, and the ultimate showman. Originating in the Roaring Twenties, this style features bold and ornate geometric detailing, lots of shapes and chevrons and opulent colors accented with contrasting black, white, gold or silver.</p>'
      modal.hidden = !modal.hidden;
      soundFile = artdeco2Btn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Vir':
      zDisplayObj.src = "images/modern.png";
      zTitleObj.innerHTML = 'MODERN';
      zDateRangeObj.innerHTML = 'August 23rd to September 22nd';
      zMoreInfoObj.innerHTML = '<p>You are known for being detailed, clean, and a perfectionist. The modern style includes lots of clean lines, functional design, and open floor plans that have no room for clutter.</p>'
      modal.hidden = !modal.hidden;
      soundFile = modernBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Lib':
      zDisplayObj.src = "images/colonial.png";
      zTitleObj.innerHTML = 'COLONIAL';
      zDateRangeObj.innerHTML = 'September 23rd to October 22nd';
      zMoreInfoObj.innerHTML = '<p>You are a very empathetic and balanced person who avoids confrontation. This style is symmetrical and lacks ornamentation, making it hard to have any strong opinions on it.</p>'
      modal.hidden = !modal.hidden;
      soundFile = colonialBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Sco':
      zDisplayObj.src = "images/romanesque.png";
      zTitleObj.innerHTML = 'ROMANESQUE';
      zDateRangeObj.innerHTML = 'October 23rd to November 21st';
      zMoreInfoObj.innerHTML = '<p>In a period when European countries were at war and worried about protecting against invasions, just like you&apos;re worried about letting people in, the buildings were characterized by heavy and resistant walls and minimal openings.</p>'
      modal.hidden = !modal.hidden;
      soundFile = romanesqueBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Sag':
      zDisplayObj.src = "images/postmodernism.png";
      zTitleObj.innerHTML = 'POST MODERNISM';
      zDateRangeObj.innerHTML = 'November 22nd to December 21st';
      zMoreInfoObj.innerHTML = '<p>Postmodernism is the style of individualism and experimentation. It emerged as a movement against traditional, classical styles and sought to make buildings dynamic and fun while breaking the rules.</p>'
      modal.hidden = !modal.hidden;
      soundFile = postmodernismBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);;
      break;
  }
}


// Modal Controls

const modal = document.getElementById('modal');
const closeModalObj = document.getElementById('btn-modal-close');

closeModalObj.addEventListener('click', function(){
  modal.hidden = !modal.hidden;
  stopAllAudio();
});


// Link modal element/objects from DOM tree to JS

const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');
const saySomethingObj = document.getElementById('saySomething');

