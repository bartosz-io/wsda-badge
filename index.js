import html2canvas from 'html2canvas';

document.addEventListener("DOMContentLoaded", function() {

    const fileInput = document.getElementById('imgInput');
    const dropZone = document.getElementById("dropZone");

    dropZone.addEventListener('dragover', function(event) {
        event.preventDefault();
        dropZone.classList.add('highlight');
    });

    dropZone.addEventListener('dragleave', function(event) {
        dropZone.classList.remove('highlight');
    });

    dropZone.addEventListener('drop', function(event) {
        event.preventDefault();
        dropZone.style.border = "2px dashed #ccc";
        const file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("avatar").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("avatar").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById("dropZone").addEventListener('click', function() {
        fileInput.click();
    });

    document.getElementById("btnCapture").addEventListener("click", function() {
        html2canvas(document.getElementById("capture")).then(function(canvas) {
            var link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = 'div_image.png';
            link.click();
        });
    });
});
