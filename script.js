// Select elements
const openDialogBtn = document.getElementById('openDialogBtn');
const dialogBox = document.getElementById('dialogBox');
const closeDialogBtn = document.getElementById('closeDialogBtn');
const confirmBtn = document.getElementById('confirmBtn');

// Function to open dialog box
openDialogBtn.addEventListener('click', () => {
  dialogBox.style.display = 'flex'; // Show dialog box
});

// Function to close dialog box
closeDialogBtn.addEventListener('click', () => {
  dialogBox.style.display = 'none'; // Hide dialog box
});

// Close dialog when clicking outside of content area
dialogBox.addEventListener('click', (event) => {
  if (event.target === dialogBox) {
    dialogBox.style.display = 'none';
  }
});

// Example confirm action
confirmBtn.addEventListener('click', () => {
  alert('Confirmed!');
  dialogBox.style.display = 'none';
});
