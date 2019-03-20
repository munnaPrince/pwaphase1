function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 &&xhr.status=="200"){
      callback(xhr.responseText);

    }
  }
  xhr.send(null);
}

getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  care(data.career);
  edu(data.education);
  skills(data.skills);
})
var main=document.querySelector('.main');
var sub1=document.querySelector('.sub1');
var sub2=document.querySelector('.sub2');
function profile(pro){

var image=document.createElement('img');
    image.src=pro.img;
sub1.appendChild(image);
main.appendChild(sub1);

var name=document.createElement('h2');
    name.textContent=pro.name;
    sub1.appendChild(name);
    main.appendChild(sub1);
    var hr=document.createElement('hr');
    sub1.appendChild(hr);
    var ema=document.createElement('h2');
        ema.textContent=pro.email;
        sub1.appendChild(ema);
        main.appendChild(sub1);
}
function care(car){
  var res=document.createElement('h1');
res.textContent="Resume:";
sub2.appendChild(res);
var res1=document.createElement('h1');
res1.textContent="Carrier Objectives";
sub2.appendChild(res1);
var hr=document.createElement('hr');
sub2.appendChild(hr);
  var inf=document.createElement('h2');
  inf.textContent=car.info;
  sub2.appendChild(inf);
  main.appendChild(sub2);
}
function edu(e){
var h2=document.createElement('h2');
h2.textContent="Education Details";
sub2.appendChild(h2);
var hr=document.createElement('hr');
sub2.append(hr);
var table=document.createElement('table');
let row='  ';
row+="<tr>"+"<th>"+"sno"+"</th>"+"<th>"+"degree"
+"</th>"+"<th>"+"yearofpassing"
+"</th>"+"<th>"+"institute"
+"</th>"+"</td>"
for(i in e)
{
row += "<tr>"+"<td>"+e[i].sno+"</td>"+
"<td>"+e[i].degree+"</td>"
+"<td>"+e[i].yearofpassing+"</td>"
 +"<td>"+e[i].institute+"</td>" +
"</tr>";
}
table.innerHTML=row;
sub2.appendChild(table);
main.appendChild(sub2);
}
function skills(l){
var hh=document.createElement('h2');
hh.textContent="skillsSet";
sub2.append(hh);
var ul=document.createElement('ul');
sub2.append(ul);
for (i in l){
  var li=document.createElement("li");
  li.textContent=l[i].info;
  ul.append(li);

}
}
