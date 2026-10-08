const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
        ].join('');
        alertPlaceholder.append(wrapper);
    };

    const alertBtn = document.getElementById('liveAlertBtn');
    const contactForm = document.getElementById('contactForm');

    if (alertBtn) {
        alertBtn.addEventListener('click', () => {
        if (contactForm.checkValidity()) {
            appendAlert('¡Mensaje enviado correctamente!', 'success');
            contactForm.reset();
        } else {
            contactForm.reportValidity();
        }
        });
    }