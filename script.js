let backMusic = new Audio("music/background.mp3");
let playGame = new Audio("music/play.wav");
let gameOver = new Audio("music/gameover.wav");
let bonus = new Audio("music/bonus.wav");
let end_boost = new Audio("music/end_boost.wav");
let levelup = new Audio("music/levelup.wav");
backMusic.loop = true;
backMusic.play().catch(() => {
  function resumeAudio() {
    backMusic.play();
    document.removeEventListener("click", resumeAudio);
    document.removeEventListener("keydown", resumeAudio);
  };

  document.addEventListener("click", resumeAudio);
  document.addEventListener("keydown", resumeAudio);
});
const player = document.getElementById("player");
let skinActuel = "images/skins/ninja.png";
let skinActuelReverse = "images/skins/ninja_reverse.png";
let name = "";
let GameOver = false;
let score = 0;
let compteurFruit = 0;
let currentObject = [];
let fruitsActifs = [];
let lastMode = "";
let speed = 2;
let skins_dispo = ["images/skins/ninja.png"];
let largeurJeu = window.innerWidth;
let hauteurJeu = window.innerHeight;
window.addEventListener('resize', () => {
  largeurJeu = window.innerWidth;
});
let Xplayer = (largeurJeu - 70)/2;
let Yplayer = (hauteurJeu - 70)/2;


let keys = {};
document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);

let lastDirection = null;
function deplacer() {
  let newDirection = null;
  if (keys["ArrowUp"]) Yplayer -= 4;
  if (keys["ArrowDown"]) Yplayer += 4;
  if (keys["ArrowLeft"]) {
    Xplayer -= 4;
    player.src = skinActuelReverse;
    newDirection = "left";
  }
  if (keys["ArrowRight"]) {
    Xplayer += 4;
    player.src = skinActuel;
    newDirection = "right";
  }

  if (newDirection && newDirection !== lastDirection) {
    if(newDirection == "left"){
    particles_mouv(1);}
    else{
      particles_mouv(2);
    }
  }
  lastDirection = newDirection;
  
  Xplayer = Math.max(-10, Math.min(Xplayer, largeurJeu - 60));
  Yplayer = Math.max(-20, Math.min(Yplayer, hauteurJeu - 70));

  player.style.left = Xplayer + "px";
  player.style.top = Yplayer + "px";

  requestAnimationFrame(deplacer);
  }
deplacer();

/* == IMAGES DE JEU == */
const fruits = [
      ["images/fruits/tile000.png", 
      "images/fruits/tile001.png",
      "images/fruits/tile005.png",
      "images/fruits/tile011.png",
      "images/fruits/tile027.png",
      "images/fruits/tile007.png",
      "images/fruits/tile014.png",
      "images/fruits/tile016.png",
      "images/fruits/tile052.png",
      "images/fruits/tile047.png"],

      ["images/fruits/tile000.png", 
      "images/fruits/tile001.png",
      "images/fruits/tile005.png",
      "images/fruits/tile011.png",
      "images/fruits/tile027.png",
      "images/fruits/tile007.png",
      "images/fruits/tile014.png",
      "images/fruits/tile016.png",
      "images/fruits/tile052.png",
      "images/fruits/tile047.png"],

      ["images/fruits/tile010.png", 
      "images/fruits/tile001.png",
      "images/fruits/tile005.png",
      "images/fruits/tile054.png",
      "images/fruits/tile140.png",
      "images/fruits/tile006.png",
      "images/fruits/tile093.png",
      "images/fruits/tile016.png",
      "images/fruits/tile102.png",
      "images/fruits/tile036.png"],

      ["images/fruits/tile000.png", 
      "images/fruits/tile001.png",
      "images/fruits/tile005.png",
      "images/fruits/tile011.png",
      "images/fruits/tile027.png",
      "images/fruits/tile007.png",
      "images/fruits/tile014.png",
      "images/fruits/tile016.png",
      "images/fruits/tile052.png",
      "images/fruits/tile047.png"],

      ["images/fruits/tile019.png", 
      "images/fruits/tile002.png",
      "images/fruits/tile003.png",
      "images/fruits/tile018.png",
      "images/fruits/tile054.png",
      "images/fruits/tile007.png",
      "images/fruits/tile094.png",
      "images/fruits/tile016.png",
      "images/fruits/tile092.png",
      "images/fruits/tile036.png"],

      ["images/fruits/tile000.png", 
      "images/fruits/tile001.png",
      "images/fruits/tile005.png",
      "images/fruits/tile011.png",
      "images/fruits/tile027.png",
      "images/fruits/tile007.png",
      "images/fruits/tile014.png",
      "images/fruits/tile016.png",
      "images/fruits/tile052.png",
      "images/fruits/tile047.png"],

      ["images/fruits/tile000.png", 
      "images/fruits/tile001.png",
      "images/fruits/tile005.png",
      "images/fruits/tile011.png",
      "images/fruits/tile027.png",
      "images/fruits/tile007.png",
      "images/fruits/tile014.png",
      "images/fruits/tile016.png",
      "images/fruits/tile052.png",
      "images/fruits/tile047.png"],

      ["images/fruits/tile019.png", 
      "images/fruits/tile001.png",
      "images/fruits/tile005.png",
      "images/fruits/tile011.png",
      "images/fruits/tile051.png",
      "images/fruits/tile007.png",
      "images/fruits/tile093.png",
      "images/fruits/tile016.png",
      "images/fruits/tile102.png",
      "images/fruits/tile036.png"]];
const objets = [
      "images/objets/down.png", 
      "images/objets/shield.png",
      "images/objets/shockwave.png",
      "images/objets/time.png", ];
const backgrounds = [
  "images/back/plage.jpg",
  "images/back/plage_nuit.png",
  "images/back/temple_nuit.png",
  "images/back/castle.png",
  "images/back/galaxy2.png",
  "images/back/radioactiv.png",
  "images/back/grotte.png"];
const skins = [
  ["images/skins/ninja.png","images/skins/ninja_reverse.png", ['#000000','#000000','#000000','#000000','#000000','#1B2330','#1B2330','#414A5C','#FCD9BD','#C48B77'],['#ffffffff','#a8a8a8ff','#767676ff','#b4b4b4ff','#dededeff','#6f6f6fff','#515151ff','#a2a2a2ff','#7f7f7fff','#dededeff']],
  ["images/skins/pirate.png","images/skins/pirate_reverse.png",['#1d1615','#1d1615','#1d1615','#1d1615','#8a1210','#8a1210','#d28843','#421b0e','#a39f97','#d28843'],['#ff0000', '#ff0000', '#ff4500', '#ff4500', '#ff7f50','#ff7f50', '#ffa500', '#ffd700', '#fff1c4', '#ff0000']],
  ["images/skins/pirate_bleu.png","images/skins/pirate_bleu_reverse.png",['#1e1819','#1e1819','#1e1819','#1e1819','#1e1819','#08395b','#08395b','#421f0d','#d68f47','#a39f97'],['#0040ff','#0040ff','#1e90ff','#1e90ff','#00bfff','#00ffff','#00ffff','#a0e7ff','#ffffff','#1e90ff']],
  ["images/skins/ninja_blanc.png","images/skins/ninja_blanc_reverse.png",['#eff0f7','#eff0f7','#eff0f7','#eff0f7','#a4adc7','#a4adc7','#a4adc7','#0b0d10','#f4c98d','#182c76'],['#ffffff','#ffffff','#f0f0f0','#f0f0f0','#dceeff','#c0c0c0','#e6f7ff','#ffffff','#f0f0f0','#dceeff']],
  ["images/skins/chevalier.png","images/skins/chevalier_reverse.png",['#172930','#172930','#172930','#172930','#172930','#172930','#556c73','#bac2c4','#9f0302','#5c0304'],['#ffffff','#fff7b2','#ffd700','#ffd700','#ffb347','#ff7f50','#ff7f50','#ff4500','#ffffff','#ffd700']],
  ["images/skins/astro.png","images/skins/astro_reverse.png",['#efdebf','#efdebf','#efdebf','#efdebf','#efdebf','#efdebf','#e1871c','#243541','#cb6316','#83bed5'],['#ffffff','#d0f0ff','#a0e0ff','#b19cd9','#6a5acd','#c0c0ff','#ffffff','#a0e0ff','#d0f0ff','#b19cd9']],
  ["images/skins/explorateur.png","images/skins/explorateur_reverse.png",['#c3cad3','#c3cad3','#c3cad3','#c3cad3','#c3cad3','#202936','#202936','#407d1d','#194619','#8eda26'],['#00ff00','#00ff00','#7fff00','#adff2f','#ffff00','#ccff33','#00ff00','#adff2f','#ffff00','#7fff00']],
  ["images/skins/ninja_gold.png","images/skins/ninja_gold_reverse.png",['#c17907','#c17907','#c17907','#c17907','#8e4700','#8e4700','#8e4700','#f3c220','#f3c220','#6fc0b2'],['#ffd700','#ffd700','#ff0000','#ff7f00','#ffff00','#00ff00','#0000ff','#4b0082','#8b00ff','#ffffff']]

]

/* == AFFICHAGE == */
function Tremblement(duree, force) {
  const main = document.querySelector('main');
  main.style.position = 'relative';
  const start = Date.now();

  const shake = setInterval(() => {
    const elapsed = Date.now() - start;

    if (elapsed >= duree) {
      clearInterval(shake);
      main.style.transform = `none`;
      return;
    }

    const offsetX = (Math.random() * 2 - 1) * force;
    const offsetY = (Math.random() * 2 - 1) * force;
    main.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }, 16);
}
function showFloatingText(x, y, text = "!") {
  const el = document.createElement("div");
  el.className = "floating-score";
  el.textContent = text;

  el.style.left = x + "px";
  el.style.top = y + "px";

  document.getElementById("jeu").appendChild(el);

  requestAnimationFrame(() => {
    el.style.transform = "translateY(-40px) scale(1.2)";
    el.style.opacity = "0";
  });

  setTimeout(() => el.remove(), 650);
}
let intervalID;
function particles_death(){
  
  const playerRect = player.getBoundingClientRect();
  const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d');
    let systPart = [];

    let canCreate = true;

    setTimeout(() => {
    canCreate = false;
  }, 400);

    intervalID = setInterval(draw, 30);

function draw() {
  colors = skins.find(s => s[0] === skinActuel)[2];
  const centerX = playerRect.left + playerRect.width / 2;
  const centerY = playerRect.top + playerRect.height / 2;
  const carre = 17;

  if (canCreate) {
  let part = {x : centerX - carre / 2 , 
              y : centerY - carre / 2 ,
              vx : Math.floor(Math.random() * 10 - 5),
              vy : Math.floor(Math.random() * 10 - 5),
              ay : 0,
              size : carre
               }
    systPart.push(part);
              }
    
    c.clearRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i<systPart.length; i++){

      part = systPart[i];
      c.fillStyle = colors[Math.floor(Math.random() * 10)];
      c.fillRect(part.x, part.y, part.size, part.size);
      part.x = part.x + part.vx;
      part.y = part.y + part.vy;
      part.vy = part.vy + part.ay;
      part.ay += 0.3;
      part.size = part.size * 0.94;
    }}
}
function particles_mouv(dir){
  
  const playerRect = player.getBoundingClientRect();
  const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d');
    let systPart = [];

    let canCreate = true;

    setTimeout(() => {
    canCreate = false;
  }, 200);

    let intervalID2 = setInterval(draw, 30);

function draw() {
  colors = skins.find(s => s[0] === skinActuel)[3];
  const centerX = playerRect.left + playerRect.width / 2;
  const centerY = playerRect.top + playerRect.height / 2;
  const carre = 10;

  if (canCreate) {

    if (dir == 1){
  let part = {x : centerX - carre / 2 , 
              y : centerY - carre / 2 ,
              vx : Math.floor(Math.random() * 3 + 3),
              vy : Math.floor(Math.random() * 10 - 5),
              size : carre}
    systPart.push(part);
              }
    else{
  let part = {x : centerX - carre / 2 , 
              y : centerY - carre / 2 ,
              vx : -(Math.floor(Math.random() * 3 + 3)),
              vy : Math.floor(Math.random() * 10 - 5),
              size : carre}
    systPart.push(part);
    }}
    
    c.clearRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i<systPart.length; i++){

      part = systPart[i];
      c.fillStyle = colors[Math.floor(Math.random() * 10)];
      c.fillRect(part.x, part.y, part.size, part.size);
      part.x = part.x + part.vx;
      part.y = part.y + part.vy;
      part.size = part.size * 0.8;
    }
  if (systPart.every(p => p.size < 1.5)) {
      clearInterval(intervalID2);
    }
  }
}
function affichage(classement){
  for (let i= 0; i <= 4; i++){
    let li = document.getElementById("score" + (i + 1));
    li.textContent = classement[i];
    let HS = document.getElementById("highScore");
    HS.textContent = "High Score : " + classement[0] ;
  } 
}
const gameAlert = {
  timeout: null,
  show(message, duration) {
    const alert = document.getElementById("game-alert");

    alert.querySelector("#game-alert-text").textContent = message;
    alert.classList.remove("hidden");

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      alert.classList.add("hidden");
    }, duration);
  }
};

/*  == VERIFICATIONS == */
function collision(fruit){
  const fruitRect = fruit.getBoundingClientRect();
  const playerRect = player.getBoundingClientRect();
  let tol = -20;
  let coll = (fruitRect.right > playerRect.left - tol &&
    fruitRect.left < playerRect.right + tol &&
    fruitRect.bottom > playerRect.top - tol &&
    fruitRect.top < playerRect.bottom + tol);
  if (currentObject.includes("shield")){
    coll = false;
  }

    return coll;
}
function froler(fruit) {
  if (fruit.frolement) return false;
  const fruitRect = fruit.getBoundingClientRect();
  const playerRect = player.getBoundingClientRect();

  const dx = (fruitRect.left + fruitRect.width / 2) - (playerRect.left + playerRect.width / 2);
  const dy = (fruitRect.top + fruitRect.height / 2) - (playerRect.top + playerRect.height / 2);
  const distance = Math.sqrt(dx*dx + dy*dy);

  if (distance < 60) {
    fruit.frolement = true;
    return true;
  }
  return false;
}
function attraper(objet){
  const objetRect = objet.getBoundingClientRect();
  const playerRect = player.getBoundingClientRect();
  let tol = -20;
  let coll = (objetRect.right > playerRect.left - tol &&
    objetRect.left < playerRect.right + tol &&
    objetRect.bottom > playerRect.top - tol &&
   objetRect.top < playerRect.bottom + tol);
   let boost = objet.getAttribute("src");

    return {coll , boost};
}
function mission(lvl) {
  if (!skins_dispo.includes(skins[lvl+1][0])) {
    const alertIcon = document.getElementById("game-alert-icon");
    skins_dispo.push(skins[lvl+1][0]);
    alertIcon.src = skins[lvl+1][0];
    gameAlert.show("Vous avez obtenu : ",4000);
  }
}
function dispo(item_clique) {
  let src_item = item_clique.querySelector(".skin_shop").src;
  let box = item_clique.querySelector("#box");
  src_item = src_item.split("/").pop();
  src_item = "images/skins/" + src_item;
  
  if (!box.classList.contains("skin-box_lock")){ /* si l'objet est debloque alors */

    const prevSelected = document.querySelector(".skin-box");
      if (prevSelected) { /* on deselectionne l'ancien skin */
          prevSelected.classList.remove("skin-box");
          prevSelected.classList.add("skin-box_unlock");
      }

    if (skins_dispo.includes(src_item)) { /* et on selectionne le nouveau skin */
      box.classList.remove("skin-box_lock", "skin-box_unlock");
      box.classList.add("skin-box");
      const player = document.querySelector("#player");
      player.src = src_item;
      skinActuel = skins[skins_dispo.indexOf(src_item)][0];
      skinActuelReverse = skins[skins_dispo.indexOf(src_item)][1];
    }
  }
}

/* == LOGIQUE JEU == */
function fall(fruit) {
  fruit.vitesse = speed;
  function animate() {
    let currentTop = fruit.getBoundingClientRect().top;
    fruit.style.top = currentTop + fruit.vitesse + "px";

    if (currentTop > hauteurJeu) {
      fruit.remove();
      fruitsActifs = fruitsActifs.filter(f => f !== fruit);
      return;
    }
    if (collision(fruit)) {
      GameOver = true;
      fruit.remove();
      particles_death();
      Tremblement(400, 10);
      backMusic.pause();
      gameOver.play();
      fruitsActifs = fruitsActifs.filter(f => f !== fruit);
      return;
      
    }
    else if (froler(fruit) && !collision(fruit)){
      const r = fruit.getBoundingClientRect();
      showFloatingText(r.left + r.width/2, r.top);
      if (currentObject.includes("shield")){
        score += 1;
      }
      else {score += 10;}
      
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}
async function fallObjet(objet,speed) {
  let t = 0;
  let startLeft = parseFloat(getComputedStyle(objet).left);
    
  async function animate() {
    let currentTop = objet.getBoundingClientRect().top;
    objet.style.top = currentTop + speed + "px";
    t += 0.05;
    let amplitude = 30;
    let offsetX = Math.sin(t) * amplitude;
    objet.style.left = startLeft + offsetX + "px";

    if (currentTop > hauteurJeu) {
      objet.remove();
      return;
    }
    const info = attraper(objet);
    if (info.coll) {
      objet.remove();
      bonus.play();
      Tremblement(400, 5);
      if (info.boost == "images/objets/down.png"){
        player.style.width = "40px";
        await sleep(5000);
        Tremblement(400, 5);
        player.style.width = "70px";
        end_boost.play();
      }
      else if (info.boost == "images/objets/shield.png"){
        currentObject.push("shield");
        const icon = document.createElement("img");
        icon.src = "images/objets/shield.png";
        icon.id = "icon";
        icon.style.position = "absolute";
        icon.style.width = "30px";
        document.body.appendChild(icon);
        function updateIconPosition() {
          const rect = player.getBoundingClientRect();
          icon.style.left = rect.right + "px";
          icon.style.top = rect.top + "px";
          requestAnimationFrame(updateIconPosition);}
        updateIconPosition();
        await sleep(5000);
        icon.remove();
        currentObject.splice(currentObject.indexOf("shield"), 1);
        end_boost.play();
      }
      else if (info.boost == "images/objets/shockwave.png"){
        currentObject.push("shockwave");
        fruitsActifs.forEach(fruit => fruit.remove());
        fruitsActifs = [];
      }
      else if (info.boost == "images/objets/time.png"){
        currentObject.push("time");
        await ralentirFruits();
        Tremblement(400, 5);
        currentObject.splice(currentObject.indexOf("time"), 1);
        end_boost.play();
      }
      return;
      
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}
async function ralentirFruits() {
  fruitsActifs.forEach(f => f.vitesse = 1);
  speed = 1;
  await sleep(5000);
  fruitsActifs.forEach(f => f.vitesse = 2);
  speed = 2;
}
function creerFruit(mode,level) {
  compteurFruit++;
  let n = Math.floor(Math.random() * 10);
  let randint = Math.floor(Math.random() * window.innerWidth)
  let img = document.createElement("img");
  img.src = fruits[level][n];
  img.id = "fruit";
  img.style.top = "-30px";
  img.style.left = randint + "px";
  document.body.appendChild(img);

if (mode == "objets" && compteurFruit % 50 == 0){
  let m = Math.floor(Math.random() * 4);
  let randint2 = Math.floor(Math.random() * (window.innerWidth - 80) + 40)
  let obj = document.createElement("img");
  obj.src = objets[m];
  obj.id = "objet";
  obj.style.top = "-30px";
  obj.style.left = randint2 + "px";
  obj.classList.add("trail");
  const objet_couleur = {
    "images/objets/down.png": "drop-shadow(0 -20px 10px rgba(42, 220, 14, 1))",
    "images/objets/shield.png": "drop-shadow(0 -20px 10px rgb(218, 190, 11))",
    "images/objets/shockwave.png": "drop-shadow(0 -20px 10px rgb(11, 218, 218))",
    "images/objets/time.png": "drop-shadow(0 -20px 10px rgba(204, 0, 255, 1))"
  };
  obj.style.filter = objet_couleur[obj.getAttribute("src")] || "";

  document.body.appendChild(obj);
  fallObjet(obj,3);
}
fruitsActifs.push(img);
fall(img);
}   

/* == MENUS ET FONCTIONS EXTERNES == */
function Submit (){
  playGame.play();
  name = document.getElementById("name").value;
  document.getElementById("selectName").style.display = "none";
  document.getElementById("welcome").textContent = "Bienvenue " + name + " !";
}
function order(classement,score_final){
  if (classement.length < 5){
    classement.push(score);
  }
  else {
    if (score_final > classement[4]){
      classement[4] = score;
    }
  }
  classement.sort(function(a,b){
    return b - a;
  })
}
function hideAllScreens() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("gamemode").style.display = "none";
  document.getElementById("magasin").style.display = "none";
  document.getElementById("jeu").style.display = "none";
  document.getElementById("lose").style.display = "none";
}
function Go_play(){
  playGame.play();
  hideAllScreens();
  document.getElementById("gamemode").style.display = "flex";
}
function Go_shop(){
  hideAllScreens();
  const shop = document.getElementById("magasin");
  shop.style.display = "flex";
  /*Actualisation des skins debloques*/
  const items = document.querySelectorAll("#magasin .item");
  requestAnimationFrame(() => {
    shop.classList.add("open");
  });

    items.forEach(item => {
        const box = item.querySelector(".skin-box_lock");

        if (box) {
            let src_item = box.querySelector(".skin_shop").src;
            src_item = src_item.split("/").pop();
            src_item = "images/skins/" + src_item;

            if (skins_dispo.includes(src_item)) {
                box.classList.remove("skin-box_lock");
                box.classList.add("skin-box_unlock");

                const lockImg = box.querySelector(".lock");
                if (lockImg) {
                    lockImg.classList.remove("lock");
                    lockImg.classList.add("unlock");
                }
            }
        }
    });
}
function Go_menu(){
  const canvas = document.querySelector('canvas');
  hideAllScreens();
  document.getElementById("menu").style.display = "flex";
  canvas.style.display = 'none';
  canvas.style.pointerEvents = 'none';
  document.body.style.backgroundImage = 'url("images/back/temple.png")';
}
function Quit_shop(){
  const shop = document.getElementById("magasin");

  shop.classList.remove("open");

  setTimeout(() => {
    hideAllScreens();
    document.getElementById("menu").style.display = "flex";
  }, 250);
  
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function rejouer(){
  if (lastMode=="Classique"){
    Classique();
  }
  else{
    Objets();
  }

}

/* == MODES DE JEU == */
let leaderboard = [];
async function Classique(){
  score = 0;
  lastMode = "Classique";
  GameOver = false;
  document.body.style.backgroundImage = 'url("images/back/temple.png")';
  Xplayer = (window.innerWidth - 70)/2;
  Yplayer = (window.innerHeight - 70)/2;
  player.style.left = Xplayer + "px";
  player.style.top = Yplayer + "px";
  const scoreElement = document.getElementById("score");
  const losescoreElement = document.getElementById("losescore");
  const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d');
  canvas.width = largeurJeu;
  canvas.height = hauteurJeu;
  if (intervalID) {clearInterval(intervalID);}
  c.clearRect(0,0,largeurJeu,hauteurJeu);
  playGame.play();
  backMusic.play();
  document.getElementById("gamemode").style.display = "none";
  document.getElementById("jeu").style.display = "block";
  document.getElementById("lose").style.display = "none";

  await sleep(300);
while (!GameOver) {
  await sleep(150000/largeurJeu);
  creerFruit("classique",0);
  score += 1;
  scoreElement.textContent = "Score :  " + score;
}
order(leaderboard,score);
affichage(leaderboard);
document.getElementById("jeu").style.display = "none";
document.getElementById("lose").style.display = "flex";
losescoreElement.textContent = "Votre score est  " + score;
}

async function Objets(){
  score = 0;
  lastMode = "Objets";
  let lastLevel = -1;
  let level = -1;
  let delay = 175000/largeurJeu;
  GameOver = false;
  compteurFruit = 0;
  currentObject = [];
  document.body.style.backgroundImage = 'url("images/back/temple.png")';
  Xplayer = (window.innerWidth - 70)/2;
  Yplayer = (window.innerHeight - 70)/2;
  player.style.left = Xplayer + "px";
  player.style.top = Yplayer + "px";
  player.style.width = "70px";
  const scoreElement = document.getElementById("score");
  const losescoreElement = document.getElementById("losescore");
  const canvas = document.querySelector('canvas');
  canvas.style.display = 'block';
  canvas.style.pointerEvents = 'auto';
  const c = canvas.getContext('2d');
  canvas.width = largeurJeu;
  canvas.height = hauteurJeu;
  if (intervalID) {clearInterval(intervalID);}
  c.clearRect(0,0,largeurJeu,hauteurJeu);
  playGame.play();
  backMusic.play();
  document.getElementById("gamemode").style.display = "none";
  document.getElementById("jeu").style.display = "block";
  document.getElementById("lose").style.display = "none";

  await sleep(300);
while (!GameOver) {
  if (currentObject.includes("time")){
    await sleep(delay*2); score += 1;}
  else {await sleep(delay);}
  
  if (currentObject.includes("shockwave")){ score+=50; await sleep(2000);currentObject.splice(currentObject.indexOf("shockwave"), 1);;}
  creerFruit("objets",level+1);
  score += 1;
  scoreElement.textContent = "Score :  " + score;
  
  if (score > 3800) level = 6;
  else if (score > 3000) level = 5;
  else if (score > 2271) level = 4;
  else if (score > 1605) level = 3;
  else if (score > 1005) level = 2;
  else if (score > 634) level = 1;
  else if (score > 300) level = 0;

  if (level > lastLevel) {
    mission(level);
    if (level < 6){
        delay = delay * 0.9;}
        lastLevel = level;
        Tremblement(200, 5);
        levelup.play();
        document.body.style.backgroundImage = `url("${backgrounds[level]}")`;
  }
}
order(leaderboard,score);
affichage(leaderboard);
document.getElementById("jeu").style.display = "none";
document.getElementById("lose").style.display = "flex";
losescoreElement.textContent = "Votre score est  " + score;
}
