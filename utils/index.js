const utils = {}

utils.formatPrice = price => {
  let cents = '00'
  let priceArr = String(price).split('.')
  let dollars = priceArr[0]
  if (priceArr[1]) {
    cents = (priceArr[1] += cents).slice(0, 2)
  }
  return `$${dollars}.${cents}`
}

module.exports = utils
