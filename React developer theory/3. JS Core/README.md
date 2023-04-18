# JS core

JavaScript is an interpreted programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.

1. ### ES6+:

   <p>ECMA means European Computer Manufacturer's Association. ECMAScript is a programming language standard that web browsers follow while interpreting Javascript.</p>

   - [ES6+ Most Essential Features](https://javascript.plainenglish.io/es6-most-essential-features-cbd2a1cf423b)
   - [ES6+ Features](https://info340.github.io/es6.html)
   - [ES6 for Humans](https://github.com/metagrover/ES6-for-humans)

2. ### Asynchronous JS:

   <p>Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests without blocking the main thread.</p>

   - [Asynchronous JavaScript in 15 Minutes: A Comprehensive Explanation](https://javascript.plainenglish.io/asynchronous-javascript-in-15-minutes-all-the-basics-you-need-to-know-including-callbacks-858eee42813b)

3. ### Primitive types, Object:

   - [Data types](https://javascript.info/types)
   - [JavaScript: Primitive Values & Object References](https://medium.com/@junshengpierre/javascript-primitive-values-object-references-361cfc1cbfb0)

4. ### Function context:

   <p>‍Functions in JavaScript run in a specific context, and using the "this" variable we have access to it. All standard functions in the browser run under the Window context. Functions defined under an object or a class (another function) will use the context of the object it was created in. However, we can also change the context of a function at runtime, either before or while executing the function.</p>

   - [This](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

5. ### Scope, Closures:

   <p>A scope in JavaScript defines what variables you have access to. There are two kinds of scope – global scope and local scope. Whenever you create a function within another function, you have created a closure. The inner function is the closure. This closure is usually returned so you can use the outer function’s variables at a later time.</p>

   - [Variable scope, closure](https://javascript.info/closure)
   - [Scope and Closures in JavaScript – Explained with Examples](https://www.freecodecamp.org/news/scope-and-closures-in-javascript/)

6. ### Modules:

   - [Modules, introduction](https://javascript.info/modules-intro)

7. ### Modular JavaScript:

   - [JavaScript Module System](https://javascript.plainenglish.io/javascript-module-system-in-plain-english-2842ef5c76)

8. ### Asynchronous code, Event Loop:

   <p>‍In general JavaScript is running code in a non-blocking way. This means that code which is is taking some time to finish (like accessing an API, reading content from the local file system etc.) is being executed in the background and in parallel the code execution is continued. This behaviour is being described by term asynchronous programming. An Event loop is browser’s mechanism to perform non-blocking operations by providing WebAPIs (setTimeout, setInterval, etc.) which are capable of maintaining callback references in memory.</p>

   - [How JavaScript works: Event loop and the rise of Async programming + 5 ways to better coding with async/await](https://medium.com/sessionstack-blog/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)
   - [Event loop: microtasks and macrotasks](https://javascript.info/event-loop)

9. ### Callbacks, Promises:

   - [Introduction: callbacks](https://javascript.info/callbacks)
   - [Promise](https://javascript.info/promise-basics)

10. ### Regular Expressions:

    <p>‍‍A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are searching for. A regular expression can be a single character, or a more complicated pattern. Regular expressions can be used to perform all types of text search and text replace operations.</p>

    - [Regular expressions](https://javascript.info/regular-expressions)
    - [Regular expressions MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
    - [RegEx builder](https://regex101.com/)

11. ### DOM, Event handling, bubbling & delegation:

    <p>DOM - Document Object Model. Event delegation is a better technique to handle events in our web app. This is possible because JavaScript has an event bubbled up (propagated) in the hierarchy in the DOM tree.</p>

    - [DOM tree](https://javascript.info/dom-nodes)
    - [Introduction to Events](https://javascript.info/events)
    - [JS: Event Bubbling and Delegation](https://frontend.turing.edu/lessons/module-1/js-event-bubbling-and-delegation.html)

12. ### Modern browser APIs:

    <p>Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.</p>

    - [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
    - [6 Browser APIs You Need To Know As A Front End Developer](https://javascript.plainenglish.io/6-browser-apis-you-need-to-know-as-a-front-end-developer-76752633280b)
    - [Angular Basics: 10 Helpful Native Web APIs Every New JavaScript Developer Should Know](https://www.telerik.com/blogs/angular-basics-10-helpful-native-web-apis-every-new-javascript-developer-should-know)

13. ### Cookies, LocalStorage/SessionStorage:

    - [Cookies, document.cookie](https://javascript.info/cookie)
    - [LocalStorage, sessionStorage](https://javascript.info/localstorage)
    - [Difference between Local Storage, Session Storage, and Cookies in JavaScript](https://www.tutorialspoint.com/difference-between-local-storage-session-storage-and-cookies-in-javascript)
    - [IndexedDB](https://javascript.info/indexeddb)

14. ### JSON Web Token:

    <p>‍JSON Web Token (JWT) is an easy way to secure an API. When a user authenticates first on a server, using for instance a standard login form, the server creates a token. This token includes some personal data, such as username or email address. Then, this token is signed server-side (to prevent token integrity), and sent back to the user. Within each next request, user sends the token to establish emitter identity.</p>

    - [Introduction to JSON Web Tokens](https://jwt.io/introduction)
    - [Authentication Simplified With JSON Web Tokens](https://javascript.plainenglish.io/authentication-simplified-with-json-web-tokens-25880e91c0)

