export function getTicketType(ticket) {
  switch (ticket) {
    case 1:
      console.log('是全票');
      return '全票';
      break;
    case 2:
      console.log('是學生票');
      return '全票2';
      break;
    case 3:
      console.log('是兒童票');
      return '全票3';
      break;
    case 4:
      console.log('是優惠票');
      return '全票4';
      break;
  }
}
