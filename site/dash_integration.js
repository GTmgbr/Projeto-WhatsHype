document.addEventListener('DOMContentLoaded', function () {
    const dashContainer = document.getElementById('dash-container');
    const iframe = document.createElement('iframe');
    iframe.src = 'http://127.0.0.1:8051/';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    iframe.style.border = 'none';
    dashContainer.appendChild(iframe);
});