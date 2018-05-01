function shout (string) { 
  return string.toUpperCase();
}

function whisper (string) {
  return string.toLowerCase();
}

function logShout (string) {
  return string.toUpperCase();
}

function logWhisper(string) {
  return string.toLowerCase();
}

function sayHiToGrandma(string) {
  if (string === string.toUpperCase()) {
    console.log("YES INDEED!")
  } else if  (string === string.toLowerCase()){
    console.log("I can't hear you!")  
  } //else (string === "I love you, Grandma.") {
    //console.log("I love you, too.")
  //}
}