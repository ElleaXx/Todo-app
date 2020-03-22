
    // деструктуризация
// const arr = {
//   pipa: '1234',
//   pupa: 'hldgksndg',
//   lipa: 32321
// }

// const {pipa} = arr;
// alert(pipa)



// деструктуризация массивов
// const arr = [1,2,3,4,5,6,7]

// const [...apppp] = arr;
// alert(apppp)

// прототипы


function Animals (name,voise) {
    this.name = name;
    this.voise = voise;
  }
  
  Animals.prototype.say = function() {
    console.log(this.name, this.voise)
  }
  
  const dog = new Animals('Dog', 'Gaf-Gaf')
  const cat = new Animals('Cat', 'Meow-Meow')
  
  dog.say()