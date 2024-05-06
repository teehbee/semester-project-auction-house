export function calculateCountdown(endsAt) {
  const endsAtDate = new Date(endsAt);
  const now = new Date();
  const timeDifference = endsAtDate - now;
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutesLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
  );
  const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
  return { daysLeft, hoursLeft, minutesLeft, secondsLeft };
}
