
AOS.init();
new Typed('#typed', {
  strings: ["I'm Abdul Qadir.", "Freelance Web & Graphics Developer.", "Let's build something amazing!"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.onclick = () => document.getElementById(btn.dataset.modal).style.display = 'flex';
});
document.querySelectorAll('.close').forEach(btn => {
  btn.onclick = () => btn.closest('.modal').style.display = 'none';
});
window.onclick = e => {
  if (e.target.classList.contains('modal')) e.target.style.display = 'none';
};
document.querySelectorAll('.filter-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('[data-category]').forEach(card => {
      card.style.display = filter === 'all' || card.dataset.category === filter ? 'block' : 'none';
    });
  });
});
