
var routes = [
  {
    path: '/dashboard',
    url: '/pages/dashboard.html',
    on:{
      pageAfterIn:function(e,page){
        var router = this;
        var app = router.app;
        var swipeToClosePopup = app.popup.create({
          el: '.popup-swipe-to-close',
          swipeToClose: true,

          });
          var socket =io.connect('http://localhost:5000',{ transports: ['websocket', 'polling', 'flashsocket'] });
          socket.on("connect", () => {
            console.log(socket.id); 
          });
      }
    } 
  },
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/inscription/',
    url: './pages/inscription.html',
  },
  {
    path: '/profile/',
    url: './pages/profile.html',
  },
  {
    path: '/talk/',
    url: './pages/talk.html',
  },
];
