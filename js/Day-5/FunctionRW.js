function print(n){
    if(n==0){
        return;
    }
    else{
        print(n-1)
        console.log(n)
    }
}

function print(n){
    if(n==0){
        return;
    }
    else{
        console.log(n)
        print(n-1)
    }
}

print(5)

const sol=function factorial(n){
    if(n==0){
        return 1
    }
    else{
        return n*factorial(n-1)
    }
}
console.log(sol(5))