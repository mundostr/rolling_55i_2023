const lecturas = [22, 15, 16, 4, 50];

for (item of lecturas) {
    console.log(item);
}

for (let i = 0; i < lecturas.length; i++) {
    console.log(lecturas[i]);
}

lecturas.forEach(function (item) {
    console.log(item);
})