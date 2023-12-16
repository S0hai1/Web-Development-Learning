

function sqr(n)
{
    return n * n;

}

function cube(n)
{
    return n*n*n;
}

function dosme(a,b,fn)
{

    let v1 = fn(a);
    let v2 = fn(b);

    return v1+v2;



}
//function callback (passing the function name in another function as a parameter)
console.log(dosme(2,2,cube));


