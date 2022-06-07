//let who = ['the dog ','my granma ','his turtle ','my bird'];
//let what = ['eat','pissed','crushed','broked'];
//let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

var who = ['the dog ','my granma ','his turtle ','my bird '];
var randWho = Math.floor(Math.random()*who.length);
var rValueWho = who[randWho];
//console.log(rValueWho);

var what = ['eat ','pissed ','crushed ','broked '];
var randWhat = Math.floor(Math.random()*what.length);
var rValueWhat = what[randWhat];
//console.log(rValueWhat);

var when = ['before the class ','right in time ','when I finished ','during my lunch ','while I was praying '];
var randWhen = Math.floor(Math.random()*when.length);
var rValueWhen = when[randWhen];
//console.log(rValueWhen);

function cambiar(){
    document.getElementById("excuse").innerHTML=rValueWho+rValueWhat+rValueWhen;
}
cambiar();

//
