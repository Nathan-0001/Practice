function mutation(arr){
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();

    return str2.split('').every(char => str1.includes(char));
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))