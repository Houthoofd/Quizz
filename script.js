document.addEventListener('DOMContentLoaded',function(e){


  // Permet de valider le formulaire//
  const valider_btn = document.querySelectorAll('button')[0];
  valider_btn.addEventListener('click',(e)=>{
    e.preventDefault();

    // Destruction du formulaire principal et du titre principal //
    const formulaire = document.querySelectorAll('form')[0];
    const main_title = document.querySelectorAll('h1')[0];
    main_title.remove();
    formulaire.remove();


    creerFenetreModal();

    // Permet de vérifier les réponses stockées dans des listes ordonées // 
  })

})






// Permret de créer une fenêtre modal //
function creerFenetreModal(){
  const modal_window = document.createElement('div');
  modal_window.setAttribute('class','modal-window');
  modal_window.innerHTML = `<div class='modal-content'><h2>Est-tu prêt pour ce petit Quizz ?</h2><div class='choice-box'><button onclick='startQuizz()'>Oui</button><button onclick='stopQuizz()'>Non</button></div></div>`
  document.body.appendChild(modal_window);
}

// Permet de changer le contenu de la fenêtre modal sans la détruire //
function changeContenuFenetreModal(){
  // permet de sélectionner la fenêtre modal //
  const modal_window = document.querySelectorAll('.modal-window')[0];
  // supprime le contenu de la fenêtre modal précédante//
  document.querySelectorAll('.modal-content')[0].remove();

  // ajout du nouveaux contenu à la fenêtre modal //
  const modal_title = document.createElement('div');
  modal_title.setAttribute('class','modal-title');
  modal_title.innerHTML = `<h3>Question 1</h3>`;

  const modal_content = document.createElement('div');
  modal_content.setAttribute('class','modal-content');
  modal_content.innerHTML = `<div class='question'><h3>Quel est la balise principal en HTML ?</h3></div><div class='reponse-box'><ol><li onclick='veriferQuestion(this)'>html</li><li onclick='veriferQuestion(this)'>body</li><li onclick='veriferQuestion(this)'>pdf</li></ol></div>`;

  const modal_jauge = document.createElement('div');
  modal_jauge.setAttribute('class','jauge-box');
  modal_jauge.innerHTML = `<div class='block'></div><div class='block'></div><div class='block'></div><div class='block'></div>`;

  const modal_infos_box = document.createElement('div');
  modal_infos_box.setAttribute('class','modal-infos-box');


  const modal_buttons = document.createElement('div');
  modal_buttons.setAttribute('class','modal-buttons');
  modal_buttons.innerHTML = `<button>Précédent</button><button>Prochain</button>`;

  modal_window.appendChild(modal_title);
  modal_window.appendChild(modal_jauge);
  modal_window.appendChild(modal_content);
  modal_window.appendChild(modal_infos_box);
  modal_window.appendChild(modal_buttons);
}

// Permet de commencer le formulaire //
function startQuizz(){
  const start_quizz = document.querySelectorAll('button')[0];
  changeContenuFenetreModal();
}

// Permet de stoper le formulaire //
function stopQuizz(){
  const stop_quizz = document.querySelectorAll('button')[1];
  console.log(stop_quizz);
}

// Permet de vérifier les réponses aux questions //
function veriferQuestion(element){
  const right_answer = "html";
  let response = element;
  const jauge_box = document.querySelectorAll('.jauge-box')[0];
  const block = document.querySelectorAll('.block')[0];
  const button_next = document.querySelectorAll('button')[1];
  const modal_infos_box = document.querySelectorAll('.modal-infos-box')[0];


  button_next.disabled = true;

  if(right_answer==response.innerHTML){
    button_next.disabled = false;
    modal_infos_box.classList.add("right");
    modal_infos_box.innerHTML = "<h3>Bonne réponse</h3>";
    console.log("1");
    if(!response.classList.contains('right-answer')){
      modal_infos_box.classList.remove("wrong");
      modal_infos_box.classList.add("right");
      modal_infos_box.innerHTML = "<h3>Bonne réponse</h3>";
      // supprime d'abord la class du mauvais li afin de le remplacer //
      let li = document.querySelectorAll('li');
      for(let index = 0; index < li.length; index++){
        li[index].classList.remove("wrong-answer");
      }

      // supprime d'abord la class du mauvais block afin de le remplacer //
      const listblocks = document.querySelectorAll('.block');
      for(let index = 0; index < listblocks.length; index++){
        if(listblocks[index].classList.contains("validate")){
          listblocks[index].classList.remove("validate");
          listblocks[index].classList.add("unvalidate");
        }
        if(listblocks[index].classList.contains("unvalidate")){
          listblocks[index].classList.remove("unvalidate");
          listblocks[index].classList.add("validate");
        }
      }
      // remplacement de la classe du bon et li et block par la bonne classe //
      response.classList.add('right-answer');
      block.classList.add('validate');
      modal_infos_box.classList.add("right");
      modal_infos_box.innerHTML = "<h3>Bonne réponse</h3>";
      console.log("3");
    }else{
      response.classList.add("right-answer");
      block.classList.add('validate');
      modal_infos_box.classList.add("right");
      modal_infos_box.innerHTML = "<h3>Bonne réponse</h3>";
      console.log("4");
    }
  }else{
    response.classList.add('wrong-answer');
    block.classList.add('unvalidate');
    modal_infos_box.classList.add("wrong");
    modal_infos_box.innerHTML = "<h3>Mauvaise réponse</h3>";
    const li = document.querySelectorAll('li');
    console.log("5");
    for(let index = 0; index < li.length; index++){
      if(li[index].classList.contains("wrong-answer")){
        li[index].classList.remove("wrong-answer");
        response.classList.add("wrong-answer");
        modal_infos_box.classList.remove("right");
        modal_infos_box.classList.add("wrong");
        modal_infos_box.innerHTML = "<h3>Mauvaise réponse</h3>";
        console.log("6");
      }
      if(li[index].classList.contains("right-answer")){
        li[index].classList.remove("right-answer");
        response.classList.add("wrong-answer");
        modal_infos_box.classList.remove("wrong");
        modal_infos_box.classList.add("right");
        modal_infos_box.innerHTML = "<h3>Bonne réponse</h3>";
        console.log("7");
      }
    }
  }
}

