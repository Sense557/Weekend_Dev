var teacher = "Sanket Singh";  // known to JS in global scope
function fun () {  // known to JS in global scope
    var teacher = "Anurag"; // known to JS in fun scope
    console.log("hello", teacher); 
};

function gun () {  // known to JS in global scope
    var student = "Karthik";  // known to JS in gun scope
    console.log("Welcome to the class", student, "Teacher for your class is", teacher); 
    
}

fun ();
gun ();
