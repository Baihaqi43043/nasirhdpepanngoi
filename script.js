document.addEventListener('DOMContentLoaded', () => {

    // Mobile hamburger menu
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            nav.classList.toggle('open');
        });

        // Close menu on nav link click
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                nav.classList.remove('open');
            });
        });
    }

    // Contact form submit
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Terima kasih! Permintaan Anda sudah kami terima. Kami akan menghubungi Anda melalui WhatsApp.');
            form.reset();
        });
    }

});
