var googleUser = {};
  var startApp = function() {
    
    gapi.load('auth2', function(){
      auth2 = gapi.auth2.init({
        client_id: '306163354645-81dnh3h4ott3t61ru0vsjtgdcg2q326j.apps.googleusercontent.com'
        
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
    document.getElementById('m').disabled=false;
    document.getElementById('mic').disabled=false;
    document.getElementById('invia').disabled=false;

  }
