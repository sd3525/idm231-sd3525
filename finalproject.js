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
const bahausBtn = document.getElementById('bahaus');
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
  let AstroSign = "Cap";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
bahausBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Aqu";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
gothicBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Pis";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
brutalistBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Ari";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
industrialBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Tau";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
puebloBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Gem";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
deconstructionistBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Can";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
artdeco2Btn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Leo";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
modernBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Vir";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
colonialBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Lib";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
romanesqueBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Sco";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
postmodernismBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Sag";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});


// Calendar Input Code

const userSubmitObj = document.getElementById('userSubmit');

userSubmitObj.addEventListener('click', function () {
  console.log('user submit button clicked');

  // Get the user's date and extract the month of year and day of month
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

  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
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
      zDisplayObj.src = "images/bahaus.png";
      zTitleObj.innerHTML = 'BAHAUS';
      zDateRangeObj.innerHTML = 'January 20th to February 18th';
      zMoreInfoObj.innerHTML = '<p>Ok&comma; so you know what&comma; I&apos;m just gonna go with the obvious joke&colon; You know when to lay off the salt. You&apos;re not salty. Get it&quest; Because of the less salt. No gossip or pettiness for you- you&apos;re Lightly Salted Potato Chip Flavor baby&comma; and there&apos;s no telling how much blood pressure you&apos;ll lower out there.</p>'
      modal.hidden = !modal.hidden;
      soundFile = bahausBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Pis':
      zDisplayObj.src = "images/gothic.png";
      zTitleObj.innerHTML = 'GOTHIC';
      zDateRangeObj.innerHTML = 'February 19th to March 20th';
      zMoreInfoObj.innerHTML = '<p>Sometimes a little sour&comma; sometimes a little salty&comma; but beloved by all. You&apos;re an international favorite who&apos;s kinda crazy and seems to show up at every party. You smell really bad on hot days though.</p>'
      modal.hidden = !modal.hidden;
      soundFile = gothicBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Ari':
      zDisplayObj.src = "images/brutalist.png";
      zTitleObj.innerHTML = 'BRUTALIST';
      zDateRangeObj.innerHTML = 'March 21st to April 19th';
      zMoreInfoObj.innerHTML = '<p>You&apos;re the dad friend. Slappin&apos; those meats down on the grill with an ice cold brew in your hand&comma; talking about 80s surfer rock or telling innaproriately timed jokes... I&apos;m playing real hard into the &apos;dad&apos; thing with this one&comma; huh&quest;</p>'
      modal.hidden = !modal.hidden;
      soundFile = brutalistBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Tau':
      zDisplayObj.src = "images/industrial.png";
      zTitleObj.innerHTML = 'INDUSTRIAL';
      zDateRangeObj.innerHTML = 'April 20th to May 20th';
      zMoreInfoObj.innerHTML = '<p>You&apos;re the best of both worlds. Would you eat sour cream by itself&quest; No. Onions by themselves&quest; I hope not. But mix them together and some strange alchemical reaction happens that makes them delicious. Uh&comma; you&apos;re like the personality version of that.</p>'
      modal.hidden = !modal.hidden;
      soundFile = industrialBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Gem':
      zDisplayObj.src = "images/pueblo.png";
      zTitleObj.innerHTML = 'PUEBLO';
      zDateRangeObj.innerHTML = 'May 21st to June 20th';
      zMoreInfoObj.innerHTML = '<p>Alright&comma; look&comma; calm down. Dill Pickle isn&apos;t THAT bad. I mean&comma; I wouldn&apos;t eat them&comma; but I know people who do&excl; And that&apos;s an honor in and of itself&comma; you know&comma; since people love to be the thing no one knows about. You&apos;re like a hipster potato&comma; which sounds like someone&apos;s Instagram username from 2010&comma; but trust me it&apos;s good. You&apos;re ahead of the curve&excl;</p>'
      modal.hidden = !modal.hidden;
      soundFile = puebloBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Can':
      zDisplayObj.src = "images/deconstructionist.png";
      zTitleObj.innerHTML = 'DECONSTRUCTIONIST';
      zDateRangeObj.innerHTML = 'June 21st to July 22nd';
      zMoreInfoObj.innerHTML = '<p>You might be a little <i>cheesy</i> sometimes&comma; but your company never gets <i>sour</i>.<br>And&comma; uh&comma; that&apos;s it. That&apos;s the description.</p>'
      modal.hidden = !modal.hidden;
      soundFile = deconstructionistBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Leo':
      zDisplayObj.src = "images/artdeco2.png";
      zTitleObj.innerHTML = 'ART DECO';
      zDateRangeObj.innerHTML = 'July 23rd to August 22nd';
      zMoreInfoObj.innerHTML = '<p>The spicy member of any friend group; you&apos;ve got the heat&comma; you never back down from a challenge&comma; and you make my sensitive Irish stomach go into conniptions.</p>'
      modal.hidden = !modal.hidden;
      soundFile = artdeco2Btn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Vir':
      zDisplayObj.src = "images/modern.png";
      zTitleObj.innerHTML = 'MODERN';
      zDateRangeObj.innerHTML = 'August 23rd to September 22nd';
      zMoreInfoObj.innerHTML = '<p>Sour and spicy&comma; the ultimate combo. You&apos;ve got a zing to your smile and the spice of life in your eyes. You also have 160 calories per 1 oz &lpar;28g&sol;About 15 chips&rpar;. I am on the nutrition facts page.</p>'
      modal.hidden = !modal.hidden;
      soundFile = modernBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Lib':
      zDisplayObj.src = "images/colonial.png";
      zTitleObj.innerHTML = 'COLONIAL';
      zDateRangeObj.innerHTML = 'September 23rd to October 22nd';
      zMoreInfoObj.innerHTML = '<p>My personal favorite. You can&apos;t go wrong with a good old bag of gas station salt and pepper potato chips. Reminds me of summer days heading to the park to do God knows what on a playground for five hours. I guess I&apos;d say you&apos;re a nostalgic kind of person&comma; and no I won&apos;t expand further on that.</p>'
      modal.hidden = !modal.hidden;
      soundFile = colonialBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Sco':
      zDisplayObj.src = "images/romanesque.png";
      zTitleObj.innerHTML = 'ROMANESQUE';
      zDateRangeObj.innerHTML = 'October 23rd to November 21st';
      zMoreInfoObj.innerHTML = '<p>The healthiest of all the flavors&comma; you&apos;re the type of person to go on a keto diet but not be obnoxious about it. To make strange dips with weird vegetables that always seem to taste good. You&apos;ve got style and taste&comma; but you could also use some salt.</p>'
      modal.hidden = !modal.hidden;
      soundFile = romanesqueBtn.getAttribute("data-audio-file");
      playSoundFile(soundFile);
      break;
    case 'Sag':
      zDisplayObj.src = "images/postmodernism.png";
      zTitleObj.innerHTML = 'POST MODERNISM';
      zDateRangeObj.innerHTML = 'November 22nd to December 21st';
      zMoreInfoObj.innerHTML = '<p>You&apos;ve got that signature crunch to your personality. What does that mean&comma; you ask&quest; I do not know.</p>'
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

