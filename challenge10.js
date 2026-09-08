function isDiscountApplied(totalPrice) {
  let finalPrice = 0;
  if (totalPrice > 500) {
    finalPrice = totalPrice - (totalPrice * (10 / 100));
    console.log(`totalPrice = ${totalPrice} -> Final price: ${finalPrice} MAD`)
  } else {
    finalPrice = totalPrice;
    console.log(`totalPrice = ${totalPrice} -> Final price: ${finalPrice} MAD`)
  }
}

let totalPrice = 600;
isDiscountApplied(totalPrice)

totalPrice = 300
isDiscountApplied(totalPrice)
