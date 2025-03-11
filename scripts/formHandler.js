document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    localStorage.setItem('formData', JSON.stringify(data));
    alert('Formulario enviado y datos almacenados.');
});

// Eliminar el evento relacionado con la descarga de PDFs
// document.getElementById('downloadPDF').addEventListener('click', function () {
//     const event = new Event('click');
//     document.getElementById('generatePDF').dispatchEvent(event);
// });
