export function transTickSessionToDB(sessionArr) {
  const ticketTypeToNum = function (ticketTypeNum) {
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

  const dbForm = sessionArr.map(ticketData => {
    return {
      END_DATE: null,
      FAST_PASS: ticketData.fastFoward ? 0 : 1,
      ORDER_ID: ticketData.ticketOrderID ? ticketData.ticketOrderID : null,
      START_DATE: ticketData.ticketData,
      TICK_DATE: ticketData.ticketData,
      TICK_ID: ticketTypeToNum(ticketData.ticketType),
      TICK_NUM: ticketData.tickets,
      TICK_ORDER_ID: ticketData.ticketID ? ticketData.ticketID : null,
    };
  });
  return dbForm;
}
