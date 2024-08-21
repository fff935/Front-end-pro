let randomInt = Math.floor(Math.random() * 5);
console.log(randomInt);

if(randomInt === 0){
    document.write('<img src="photos/nature1.jpg" width="500px" height="500px">')
}
else if(randomInt === 1){
    document.write('<img src="photos/nature2.jpg" width="500px" height="500px">')
}
else if(randomInt === 1){
    document.write('<img src="photos/nature3.jpg" width="500px" height="500px">')
}
else if(randomInt === 1){
    document.write('<img src="photos/nature4jpg" width="500px" height="500px">')
}
else{
    document.write('<img src="photos/nature5.jpg" width="500px" height="500px">')
}