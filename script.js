
const items = document.querySelectorAll('#topContainer .top-item');
let currentIndex = 0;

function showItem(index)
 {
  items.forEach((item, i) => {
    item.style.display = i == index ? 'block' : 'none';
  });
  currentIndex = index; 
}


showItem(currentIndex);


document.getElementById('prevBtn').addEventListener('click', () => {
  const newIndex = (currentIndex > 0) ? currentIndex - 1 : currentIndex;
  showItem(newIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  const newIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : currentIndex;
  showItem(newIndex);
});


function desaparece(id) {
document.body.innerHTML = '<h1>No era lo que se pretendía...La pagina era una mierda de todas formas.</h1>';
}

const navLinks = document.querySelectorAll('#sideNav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1); 
    const index = Array.from(items).findIndex(item => item.id === targetId);
    if (index !== -1) showItem(index);
  });
});

