When: onLoad
Script:
function onLoad() {
 var approveButton = document.getElementById('approve');
 var rejectButton = document.getElementById('reject');
 if (approveButton) {
approveButton.style.background='green';
approveButton.style.color='white';
 }
 if (rejectButton) {
rejectButton.style.background='red';
rejectButton.style.color='white';
 }
}