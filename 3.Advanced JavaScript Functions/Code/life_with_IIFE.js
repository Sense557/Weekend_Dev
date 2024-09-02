function downloadScriptFromIdeoneAndPopulateDatabase () {

    console.log("Old function implementation");
    
}


// more code 8000 lines
downloadScriptFromIdeoneAndPopulateDatabase ();
// Somewhere in between

//intern by mistake made this same function
// To solve this, we can wrap the whole intern's code that can break, into an IIFE
// Docs: https://developer.mozilla.org/en-US/docs/Glossary/IIFE

(function () {
    
    function downloadScriptFromIdeoneAndPopulateDatabase () {
        console.log ("New function created")
    } 
    console.log("Calling Intern Code");
    downloadScriptFromIdeoneAndPopulateDatabase ();
}) ();


