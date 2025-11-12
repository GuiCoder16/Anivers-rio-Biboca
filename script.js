// =====================
// CONFIGURAÇÕES INICIAIS
// =====================
const nome = "Cabeçuda"; // 💖 Coloque o nome da pessoa aqui
const mensagem = document.getElementById("mensagem");
mensagem.textContent = `🎉 Feliz Aniversário, ${nome}! 🎂`;

const musica = document.getElementById("musica");
const botao = document.getElementById("playBtn");

// =====================
// TOCAR MÚSICA + CONFETTI
// =====================
botao.addEventListener("click", () => {
  musica.play();
  botao.style.display = "none";
  iniciarConfete();
});

// =====================
// CONFETTI
// =====================
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = document.documentElement.scrollHeight;

let confetes = [];

function Confete(x, y, r, c, v) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.c = c;
  this.v = v;
}

function iniciarConfete() {
  for (let i = 0; i < 150; i++) {
    confetes.push(
      new Confete(
        Math.random() * canvas.width,
        Math.random() * canvas.height - canvas.height,
        Math.random() * 10 + 5,
        `hsl(${Math.random() * 360}, 100%, 70%)`,
        Math.random() * 3 + 2
      )
    );
  }
  animar();
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < confetes.length; i++) {
    let p = confetes[i];
    p.y += p.v;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.c;
    ctx.fill();
  }
  requestAnimationFrame(animar);
}

// =====================
// ANIMAÇÃO DE SCROLL
// =====================
const textos = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  const gatilho = window.innerHeight * 0.8;

  textos.forEach((t) => {
    const topo = t.getBoundingClientRect().top;
    if (topo < gatilho) {
      t.classList.add("aparecer");
    }
  });
});
