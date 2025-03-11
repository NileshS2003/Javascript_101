// console.log('object')

//variables

let age=21
const height=6.3 //must declare value and once assigned cannot be changed.

//Data Types

/***Data Types****/
/*Primitive*/
//String
// const name="nilesh"
//Integer
// const num=1

/*Boolean*/
// const flag=false
// console.log(flag) //----false

///*Undefined : when value is not assigned value can also be assigned*///
// const res
// console.log(res)
// res=undefined   //--undefined

///*Null : when value is not known or is empty null is assigned  **////
// const data=null
// console.log(data) //----null

/*BigInt*/
/*Symbol*/

/***Non-primitive** */
/* 
---object
---array
*/


/*******Operators****** */
//Assignment operator
//Arithmetic Operator
//Logical Operators
//Comparison Operators
//Ternary Operator



/**********Type Conversion ******/
/** Implicit **/
// let str="nil"
// let int=3
// console.log(str-int)    //------NaN
// console.log(str+int)    //------nil3
// console.log(str*int)    //------NaN
// console.log(str/int)    //------NaN
// console.log(int/str)    //------NaN

// str='6'
// console.log('new values')
// console.log(str-int)    //------3
// console.log(str+int)    //------63
// console.log(str*int)    //------18
// console.log(str/int)    //------2
// console.log(int/str)    //------0.5

// let flag=true;
// const name="nil"
// console.log(flag+name)  //--truenil
// console.log(flag+1)  ///-----2
// flag=false
// console.log(flag*1)  //--0
// console.log("nilesh"-"sangle") //---NaN

//true as 1, false as 0 for arithmetic operation with integers. Also null as 0

// console.log(null + 'nil')   ///------nullnil
// console.log(null - 'nil')   ///-----NaN
// console.log(5+undefined)    //----NaN
// console.log(5-undefined)    //----NaN

/** Explicit **/
// console.log(parseInt("3.47"))   //---3.4
// console.log(parseFloat("3.47")) //---3.47
// console.log((3.47).toString(),(true).toString())    //---3.47 true as a string
// console.log(Boolean(10),Boolean(-1),Boolean(0)) //--- true true false   //null,undefined,0,NaN,""-empty string are the only value that parse to false when converted into boolean.



/*************Equality ******/
//== -> allows coercion
//=== -> DOes not allow coercion
// console.log(10=='10') //---true //converts string 10 into int 10 while comparison
// console.log('10'===10) //---false 
// console.log(''==0)  //--true //should use === operator insted of ==
// console.log(undefined==null)    //true // same reason as above


/***********COnditional Statements & Loops ********/
// const array=[1,2,3,4,5]
// for(const num of array){
//     console.log("Number : " + num)
// }

/**************Functions************/

//arrow functions and normal functions

