var names = ['Mouhcine ','Jamal ','Hicham ','Jaafer ','jhonsina ','Ahmed '];
document.write(names + '<br>'+'<br>');
console.log(names);

for(var i=0;i < names.length;i++){
  var name=names[i];
  var firstLetter=name.charAt(0).toLowerCase();
  if(firstLetter==='j'){
    console.log("Goodbye " + name);
    document.write("Goodbye " + name + '<br>');
  }
  else{
    console.log("Hello " + name);
    document.write("Hello " + name + '<br>');
  }
}



