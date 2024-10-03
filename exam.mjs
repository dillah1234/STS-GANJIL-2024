export function kelompokkanBilangan() {
    let result = [];
    for (let i = 1; i <= 20; i++) {
      let kelompokkanBilangan = i % 4 === 0 ? "bisa dibagi 4" : "tidak bisa dibagi 4";
      let overiding = i % 2 === 0 ? `genap ${kelompokkanBilangan}` : `ganjil`;
  
      result.push(`${i} adalah bilangan ${overiding}`);
    }
    return result;
  }
  
  console.log(kelompokkanBilangan());