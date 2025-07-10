// delete modal script
document.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const taskTitle = button.getAttribute('data-task-title');
    const deleteUrl = button.getAttribute('data-delete-url');
    // event.preventDefault();
    const form = document.getElementById('deleteForm');
    form.action = deleteUrl;

    document.getElementById('deleteModalBody').innerHTML =
        `Are you sure you want to delete <strong>${taskTitle}</strong>?`;
});

// Function to show toast messages
document.addEventListener('DOMContentLoaded', function() {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'));
    var toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl, { delay: 5000 }).show();
    });
});


// ! Function to show alert messages
// function showAlert(message = '', type = 'success') {
//     const alertContainer = document.getElementById('alertContainer');
//     alertContainer.innerHTML = `
//     <div class="alert alert-${type} alert-dismissible fade show" role="alert">
//         <strong>${message}</strong>
//         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//     </div>
//     `
