var btn_plus = document.querySelectorAll(".plus");
var btn_min = document.querySelectorAll(".min");
var price = document.querySelectorAll(".price");
var totalprice = document.getElementById("totalprice");
var quantity = document.querySelectorAll(".quantity");
var btnDelete = document.querySelectorAll(".Delete");
for(let btn of btn_plus){
    btn.addEventListener("click",function ()  {
        
        let parent = btn.parentElement;
        let quantity = parent.querySelector(".quantity");
        quantity.innerHTML++;
        totalprice.innerHTML=
        +totalprice.innerHTML + +parent.querySelector(".price").innerHTML;
       
    });

}
for(let btn of btn_min){
    btn.addEventListener("click",function ()  {
         let parent = btn.parentElement;
        let quantity = parent.querySelector(".quantity");
        quantity.innerHTML--;
        totalprice.innerHTML=
        +totalprice.innerHTML - +parent.querySelector(".price").innerHTML;
       
    });
}
var icon = document.querySelectorAll(".fa-heart")
for(let iconBtn of icon){

    iconBtn.addEventListener('click',function () {
        iconBtn.classList.toggle("active")
    })

};

for (let btn of btnDelete) {
    btn.addEventListener("click", function () {
      let parent = btn.parentElement;
      parent.remove();
      let quantity = parent.querySelector(".quantity");
      let price = parent.querySelector(".price");
      let total = parseInt(totalprice.innerHTML);
      console.log(total);
      totalprice.innerHTML =
        total - parseInt(quantity.innerHTML) * parseInt(price.innerHTML);
    });
  }

