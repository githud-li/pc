function SellerCentral (e) {
  if (this.info.length === 0) {
    this.info.push(e.target.innerText)
  } else {
    this.info.splice(0, 1)
    this.info.push(e.target.innerText)
  }
}

export default SellerCentral()
