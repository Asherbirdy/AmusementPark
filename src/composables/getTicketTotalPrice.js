export function ticketTotalPrice(ticketPriceArr) {
  const total = ticketPriceArr
    .map(ticket => {
      const fastPassPrice = 100;
      const isfastPassPrice = ticket.fastFoward
        ? ticket.ticketPrice + fastPassPrice
        : ticket.ticketPrice;
      return {
        ticketType: `${ticket.ticketType}${ticket.ticketPrice} ${ticket.tickets} 快速通關:${ticket.fastFoward}`,
        ticketPrice: isfastPassPrice,
        ticketPriceSUM: isfastPassPrice * ticket.tickets,
      };
    })
    .reduce((acc, cur) => acc + cur.ticketPriceSUM, 0);
  return total;
}
