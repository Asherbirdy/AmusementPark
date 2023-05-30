export const ticketPrice = function (ticketTypeNum) {
  switch (ticketTypeNum) {
    case 1:
      return 500;
      break;
    case 2:
      return 400;
      break;
    case 3:
      return 250;
      break;
    case 4:
      return 200;
      break;
  }
};
