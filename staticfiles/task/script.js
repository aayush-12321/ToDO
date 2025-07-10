// deleteModal
document.addEventListener('show.bs.modal', function (event) {
  const button   = event.relatedTarget;            // Button that opened the modal
  const taskId   = button.getAttribute('data-task-id');
  const taskTitle= button.getAttribute('data-task-title');

  // Update form action
  const form = document.getElementById('deleteForm');
  form.action = `/task-delete/${taskId}/`;         // or use {% url 'task-delete' 0 %}.replace('0', taskId)

  // Update modal text
  document.getElementById('deleteModalBody').innerHTML =
    `Are you sure you want to delete <strong>${taskTitle}</strong>?`;
});

// Function to show alert messages
function showAlert(message = '', type = 'success') {
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${message}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `

}