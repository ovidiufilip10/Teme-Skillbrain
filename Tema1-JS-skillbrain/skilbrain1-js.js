
//Exercitiul 1
const div10 = (number) => {
    if(number % 10 === 0)
      return true;
      else return false; 
}
console.log (div10(100));
//Exercitiul 2

const tellFortune = (n,z,y,x) => {
    console.log (`Vei fi un ${x} în ${y}, căsătorit cu ${z} și vei avea ${n} copii.`)
}
tellFortune(2,"Andreea","Norvegia","Programator");

//Exercitiul 3

const dayofweek = (x) =>{
    let day;
    switch (x) {
    case 1:
    	 day = "Duminica";
        break;
    case 2:
        day = "Luni";
        break;
     case 3:
        day = "Marti";
        break;
    case 4:
        day = "Miercuri";
        break;
    case 5:
        day = "Joi";
        break;
    case 6:
        day = "Vineri";
        break;
    case 7:
        day = "Sambata"; 
    }
    return day;
    }
 const x=3;
 console.log(dayofweek(x));

 