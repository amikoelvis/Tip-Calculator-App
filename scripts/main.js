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

  // Show error if people is 0 or input is empty (initial state with placeholder 0)
  if (people === 0 || isNaN(people)) {
    peopleInput.classList.add('border-red-500');
    peopleError.classList.remove('hidden');
    tipAmountDisplay.textContent = '$0.00';
    totalAmountDisplay.textContent = '$0.00';
    return;
  }

  // Hide error for negative or valid inputs
  peopleInput.classList.remove('border-red-500');
  peopleError.classList.add('hidden');

  // Skip calculations if inputs are invalid (negative people, bill <= 0, or no tip)
  if (people < 0 || bill <= 0 || selectedTip <= 0) {
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
    // Reset all buttons to default state
    tipButtons.forEach(btn => {
      btn.classList.remove('bg-primary-green-400', 'text-neutral-green-900');
      btn.classList.add('bg-neutral-green-900', 'text-neutral-white');
      if (btn.dataset.tip === 'custom') btn.textContent = 'Custom';
    });
    // Set active state for clicked button
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
  peopleInput.classList.add('border-red-500');
  peopleError.classList.remove('hidden');
});

// Initialize error state on page load (due to placeholder 0)
peopleInput.classList.add('border-red-500');
peopleError.classList.remove('hidden');
calculateTip();