//John Paul Cajes Curib

//CURIB Game Development 

let startbtn = document.querySelector('#start-btn');
let info = document.querySelector('#info-container');
let exitbtn = document.querySelector('#exit');
let gamebox = document.querySelector('#game-box');
let continuebtn = document.querySelector('#continue');
let question = document.querySelector('.question');
let nextbtn = document.querySelector('#next')
let number = document.querySelector('#number');
let gamelength = document.querySelector('.gamelength');
let result = document.querySelector('.result-box');
let quit = document.querySelector('.quit');
let restart = document.querySelector('.restart');
let button = document.querySelectorAll('button');
let over = document.querySelector('.over');
let scores = document.querySelector('.score');
let time = document.querySelector('.time')
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');
let count = 0;
let sec = 30;
let ms = 0;
let timer = "";
let score = 0;


  
//kung pisliton ang start na button
startbtn.onclick = () => {
    info.classList.add('show');
}

//kung pisliton ang exit nga button
exitbtn.onclick = () => {
    info.classList.remove('show');
}

//kung pisliton ang continue na button
continuebtn.onclick = () => {
    
    info.classList.remove('show');
    gamebox.classList.add('show');
    gameBox(0);
    
   //kung pisliton ang choice A
  a.onclick = () => {
      if (confirm("Are you sure " + a.textContent + " is your final answer?") ){
      a.classList.add('check');
      b.classList.add('pointer');
      c.classList.add('pointer');
      d.classList.add('pointer');
      
    
      if (game[0].ans == a.textContent) {   
       score += 2;
       a.classList.add('pointer');
          
      }else {
      score += 0;
          a.classList.add('pointer');
      }
      if (game[1].ans == a.textContent) {   
       score += 2;
       a.classList.add('pointer');
          
      }else {
      score += 0;
          a.classList.add('pointer');
      }
      if (game[2].ans == a.textContent) {   
       score += 2;
       a.classList.add('pointer');
          
      }else {
      score += 0;
          a.classList.add('pointer');
      }
      if (game[3].ans == a.textContent) {   
       score += 2;
       a.classList.add('pointer');
          
      }else {
      score += 0;
          a.classList.add('pointer');
      }
       if (game[4].ans == a.textContent) {   
       score += 2;
       a.classList.add('pointer');
          
      }else {
      score += 0;
          a.classList.add('pointer');
      }   
      if (game[5].ans == a.textContent) {   
       score += 2;
       a.classList.add('pointer');
          
      }else {
      score += 0;
          a.classList.add('pointer');
      }
      }
   
  }        
  //kung pisliton ang choice B
 b.onclick = () => {
      if (confirm("Are you sure " + b.textContent + " is your final answer?") ){
      b.classList.add('check');
      a.classList.add('pointer');
      c.classList.add('pointer');
      d.classList.add('pointer');
      
    
      if (game[0].ans == b.textContent) {   
       score += 2;
       b.classList.add('pointer');
          
      }else {
      score += 0;
          b.classList.add('pointer');
      }
      if (game[1].ans == b.textContent) {   
       score += 2;
       b.classList.add('pointer');
          
      }else {
      score += 0;
          b.classList.add('pointer');
      }
      if (game[2].ans == b.textContent) {   
       score += 2;
       b.classList.add('pointer');
          
      }else {
      score += 0;
          b.classList.add('pointer');
      }
      if (game[3].ans == b.textContent) {   
       score += 2;
       b.classList.add('pointer');
          
      }else {
      score += 0;
          b.classList.add('pointer');
      }
       if (game[4].ans == b.textContent) {   
       score += 2;
       b.classList.add('pointer');
          
      }else {
      score += 0;
          b.classList.add('pointer');
      }   
      if (game[5].ans == b.textContent) {   
       score += 2;
       b.classList.add('pointer');
          
      }else {
      score += 0;
          b.classList.add('pointer');
      }
      
      }
   
  }        
  //kung pisliton ang choice C
  c.onclick = () => {
      if (confirm("Are you sure " + c.textContent + " is your final answer?") ){
      c.classList.add('check');
      a.classList.add('pointer');
      b.classList.add('pointer');
      d.classList.add('pointer');
      
    
      if (game[0].ans == c.textContent) {   
       score += 2;
       c.classList.add('pointer');
          
      }else {
      score += 0;
          c.classList.add('pointer');
      }
      if (game[1].ans == c.textContent) {   
       score += 2;
       c.classList.add('pointer');
          
      }else {
      score += 0;
          c.classList.add('pointer');
      }
      if (game[2].ans == c.textContent) {   
       score += 2;
       c.classList.add('pointer');
          
      }else {
      score += 0;
          c.classList.add('pointer');
      }
      if (game[3].ans == c.textContent) {   
       score += 2;
       c.classList.add('pointer');
          
      }else {
      score += 0;
          c.classList.add('pointer');
      }
       if (game[4].ans == c.textContent) {   
       score += 2;
       c.classList.add('pointer');
          
      }else {
      score += 0;
          c.classList.add('pointer');
      }   
      if (game[5].ans == c.textContent) {   
       score += 2;
       c.classList.add('pointer');
          
      }else {
      score += 0;
          c.classList.add('pointer');
      }
      
      }
   
  }        
  //kung pisliton ang choice D
  
  d.onclick = () => {
      if (confirm("Are you sure " + d.textContent + " is your final answer?") ){
      d.classList.add('check');
      a.classList.add('pointer');
      c.classList.add('pointer');
      b.classList.add('pointer');
      
    
      if (game[0].ans == d.textContent) {   
       score += 2;
       d.classList.add('pointer');
          
      }else {
      score += 0;
          d.classList.add('pointer');
      }
      if (game[1].ans == d.textContent) {   
       score += 2;
       d.classList.add('pointer');
          
      }else {
      score += 0;
          d.classList.add('pointer');
      }
       if (game[2].ans == d.textContent) {   
       score += 2;
       d.classList.add('pointer');
          
      }else {
      score += 0;
          d.classList.add('pointer');
      }
      if (game[3].ans == d.textContent) {   
       score += 2;
       d.classList.add('pointer');
          
      }else {
      score += 0;
          d.classList.add('pointer');
      }
       if (game[4].ans == d.textContent) {   
       score += 2;
       d.classList.add('pointer');
          
      }else {
      score += 0;
          d.classList.add('pointer');
      }   
      if (game[5].ans == d.textContent) {   
       score += 2;
       d.classList.add('pointer');
          
      }else {
      score += 0;
          d.classList.add('pointer');
      }
      
      }
   
  }        
    gamelength.textContent = game.length;
    over.textContent = game.length * 2;
   
    timer = setInterval(() =>{
        ms++
        
        if (ms == 100) {
            sec--;
            ms = 0;
           time.textContent = sec;
        }
        
        
        if (sec == 0) {
            clearInterval(timer);
            result.classList.add('show');
            gamebox.classList.remove('show');
            
        }
        
    },10)
    
  
  
   
}

//kung pisliton ang next na button

nextbtn.onclick = () => {
if (count < game.length - 1) {
    count++;
    gameBox(count);
       a.classList.remove('check');
       b.classList.remove('check');
       c.classList.remove('check');
       d.classList.remove('check');
       
 
}else if(count = game.length - 1){
    result.classList.add('show');
    gamebox.classList.remove('show');
    info.classList.remove('show');
    scores.textContent = score;
    
}
if (number.textContent == game.length) {
    nextbtn.textContent = "Finished ";
    
    
}

a.classList.remove('pointer');
b.classList.remove('pointer');
c.classList.remove('pointer');
d.classList.remove('pointer');
 }
 
 //kung pisliton ang restart button
 restart.onclick = () => {
     gamebox.classList.add('show');
     result.classList.remove('show');
     gameBox(0);
     count = 0;
    timer;
     sec = 31;
     score = 0;
       a.classList.remove('check');
       b.classList.remove('check');
       c.classList.remove('check');
       d.classList.remove('check');   
       
       if (number.textContent == game.length) {
    nextbtn.textContent = "Finished ";
    
    
}else {
    nextbtn.textContent = "Next Question "
}
    
  
 }
 
 //kung pisliton ang choice Ang quit button 
 
 quit.onclick = () => {
     result.classList.remove('show');
     info.classList.remove('show');
     gamebox.classList.remove('show');
     count = 0;
     score = 0;
     sec = 30;
     clearInterval(timer);
       a.classList.remove('check');
       b.classList.remove('check');
       c.classList.remove('check');
       d.classList.remove('check'); 
       
         if (number.textContent == game.length) {
    nextbtn.textContent = "Finished ";
    
    
}else {
    nextbtn.textContent = "Next Question "
}
    
 }
 
 
function gameBox(i){
    question.textContent = game[i].quest; 
    a.textContent = game[i].option[0];
    b.textContent = game[i].option[1];
    c.textContent = game[i].option[2];
    d.textContent = game[i].option[3];
    number.textContent = game[i].num;
    

}


