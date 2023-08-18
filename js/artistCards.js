// Specify the date after which the card should be hidden
const targetDate = new Date('2023-08-31'); // Example date: August 31, 2023

// Get the current date
const currentDate = new Date();

// Compare the current date with the target date
if (currentDate > targetDate) {
  // If the target date has passed, add the 'hidden' class to the card
  const card = document.getElementById('details');
  card.classList.add('hidden');
}
