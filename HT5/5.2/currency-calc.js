//Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const usd = 26;
let usdToUah;

for (let i = 10; i <= 100; i += 10) {
    usdToUah = i * usd;
    let out = `${i} usd = ${usdToUah} uah`;
    console.log(out);
}

