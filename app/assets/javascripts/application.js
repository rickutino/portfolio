// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require_tree .

// function calcMedia(){
//   return (this.nota[0]+this.nota[1])/2;
// }

// function mediaEscolar(){
//     return (this.nota1+this.nota2)/2;
// }

// function criarAluno(nome,n1,n2){
//   return{
//     nome:nome,
//     nota1:n1,
//     nota2:n2,
//     media:mediaEscolar
//   }
// }

// function exame(nota){
//   if ( nota >= 7){
//     console.log("Voce passou!!");
//   }else{
//     console.log("Se esforce mais");
//   }
// }

// var turma =[
//   criarAluno("Ricardo", 9, 10),
//   criarAluno("Gabriel", 10, 10),
//   criarAluno("Maho", 4, 6.5)
// ]



// turma.forEach(function(element){
//   console.log(`${element.nome} voce tirou ${element.media()} entao`)
//   exame(element.media())
// })

// for(var i in turma){
//   var aluno = turma[i]
//   console.log(`${aluno.nome} voce tirou ${aluno.media()} entao`)
//   exame(aluno.media())
// }

// var aluno = {
//   nome:"ricardo",
//   nota:[9.0,8.5],
//   // media: calcMedia,
//   media:function (){
//     return (this.nota[0]+this.nota[1])/2;
//   },
// }
// console.log(aluno.nome,aluno.media())
// // console.log(aluno.media())