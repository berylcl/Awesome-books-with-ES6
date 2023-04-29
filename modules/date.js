import { DateTime } from './Luxon.js';

const timenow = () => {
  const today = DateTime.now();
  const currentTime = {
    day: today.day,
    month: today.month,
    year: today.year,
    hour: today.hour,
    min: today.minute,
    mid: 'AM',
  };

  if (currentTime.hour > 12) {
    currentTime.hour %= 12;
    currentTime.mid = 'PM';
  }

  return currentTime;
};

export default timenow();
