var googleUser = {};
  var startApp = function() {
    
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '306163354645-81dnh3h4ott3t61ru0vsjtgdcg2q326j.apps.googleusercontent.com'
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('googleButton'));
    });
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
            
           
          document.getElementById('name').innerText = "Signed in: " +
              googleUser.getBasicProfile().getName();
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }
  
  var profile= { name: "googleUser.getBasicProfile().getName()", email : "googleUser.getBasicProfile().getEmail()", id :"googleUser.getBasicProfile().getId()", image :"googleUser.getBasicProfile().getImageUrl()"}
  module.exports = profile;