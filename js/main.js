const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '✕' : '☰';
  });
}
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    if (toggle) toggle.textContent = '☰';
  });
});
const form = document.querySelector('#formulario');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const checked = form.querySelectorAll('input[name="servico"]:checked');
    if (!checked.length) {
      alert('Selecione pelo menos uma opção em “Como podemos ajudar?”.');
      return;
    }
    const note = document.querySelector('#form-note');
    note.textContent = 'Mensagem demonstrativa validada! Para receber envios reais, é necessário conectar o formulário a um serviço ou backend.';
    note.classList.add('success');
    form.reset();
  });
}
