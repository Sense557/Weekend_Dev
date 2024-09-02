function fun () {
    console.log(x); // Reference error // TDZ for x
    let x = 10;
    console.log(x);
}

if (true) {
    console.log(y); //Reference error // TDZ for y
    let y = 10;
    console.log(y);
}

fun ();