function generate() {
  var prompts = ['an analytics dashboard', 'a search engine', 'a homepage', 'a settings page', 'an error page', 'a checkout page', 'a popup modal', 'a sales dashboard', 'a landing page', 'a list UI', 'a chat UI'];
  var audiences = ['restaurants', 'travel apps', 'Google', 'smart home apps', 'online stores', 'website builders', 'link shorteners', 'online learning websites', 'cloud meeting apps', 'reminder apps', 'Discord', 'Amazon', 'Microsoft', 'Apple', 'Twitch'];
  
  var prompt = prompts[Math.floor(Math.random() * prompts.length)];
  var audience = audiences[Math.floor(Math.random() * audiences.length)];
  
  document.getElementById("prompt").innerHTML = prompt;
  document.getElementById("audience").innerHTML = audience;
  document.getElementById("paragraph").style.opacity = 0;
  setTimeout(function() {
    document.getElementById("paragraph").style.height = '0px';
  }, 700)
  setTimeout(function() {
    document.getElementById("paragraph").style.display = 'none';
  }, 1000)
  
  if (document.getElementById("generate").innerHTML === 'Generate') {
    setTimeout(function() {
      document.getElementById("generate").innerHTML = 'Generate B';
    }, 50)
    setTimeout(function() {
      document.getElementById("generate").innerHTML = 'Generate 9G';
    }, 100)
    setTimeout(function() {
      document.getElementById("generate").innerHTML = 'Generate 7X4';
    }, 150)
    setTimeout(function() {
      document.getElementById("generate").innerHTML = 'Generate AEC2';
    }, 200)
    setTimeout(function() {
      document.getElementById("generate").innerHTML = 'Generate Ag9LH';
    }, 250)
    setTimeout(function() {
      document.getElementById("generate").innerHTML = 'Generate Aga3M';
    }, 300)
    setTimeout(function() {
      document.getElementById("generate").innerHTML = 'Generate Agai5';
    }, 350)
    setTimeout(function() {
      document.getElementById("generate").innerHTML = 'Generate Again';
    }, 400)
  }
  
  // CHANGING IMAGES ==================================================
  // PROMPTS ==========================================================
  
  /* Analytics Dashboard */
  if (document.getElementById("prompt").innerHTML === 'an analytics dashboard') {
    document.getElementById("prompt-img").style.opacity = 0;
    document.getElementById("prompt").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
      document.getElementById("prompt-img").src = "images/prompts/adashboard.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
    }, 300)
  }
  
  /* Search Engine */
  if (document.getElementById("prompt").innerHTML === 'a search engine') {
    document.getElementById("prompt-img").style.opacity = 0;
    document.getElementById("prompt").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
      document.getElementById("prompt-img").src = "images/prompts/search.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
    }, 300)
  }
  
  /* Homepage */
  if (document.getElementById("prompt").innerHTML === 'a homepage') {
    document.getElementById("prompt-img").style.opacity = 0;
    document.getElementById("prompt").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
      document.getElementById("prompt-img").src = "images/prompts/home.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
    }, 300)
  }
  
  /* Settings Page */
  if (document.getElementById("prompt").innerHTML === 'a settings page') {
    document.getElementById("prompt-img").style.opacity = 0;
    document.getElementById("prompt").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
      document.getElementById("prompt-img").src = "images/prompts/settings.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
    }, 300)
  }
  
  /* Error Page */
  if (document.getElementById("prompt").innerHTML === 'an error page') {
    document.getElementById("prompt-img").style.opacity = 0;
    document.getElementById("prompt").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
      document.getElementById("prompt-img").src = "images/prompts/error.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
    }, 300)
  }
  
  /* Checkout Page */
  if (document.getElementById("prompt").innerHTML === 'a checkout page') {
    document.getElementById("prompt-img").style.opacity = 0;
    document.getElementById("prompt").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
      document.getElementById("prompt-img").src = "images/prompts/checkout.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
    }, 300)
  }
  
  /* Popup Modal */
  if (document.getElementById("prompt").innerHTML === 'a popup modal') {
    document.getElementById("prompt-img").style.opacity = 0;
    document.getElementById("prompt").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
      document.getElementById("prompt-img").src = "images/prompts/modal.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
    }, 300)
  }
  
  /* Sales Dashboard */
  if (document.getElementById("prompt").innerHTML === 'a sales dashboard') {
    document.getElementById("prompt-img").style.opacity = 0;
    document.getElementById("prompt").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
      document.getElementById("prompt-img").src = "images/prompts/sdashboard.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
    }, 300)
  }
  
  /* Landing Page */
  if (document.getElementById("prompt").innerHTML === 'a landing page') {
    document.getElementById("prompt-img").style.opacity = 0;
    document.getElementById("prompt").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
      document.getElementById("prompt-img").src = "images/prompts/landingpage.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
    }, 300)
  }
  
  /* List UI */
  if (document.getElementById("prompt").innerHTML === 'a list UI') {
    document.getElementById("prompt-img").style.opacity = 0;
    document.getElementById("prompt").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
      document.getElementById("prompt-img").src = "images/prompts/list.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
    }, 300)
  }
  
  /* Chat UI */
  if (document.getElementById("prompt").innerHTML === 'a chat UI') {
    document.getElementById("prompt-img").style.opacity = 0;
    document.getElementById("prompt").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
      document.getElementById("prompt-img").src = "images/prompts/chat.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("prompt-img").style.opacity = 1;
    }, 300)
  }

  // AUDIENCES ========================================================
  
  /* Restaurants */
  if (document.getElementById("audience").innerHTML === 'restaurants') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/fastfood.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Travel Apps */
  if (document.getElementById("audience").innerHTML === 'travel apps') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/travel.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Google */
  if (document.getElementById("audience").innerHTML === 'Google') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/google.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Smart Home Apps */
  if (document.getElementById("audience").innerHTML === 'smart home apps') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/smarthome.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Online Stores */
  if (document.getElementById("audience").innerHTML === 'online stores') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/onlinestore.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Website Builders */
  if (document.getElementById("audience").innerHTML === 'website builders') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/webbuilder.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Link Shorteners */
  if (document.getElementById("audience").innerHTML === 'link shorteners') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/linkshortener.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Online Learning Websites */
  if (document.getElementById("audience").innerHTML === 'online learning websites') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/school.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Cloud Meeting Apps */
  if (document.getElementById("audience").innerHTML === 'cloud meeting apps') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/meetings.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Reminder Apps */
  if (document.getElementById("audience").innerHTML === 'reminder apps') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/reminder.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Discord */
  if (document.getElementById("audience").innerHTML === 'Discord') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/discord.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Microsoft */
  if (document.getElementById("audience").innerHTML === 'Microsoft') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/microsoft.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Twitch */
  if (document.getElementById("audience").innerHTML === 'Twitch') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/twitch.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Amazon */
  if (document.getElementById("audience").innerHTML === 'Amazon') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/amazon.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
  
  /* Apple */
  if (document.getElementById("audience").innerHTML === 'Apple') {
    document.getElementById("audience-img").style.opacity = 0;
    document.getElementById("audience").style.color = '#5D5FEF';
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
      document.getElementById("audience-img").src = "images/audiences/apple.png";
    }, 300)
    setTimeout(function() {
      document.getElementById("audience-img").style.opacity = 1;
    }, 300)
  }
}

setInterval(function() {
  document.getElementById("example-1").style.marginLeft = (window.scrollY - 1000) + "px" ;
}, 0)

setInterval(function() {
  document.getElementById("example-1-back").style.marginLeft = "-" + (window.scrollY - 300) + "px" ;
}, 0)