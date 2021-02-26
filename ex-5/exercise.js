//Write a function named helloWorld that:
//Takes 1 argument, a language code (e.g. "es", "de", "en")

//Returns "Hello, World" for the given language, for at least 3 languages.

//It should default to returning English. (defaul means that if no value is given it says it in english)

//Prompt the user to give you a language and call the function passing that language as an argument.

//Remember to print to the browser to cee if it works


function helloWorld(lang){
    var lang = lang.substr(0,2).toLowerCase();

    if(lang === 'de'){
        return 'Hallo, Welt';
    }
    else if(lang === 'en'){
        return 'Hello, world';
    }
    else{
        return 'Hello, World'
    }
}

var lang = prompt('Enter a language betwen \"Deutsch, Italian and English\"');

window.alert(helloWorld(lang)); 