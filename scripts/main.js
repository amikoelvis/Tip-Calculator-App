const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-option');
const customTipButton = document.querySelector('[data-tip="custom"]');
const tipAmountDisplay = document.querySelector('.result:nth-child(1) .text-primary-green-400');
const totalAmountDisplay = document.querySelector('.result:nth-child(2) .text-primary-green-400');
const resetButton = document.querySelector('.reset');
const peopleError = document.getElementById('people-error');

let selectedTip = 0; // Default tip percentage

// Calculate tip and total per person
function calculateTip() {
  const bill = parseFloat(billInput.value) || 0;
  const people = parseInt(peopleInput.value);

  // Show error and red border if people is 0 or empty, and bill > 0 and tip > 0
  if ((people === 0 || isNaN(people)) && bill > 0 && selectedTip > 0) {
    peopleInput.classList.add('border-red-500');
    peopleInput.classList.remove('border-neutral-grey-50');
    peopleInput.style.border = '2px solid rgb(239, 68, 68)'; // Fallback
    peopleError.classList.remove('hidden');
    tipAmountDisplay.textContent = '$0.00';
    totalAmountDisplay.textContent = '$0.00';
    return;
  }

  // Hide error and red border for all other cases
  peopleInput.classList.remove('border-red-500');
  peopleInput.classList.add('border-neutral-grey-50');
  peopleInput.style.border = ''; // Clear fallback
  peopleError.classList.add('hidden');

  // Skip calculations if inputs are invalid (people <= 0, bill <= 0, or no tip)
  if (people <= 0 || bill <= 0 || selectedTip <= 0) {
    tipAmountDisplay.textContent = '$0.00';
    totalAmountDisplay.textContent = '$0.00';
    return;
  }

  const tipAmount = (bill * selectedTip) / 100;
  const tipPerPerson = tipAmount / people;
  const totalPerPerson = (bill + tipAmount) / people;

  tipAmountDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalAmountDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
}

// Tip button click handlers
tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    tipButtons.forEach(btn => {
      btn.classList.remove('bg-primary-green-400', 'text-neutral-green-900');
      btn.classList.add('bg-neutral-green-900', 'text-neutral-white');
      if (btn.dataset.tip === 'custom') btn.textContent = 'Custom';
    });
    button.classList.remove('bg-neutral-green-900', 'text-neutral-white');
    button.classList.add('bg-primary-green-400', 'text-neutral-green-900');

    if (button.dataset.tip === 'custom') {
      const customTip = parseFloat(prompt('Enter custom tip percentage:') || 0);
      selectedTip = customTip >= 0 ? customTip : 0;
      button.textContent = customTip >= 0 ? `${customTip}%` : 'Custom';
    } else {
      selectedTip = parseFloat(button.dataset.tip);
    }
    calculateTip();
  });
});

// Input event listeners
billInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);

// Reset button handler
resetButton.addEventListener('click', () => {
  billInput.value = '';
  peopleInput.value = '';
  selectedTip = 0;
  tipButtons.forEach(btn => {
    btn.classList.remove('bg-primary-green-400', 'text-neutral-green-900');
    btn.classList.add('bg-neutral-green-900', 'text-neutral-white');
    if (btn.dataset.tip === 'custom') btn.textContent = 'Custom';
  });
  tipAmountDisplay.textContent = '$0.00';
  totalAmountDisplay.textContent = '$0.00';
  peopleInput.classList.remove('border-red-500');
  peopleInput.classList.add('border-neutral-grey-50');
  peopleInput.style.border = ''; // Clear fallback
  peopleError.classList.add('hidden');
});