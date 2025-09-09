1) What is the difference between var, let, and const?
Answer :
* var : It is global scope variable declarer if it is declared outside a function. Any variable can be redeclared and reassigned by var and is initialized with undefined.

* const : It is a block scope variable declarer or the variable declared by const can't be accessed before initialization. Any variable can't be redeclared and can't be reassigned by const.

* let : It is also a block scope variable declarer like const. That's why the variable can't be accessed before initialization. Any variable can't be redeclared but can be reassigned by let.

2) What is the difference between map(), forEach(), and filter()?
Answer :
* map() : Map is a type of loop which makes changes in an array's elements by calling a function and returns a new array with the changed elements.

* forEach() : It is also a loop as like map which also makes changes in the elements of any array. But the difference is forEach doesn't return anything.

* filter() : It is a type of loop which filters (selects or eliminates) the elements of array by imposing any condition on them. and returns an array with the filtered elements.

3) What are arrow functions in ES6?
Answer :
As we know, the function is a process of doing functional task by creating a scope around it. But the arrow function is different in case of ES6. Arrow function is shorter then the regular function. In arrow functions, it is not necessary to use "function" word before naming it. we can just name it and set a parameter and use '=>' this arrow sign and conduct the tasks. If the function is inline or single task conducting then it doesn't need to be returned and no need of { }. As example,

* Regular function :
const function Something(Parameter){
        <!-- operations -->
}

* Arrow function :
const Something => (the single operation)
multi task conducting :
const Something => {
        <!-- multi operations -->
     return
}

4) How does destructuring assignment work in ES6?
Answer :
Destruction of assignment is mainly used in arrays and objects to access their elements or key's values putting them into separate individual variables.

5) Explain template literals in ES6. How are they different from string concatenation?
Answer :
When we feel necessity of using more symbols in one set quotation (""), then we use backticks, it is called template literals. Because in normal strings we can't create any whitespaces between two other words. then we have to use + to joining a white space between them. like "'word' + ' ' + 'word'" .
But this problem is solved by template literals. we can easily create spaces or adding different types of symbol inside the backtick. like `<h1> I am Fardin </h1>` 