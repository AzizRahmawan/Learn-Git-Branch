// Basic Module
const addTwo = (a, b) => {
    return a+b;
}
const subtractTwo = (a, b) => {
    return a-b;
}
const multiplyTwo = (a, b) => {
    return a*b;
}
const divideTwo = (a, b) => {
    return a/b;
}

// Example of Class
class MathClass {
    addTwo(a,b){
        return a+b;
    }
    subtractTwo(a,b){
        return a-b;
    }
    multiplyTwo(a,b){
        return a*b;
    }
    divideTwo(a,b){
        return a/b;
    }
}

// Example of Object Literals
const math = {
    addTwo(a,b){
        return a+b;
    },
    subtractTwo(a,b){
        return a-b;
    },
    multiplyTwo(a,b){
        return a*b;
    },
    divideTwo(a,b){
        return a/b;
    }
}

export {MathClass, math};