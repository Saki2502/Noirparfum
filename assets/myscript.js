// function standingTop() {
//   var y = window.scrollY;
//   var elm = document.getElementById("i-header");
//   if (y >= 96) {
//     elm.style.position = "fixed";
//     elm.style.top = "0";
//     elm.style.zIndex = "1";
//   } else {
//     elm.style.position = "static";
//   }
// }
var product = new Array();
var iSlide = 1;
var newPro;
function addProduct(img, name, price, infor, sex, company, hot) {
  newPro = {
    img: img,
    name: name,
    price: price,
    infor: infor,
    sex: sex,
    company: company,
    hot: hot,
  };
  product.push(newPro);
}
//noi add san pham
function addList() {
  addProduct(
    "assets/images/BlackOpium.jpg",
    "Black Opium",
    130,
    "Thuong hang",
    "male",
    "chau au",
    true
  );
  addProduct(
    "assets/images/versace.jpg",
    "Versace Bright Crystal",
    99,
    "Thuong hang",
    "male",
    "chau au",
    false
  );
  addProduct(
    "assets/images/212.jpg",
    "212 Men Carolina Herrera",
    104,
    "Thuong hang",
    "female",
    "chau au",
    false
  );
  addProduct(
    "assets/images/paco.jpg",
    "Phantom Eau de Toilette",
    100,
    "Thuong hang",
    "female",
    "chau au",
    true
  );
  addProduct(
    "assets/images/tamdao.jpg",
    "Diptyque Tam Dao",
    161,
    "Thuong hang",
    "male",
    "chau au",
    true
  );
  addProduct(
    "assets/images/doson.jpg",
    "Diptyque Do Son",
    161,
    "Thuong hang",
    "female",
    "chau au",
    true
  );
}
addList();
$(function () {
  var isSideDown = false;
  $(window).scroll(function () {
    if ($("html,body").scrollTop() > 80) {
      // $("this").scrollTop(100);
      $("#i-header").css({
        position: "fixed",
        top: "0",
        "z-index": "1",
        height: "60",
        // ,"display":"none"
      });
      if (!isSideDown) {
        $("#i-slogan").css("display", "none");
        $("#i-header").css("display", "none");
        isSideDown = true;
        $("#i-header").slideDown(500);
      }
    } else if ($("html,body").scrollTop() == 0) {
      isSideDown = false;
      $("#i-header").css({
        position: "static",
        // ,"top":"0"
        // ,"z-index":"1"
        display: "flex",
        height: "95",
      });
      $("#i-slogan").css("display", "block");
    }
  });
  for (i = 0; i < 10; i++) {
    $(".c-list").append(
      '<div class="c-pro-items"><div class="c-item-img"></div><div class="c-item-info"><div class="c-item-name">Tran dan</div><div class="c-item-price">300d</div></div></div>'
    );
  }
});

function addProToScreen(){
  var nWoman = 0,
  elmWoman = document.getElementById("product_woman"),
  nMan = 0,
  elmMan = document.getElementById("product_man"),
  nHot = 0,
  elmHot = document.getElementById("product_hot"),
  pieHtml;
  for(i = 0; i < product.length; i++){
    pieHtml = '<div class="c-product-box"><div class="c-img-product"><div class="c-product-new animate__animated animate__jello">NEW</div><img src=' +
    product[i].img +
    ' alt="san pham" /></div><div><p class="c-name-product">' +
    product[i].name +
    '</p><p class="c-price-product">' +
    product[i].price +
    "<i><b>$</b></i></p></div></div>";
    if(nWoman<5 && product[i].sex=="male"){
      elmWoman.innerHTML = elmWoman.innerHTML + pieHtml;
    }
    if(nMan<5 && product[i].sex=="female"){
      elmMan.innerHTML = elmMan.innerHTML + pieHtml;
    }
    if(nHot<5 &&product[i].hot){
      elmHot.innerHTML = elmHot.innerHTML + pieHtml;
    }
  }
}
addProToScreen();
// getxy();
// document.getElementById("i-img").style.backgroundImage =
//   "url(assets/images/slide1.jpg)";

function slideChange(i) {
  document.getElementById("stick" + iSlide).style.color =
    "rgb(243,243,243,0.6)";
  iSlide += i;
  if (iSlide == 6) iSlide = 1;
  if (iSlide == 0) iSlide = 5;
  slideNumber(iSlide);
}
function slideNumber(i) {
  document.getElementById("stick" + iSlide).style.color =
    "rgb(243,243,243,0.6)";
  iSlide = i;
  document.getElementById("i-cover").src =
    "assets/images/slide" + iSlide + ".jpg";
  document.getElementById("stick" + i).style.color = "rgb(54,54,54,0.6)";
}

function loopSlide() {
  slideChange(1);
  setTimeout(loopSlide, 5000);
}
loopSlide();
// function scrollSlide(i, str) {
//   var elmt = document.getElementById("slide_" + str);
//   elmt.scrollBy(i, 0);
//   // var x = elmt.scrollLeft;
//   // document.getElementById("t"+"est").innerHTML ="hello";
// }

/*footer*/
window.scrollTo(0, 0);
window.scroll({
  behavior: "smooth",
});
//Get a:
ontop = document.getElementById("backtop");
//Kéo xuống 25px xuất hiện a
window.onscroll = function () {
  scrollTop();
};
function scrollTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    ontop.style.display = "block";
  } else {
    ontop.style.display = "none";
  }
}
//scroll lên đầu
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
