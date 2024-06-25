document.getElementById('ctaButton').addEventListener('click', function() {
    alert('Obrigado pelo seu interesse! Em breve você saberá mais.');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
});

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.getElementById('siteTitle').classList.toggle('dark-mode');
    document.getElementById('siteSlogan').classList.toggle('dark-mode');
    this.classList.toggle('dark-mode');
    document.querySelectorAll('button').forEach(button => {
        button.classList.toggle('dark-mode');
    });
});
