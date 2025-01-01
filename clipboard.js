export function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      showToast('Copied to clipboard!');
    })
    .catch(() => {
      showToast('Failed to copy!', 'error');
    });
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}