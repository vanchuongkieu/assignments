class Utils {
  currency(value: number) {
    return value.toLocaleString("it-IT") + " đ";
  }
  salePercent(oldPrice: number, newPrice: number) {
    const calc = (oldPrice - newPrice) / oldPrice;
    const price = Math.round(calc * 100);
    return price + "%";
  }
}

export default new Utils();
