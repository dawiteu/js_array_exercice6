let monTab = ['pomme', 'fraise', 'melon', 'citron']; 

monTab.pop(); 

 console.log( monTab );

monTab.shift( monTab[0] ); 

 console.log( monTab );

monTab.push("tomate") ;

 console.log( monTab );

monTab.unshift("kiwi"); 

 console.log( monTab );

monTab[1] = monTab[1].toUpperCase(); 

 console.log( monTab ); 

monTab = monTab.reverse(); 
//monTab = monTab.sort(); 

 console.log( monTab );


 //ex 2 


 let chiffres = [4, 5, 2, 1, 3]; 

 chiffres = chiffres.sort();
 console.log( chiffres );

 chiffres = chiffres.join("-");
 console.log( chiffres );

 chiffres = chiffres.split("-"); 

/*
 let func = chiffres.forEach(element => {
     element=element-1;
     chiffres[element] = parseInt(chiffres[element]); 
 });
*/

 console.log(chiffres);


 //ex 3: 

 let valentin = []; 

 valentin = ['obj1', 'obj2', 'obj3', 'obj4', 'obj5', 'obj6', 'obj7', 'obj8', 'obj9', 'obj10' ];

 /*
 valentin.forEach(element => {
     console.log( `${element} = l'index de ${valentin.indexOf(element)} ` );
 });
*/

 console.log( valentin.indexOf('obj1') );
 console.log( valentin.indexOf('obj2') );
 console.log( valentin.indexOf('obj3') );
 console.log( valentin.indexOf('obj4') );
 console.log( valentin.indexOf('obj5') );
 console.log( valentin.indexOf('obj6') ); // etc 


let itemtosupp = 2; 
valentin = valentin.filter(function(item){
    return valentin.indexOf(item) != itemtosupp;
});


 console.log(valentin);



