export const TicketType = function (ticket) {
  switch (ticket) {
    case 1:
      return '全票';
      break;
    case 2:
      return '學生票';
      break;
    case 3:
      return '兒童票';
      break;
    case 4:
      return '優待票';
      break;
  }
};
