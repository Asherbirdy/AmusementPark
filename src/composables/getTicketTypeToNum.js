export const ticketTypeToNum = function (ticketTypeNum) {
  switch (ticketTypeNum) {
    case '全票':
      return 1;
      break;
    case '學生票':
      return 2;
      break;
    case '兒童票':
      return 3;
      break;
    case '優惠票':
      return 4;
      break;
  }
};
