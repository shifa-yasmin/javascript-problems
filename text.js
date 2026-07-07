// let a=10;
// a=20;
// console.log(a)

// var a=10;
// a=20;
// console.log(a)

// {
//     var a=10;
//     console.log(a)
// }
// console.log(a)

// function main(){
//     const a=10;
//     console.log(a)
// }
// main();
// // console.log(a)

// 
// 

// let a="shifa";
// let b=100;
// let c=a+b;
// console.log(c);
// console.log(typeof c)




// let a=undefined;
// let b=2;
// let c=a/b;
// console.log(c);
// console.log(typeof c)


// let a=undefinde;
// console.log(Number(a));
// console.log(Boolean("9"))


// let a=19;
// if(a<=18){
//     console.log("small")
// }else{
//     console.log("big")
// }

// let age=15;
// let isId=false;
// if(age>=18){
//    if(isId){
//      console.log("eligible")
//    }
//       console.log("not eliglble")
// }else{
//     console.log("age is not")
// }



// let day=1;
// switch(day){
//     case 1 :
//         console.log("sunday");
//         break;
//         case 2:
//             console.log("monday");
//             break;
//             default:
//              console.log("invalide")
// }


// let age=19;
// let res=(age>=18)?"adult":"minor";
// console.log(res)



// let a=10;
// let res=(a%2===0)?"even":"odd";
// console.log(res)



// let i=1;
// while(i<=14){
//      console.log(i);
//      i++;
// }


// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10)


// let students={
//     name:"shifa",
//     age:10,
//     place:"koramkod"
// }
// for(let ch in students){
//     console.log(ch+":"+students[ch])
// }




// let name="shifayasmin";
// let res=name.lastIndexOf("s");
// console.log(res)


// let name="javascript";
// let res=name.charAt(4);
// console.log(res)



// let name="i love java";
// let res=name.replace("java","javascript");
// console.log(res)



// let text = "Java JAVA java";
// let res=text.replaceAll(/java/gi ,"javascript");
// console.log(res)


// let name="5";
// let res=name.padStart(3,"0");
// console.log(res)



// let str = "abc45xyz";

// console.log(str.search(/\d/));   // 3 (first digit: 4)
// console.log(str.search(/[a-z]/)); // 0 (first lowercase letter: a)
// console.log(str.search(/[A-Z]/)); // -1 (no uppercase letters)
// console.log(str.search(/\s/));    // -1 (no spaces)




// let res = "hello word";
// console.log(res.startsWith("hello1"));

// let text = "Hello World";
// console.log(text.match("World"));


// let a=[1,2,3,4,4,6];
// console.log(a.map((n)=>n*2))


// let name=["shifa yasmin"];
// console.log((name.map((n)=>n.length)))



// let a=[1,2,3,4,5,6,6];
// console.log(a.filter((n)=>n%2===0))



// let a=["shifa","safa","shahma"];
// console.log(a.filter((n)=>n.length>4))



let a=[11,22,33,44,23];
console.log(a.reduce((max,x)=>Math.max(max,x)))