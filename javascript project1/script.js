 fetch("https://api.github.com/users")
 .then((res) => res.json())
 .then((data) => {
      console.log(data[1].login);
 Document
 .getElementById("profilimage1")
 .setAttribute(src,data[1]).avatar_url;
 Document
 .getElementByName("profilimage1").innerText=data[1].login
 });
 //----------------------------------card=2-----------------------------------------------
 fetch("https://api.github.com/users")
 .then((res) => res.json())
 .then((data) => {
      console.log(data[2].login);
 Document
 .getElementById("profilimage1")
 .setAttribute(src,data[2]).avatar_url;
 Document
 .getElementByName("profilimage1").innerText=data[2].login
 });