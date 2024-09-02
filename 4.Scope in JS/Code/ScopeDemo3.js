var teacher = "Sanket Singh";  // known to JS in global scope
function fun () {  // known to JS in global scope
    var teacher = "Anurag"; // known to JS in fun scope
    content = "JS";  
    console.log("hello", teacher); 
};

function gun () {  // known to JS in global scope
    var student = "Karthik";  // known to JS in gun scope
    console.log("Welcome to the class", student, "Teacher for your class is", teacher); 
    
}

console.log(teacher, content);  // Sanket Singh, No auto global promotion here

fun ();
gun ();

console.log(teacher, content); 
