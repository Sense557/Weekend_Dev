function fun () {
    console.log("Called the function fun");
    
    return function cleanUp () {
        console.log("Cleaning up the resources");
        
    }
}

const result = fun ();
result (); // you call the cleanup like this

/**
 * What is stored inside result ? -> It stores the function returned by the fun i.e. cleanUp
 */