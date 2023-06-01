export const sessionBookingData = function getLocalBookingData() {
  return JSON.parse(sessionStorage.getItem('bookingData'));
};
