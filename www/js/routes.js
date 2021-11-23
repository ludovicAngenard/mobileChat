
var routes = [
  {
    path: '/',
    url: './index.html',
    on:{
      pageAfterIn: function(e,page){
        var router = this;
        var app = router.app;
        var swipeToClosePopup = app.popup.create({
          el: '.popup-swipe-to-close',
          swipeToClose: true,
          
          });
      }
    } 
  },
  {
    path: '/talk/',
    url: './pages/talk.html',
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    componentUrl: './pages/dynamic-route.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
