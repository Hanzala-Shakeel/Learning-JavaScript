// ul styling using query selector .

var abc = document.querySelector("ul");

abc.style.backgroundColor = "pink";

abc.style.listStyle = "none";

abc.style.display = "flex";

// li styling using query selector-ALL with loop .

var abc2 = document.querySelectorAll("li");

for (var i = 0; i < abc2.length; i++) {
  abc2[i].style.padding = "23px";
  abc2[i].style.cursor = "pointer";
}

// For default margin

abc.style.margin = "0";

var body = document.querySelector("body");
body.style.margin = "0";
