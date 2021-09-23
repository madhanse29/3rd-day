var person = [{
    name : 'abishek',
    age : 22,
    year : 2012 
},
{
    name : 'kumar',
    age : 32,
    year : 2010
}
];

for(i=0;i<person.length;i++){
    console.log(person[i].name+'-name');
}

for ( var key in person){
    console.log(person[key].age+" - age")
}

for (const year of person) {
    console.log(year.year+'-year')
    
}
 person.forEach(age => {
     console.log(age.age+'-age');
     
 });
