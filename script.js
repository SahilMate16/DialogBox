// Select elements
const openDialogBtn = document.getElementById('openDialogBtn');
const dialogBox = document.getElementById('dialogBox');
const closeDialogBtn = document.getElementById('closeDialogBtn');
const confirmBtn = document.getElementById('confirmBtn');

// Function to open dialog box
openDialogBtn.addEventListener('click', () => {
  dialogBox.style.display = 'flex';       // Show overlay
  setTimeout(() => dialogBox.classList.add('active'), 10); // Trigger animation
});

// Function to close dialog box
const closeDialog = () => {
  dialogBox.classList.remove('active');   // Reverse animation
  setTimeout(() => dialogBox.style.display = 'none', 300); // Hide after animation ends
};

closeDialogBtn.addEventListener('click', closeDialog);

// Close dialog when clicking outside of content area
dialogBox.addEventListener('click', (event) => {
  if (event.target === dialogBox) closeDialog();
});

// Example confirm action
confirmBtn.addEventListener('click', () => {
  alert('Confirmed!');
  closeDialog();
});
