// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on("turbolinks:load", ()=>{ 
  // let btn = document.getElementById('btn')
  // console.log(btn)
  document.querySelector("#btn").onclick = function() {
    const name = document.querySelector('#name')
    const title = document.querySelector('#title')
    alert(`${name.value}様${title.value}の件受領致しました`);
  };
})