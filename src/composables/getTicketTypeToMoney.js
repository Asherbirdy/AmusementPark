export const typeToticketPrice = function (ticketType) {
  switch (ticketType) {
    case '全票':
      return 500;
      break;
    case '學生票':
      return 400;
      break;
    case '兒童票':
      return 250;
      break;
    case '優待票':
      return 200;
      break;
  }
};
