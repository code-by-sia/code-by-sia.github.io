function hasPageShown(el) {
    if(!el){
      return false;
    }
    var rect = el.getBoundingClientRect();

    return (
        (rect.top > -10) &&
        (rect.top < (window.innerHeight || document.documentElement.clientHeight))

    );
}

function hideMobileMenu(){
  document.getElementById("menu").className ="";
}

function toggleMobileMenu() {
  var menuEl = document.getElementById("menu");
  if(menuEl.className == "active"){
    menuEl.className="";
  }else{
    menuEl.className="active";
  }
}

function typewriter(elementId){
  var el = document.getElementById(elementId);
  var words  = [
      'writes well-performanced algorithmes',
      'fallen in love with C/C++',
      'loves web design and development',
      'loves JavaScript',
      //'drinks a lot of coffee ',
      'is creative!',
      'wanna make/invent new stuff',
    ];

  var wordId=0;
  var letterId=1;
  var direction = 1;
  var doType = function(){
    var currentWord  = words[wordId];
    letterId += direction;
    var word = currentWord.substring(0,letterId);
    el.innerHTML = "&nbsp;" +  word ;

    if(letterId == currentWord.length){
      direction = -direction;
    }
    if(letterId < 0 ){
      direction = -direction;
      letterId = 1;
      wordId = (++wordId) % words.length;
    }
  };

  setInterval(doType,200);
}


var ready = function(){
    window.nav = document.getElementById('nav');
    window.homePage= document.getElementById('hero-page');
    window.socialPage = document.getElementById('links-page');
    window.projectsPage = document.getElementById('projects-page');
    window.aboutMePage = document.getElementById('about-me-page');
    typewriter("type");
};

var setCurrentMenu = function(){
  if(!window.nav){
    return;
  }
  var pages = [];
  pages['about-me'] = window.aboutMePage;
  pages['social'] = window.socialPage;
  pages['projects'] = window.projectsPage;
  pages['home'] = window.homePage;

  var find=false;
  for (var link in pages) {
    if (pages.hasOwnProperty(link)) {
        var page = pages[link];
        var navItem = document.getElementById('link-' + link);
        navItem.className ="";
        if(hasPageShown(page) && !find){
          find=true;
          navItem.className="current";
        }
    }
  }

}

var scroll =function(args){
  var sc= (window.innerHeight -  window.scrollY );
  if(sc <= 500) {
    nav.className = "scroll";
  }else {
    nav.className = "";
  }

  setCurrentMenu();

}


window.addEventListener('load',ready,false);
window.addEventListener('scroll',scroll,false)
