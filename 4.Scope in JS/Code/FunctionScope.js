function fun () { // global scope
    console.log(x); //undefined
    var x = 10;
    console.log(x); //fun scope
}

fun ();