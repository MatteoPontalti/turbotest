
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      document.getElementById('name').innerText = "Signed Out"    });
		document.getElementById('m').disabled=true;
  }

function signGuest() {
      document.getElementById('name').innerText = "Signed In Like Guest"    });
		document.getElementById('m').disabled=false;
  }
