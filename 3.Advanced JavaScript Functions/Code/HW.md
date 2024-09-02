1. Why console.log is not part of official EcmaScript docs:

        - console.log is not part of the official ECMAScript specification 
            because it is not a language feature of JavaScript itself 
            but rather a part of the environment in which JavaScript runs, 
            typically the web browser or a JavaScript runtime like Node.js.

        Explanation:
            ECMAScript: 
                This is the standard that defines the core language features of JavaScript, such as syntax, types, operators, objects, and functions. The ECMAScript specification doesn't define how JavaScript interacts with the environment (e.g., the web browser or server).

            Host Environment: 
                The console object, including the console.log method, is provided by the host environment (e.g., web browsers or Node.js). It's part of the Web API in browsers or the Node.js API, not the JavaScript language itself.

            Purpose of console.log: 
                It is primarily used for debugging purposes, allowing developers to print messages to the console. Since it's not a core language feature, it is outside the scope of ECMAScript.

            In summary, console.log is not included in the ECMAScript specification because it's a tool provided by the host environment to aid in development, not a fundamental part of the JavaScript language.