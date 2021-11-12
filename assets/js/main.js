const lang = document.getElementById('switch-lang');
lang.href = `${document.location.origin}/${lang.textContent.toLowerCase()}` 