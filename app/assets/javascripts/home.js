// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on("turbolinks:load", ()=>{ 
  // let btn = document.getElementById('btn')
  // console.log(btn)
  document.getElementById("btn").onclick = function() {
    const name = document.getElementById('name')
    const title = document.getElementById('title')
    alert(`${name.value}様${title.value}の件受領致しました`);
  };
})