const obj = {
    func1: function f(x) {
        
        return {
            func2: function g() {
                console.log("G is called");
                
            }
        }
    }
}

obj.func1(10).func2 ();
