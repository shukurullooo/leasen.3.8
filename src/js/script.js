{ //= misol1
    let a = 3
    if (a > 0) {
        console.log(a + 1);
    }
    if (a < 0) {
        console.log(a);
    }
}
{ // misol2
    let a = -3
    if (a > 0) {
        console.log(a + 1);
    }
    if (a < 0) {
        console.log(a - 2);
    }
}
{ //misol3
    let a = 0
    if (a > 0) {
        console.log(a + 1);
    }
    if (a < 0) {
        console.log(a - 2);
    }
    if (a === 0) {
        console.log(a + 10);
    }
}
{ // misol4
    let a = 5, b = 3, d = -3
    let musbat = 0
    if (a > 0) {
        musbat++
    }
    if (b > 0) {
        musbat++
    }
    if (d > 0) {
        musbat++
    }
    console.log(musbat);

}
{ //misol5
    let a = 5, b = 3, d = -3
    let musbat = 0
    let manfiy = 0
    if (a > 0) {
        musbat++
    }
    if (b > 0) {
        musbat++
    }
    if (d > 0) {
        musbat++
    }
    if (a < 0) {
        manfiy++
    }
    if (b < 0) {
        manfiy++
    }
    if (d < 0) {
        manfiy++
    }
    console.log(musbat, manfiy);

}
{ // misol6
    let a = 5, b = 3

    if (a > b) {
        console.log(a, ": bu kotta ");

    }
    if (b > a) {
        console.log(b, ": bu kotta ");
    }

}
{ //misol7
    let a = 5, b = 3

    if (a < b) {
        console.log(a, ": bu kickina ");

    }
    if (b < a) {
        console.log(b, ": bu kickina ");
    }

}
{ //misol8
    let a = 2, b = 5

    if (a > b) {
        console.log(a, ": bu kotta ");

    }
    if (b > a) {
        console.log(b, ": bu kotta ");
    }
    if (a < b) {
        console.log(a, ": bu kickina ");

    }
    if (b < a) {
        console.log(b, ": bu kickina ");
    }
}