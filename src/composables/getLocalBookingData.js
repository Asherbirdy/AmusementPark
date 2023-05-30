export const localBookingData = function getLocalBookingData() {
  return JSON.parse(localStorage.getItem('bookingData'));
};
