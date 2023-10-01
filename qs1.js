//FOR THE GIVEN JSON ITERATE OVER ALL FOR LOOPS(for,for each,for in,for of) 
var json = [{
    "id" : "monisha", 
    "msg"   : "hello world",
    "task" : "task",
    "mail": "moni9763@gmail.com"
},
{
    "id" : "monisha", 
    "msg"   : "hello world",
    "task" : "task",
    "mail": "moni9763@gmail.com"
}];

//for loop

for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each

json.forEach(function(obj){
     console.log(obj.msg) 
}
//for In

  for (let key in obj) {

if (json.hasOwnProperty(key)) {
      //console.log(json[key].id);
      console.log(obj[i].msg);
     
    }
    }
    

//for Of

let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);




