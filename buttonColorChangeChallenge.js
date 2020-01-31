
 let Buttons  =  document.getElementsByTagName('button');
  
 let  resetColorList  = [];

  for(let i = 0 ; i < Buttons.length ; i++)
     resetColorList.push(Buttons[i].classList[2]);
 


function buttonColorChange(Info){

    let Choice = Info.value;

     if(Choice === 'red'){
         redButton();
     }else if(Choice === 'green' ){
        greenButton();
     }else if(Choice === 'reset'){
         resetButton();
     }else if(Choice === 'random'){
         randomButton();
     }

 
function redButton(){
      
   let Buttons =  document.getElementsByTagName('button');
   

  
   for(let i = 0 ; i < Buttons.length ; i++){

   Buttons[i].classList.remove(Buttons[i].classList[2]);
   Buttons[i].classList.add('btn-danger');
   }
}
function greenButton(){
 
    let Buttons =  document.getElementsByTagName('button');
   
  
   for(let i = 0 ; i < Buttons.length ; i++){

   Buttons[i].classList.remove(Buttons[i].classList[2]);
   Buttons[i].classList.add('btn-success');
   }

}
function resetButton(){

   let Buttons  =  document.getElementsByTagName('button');

   for(let i = 0 ; i < Buttons.length ; i++){
   
     Buttons[i].classList.remove(Buttons[i].classList[2]);
     Buttons[i].classList.add(resetColorList[i]);

   }

}
function randomButton(){
 
    let colorList =['btn-warning','btn-success','btn-danger','btn-primary','btn-secondary']
      
   let Buttons = document.getElementsByTagName('button');

  for(let i = 0 ; i < Buttons.length ; i++ ){

         let Color = colorList[Math.floor(Math.random()*5)] ;
          Buttons[i].classList.remove(Buttons[i].classList[2]);
          Buttons[i].classList.add(Color);


  }

}




}