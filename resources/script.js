const button = document.getElementById("all");
const button22 = document.getElementById("22");
const button21 = document.getElementById("21");
const button20 = document.getElementById("20");
const button19 = document.getElementById("19");
const button18 = document.getElementById("18");
const button17 = document.getElementById("17");
const button16 = document.getElementById("16");
const button15 = document.getElementById("15");
const button14 = document.getElementById("14");
const button13 = document.getElementById("13");
const button11 = document.getElementById("11");
const button10 = document.getElementById("10");
const button9 = document.getElementById("9");
const button7 = document.getElementById("7");
const button6 = document.getElementById("6");
const divs = document.querySelectorAll(".proyectos");

function removeActiveClass() {
  button.classList.remove("active");
  button22.classList.remove("active");
  button21.classList.remove("active");
  button20.classList.remove("active");
  button19.classList.remove("active");
  button18.classList.remove("active");
  button17.classList.remove("active");
  button16.classList.remove("active");
  button15.classList.remove("active");
  button14.classList.remove("active");
  button13.classList.remove("active");
  button11.classList.remove("active");
  button10.classList.remove("active");
  button9.classList.remove("active");
  button7.classList.remove("active");
  button6.classList.remove("active");
}

  button.addEventListener("click", function() {
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.display = "flex";
    }
    removeActiveClass();
    button.classList.toggle("active");
  });
  button22.addEventListener("click", function() {
    for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "flex";
    }
    for (let i = 0; i < divs.length; i++) {
    if (divs[i].parentNode.id !== "2022") {
    divs[i].style.display = "none";
    }
    }
    removeActiveClass();
    button22.classList.toggle("active");
    });
  button21.addEventListener("click", function() {
      for (let i = 0; i < divs.length; i++) {
      divs[i].style.display = "flex";
      }
      for (let i = 0; i < divs.length; i++) {
      if (divs[i].parentNode.id !== "2021") {
      divs[i].style.display = "none";
      }
      }
      removeActiveClass();
      button21.classList.toggle("active");
      });
  button20.addEventListener("click", function() {
    for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "flex";
    }
    for (let i = 0; i < divs.length; i++) {
    if (divs[i].parentNode.id !== "2020") {
    divs[i].style.display = "none";
    }
    }
    removeActiveClass();
    button20.classList.toggle("active");
    });
  button19.addEventListener("click", function() {
    for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "flex";
    }
    for (let i = 0; i < divs.length; i++) {
    if (divs[i].parentNode.id !== "2019") {
    divs[i].style.display = "none";
    }
    }
    removeActiveClass();
    button19.classList.toggle("active");
    });
  button18.addEventListener("click", function() {
    for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "flex";
    }
    for (let i = 0; i < divs.length; i++) {
    if (divs[i].parentNode.id !== "2018") {
    divs[i].style.display = "none";
    }
    }
    removeActiveClass();
    button18.classList.toggle("active");
    });
  button17.addEventListener("click", function() {
    for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "flex";
    }
    for (let i = 0; i < divs.length; i++) {
    if (divs[i].parentNode.id !== "2017") {
    divs[i].style.display = "none";
    }
    }
    removeActiveClass();
    button17.classList.toggle("active");
    });
  button16.addEventListener("click", function() {
    for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "flex";
    }
    for (let i = 0; i < divs.length; i++) {
    if (divs[i].parentNode.id !== "2016") {
    divs[i].style.display = "none";
    }
    }
    removeActiveClass();
    button16.classList.toggle("active");
    });
  button15.addEventListener("click", function() {
    for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "flex";
    }
    for (let i = 0; i < divs.length; i++) {
    if (divs[i].parentNode.id !== "2015") {
    divs[i].style.display = "none";
    }
    }
    removeActiveClass();
    button15.classList.toggle("active");
    });

  button14.addEventListener("click", function() {
    for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "flex";
    }
    for (let i = 0; i < divs.length; i++) {
    if (divs[i].parentNode.id !== "2014") {
    divs[i].style.display = "none";
    }
    }
    removeActiveClass();
    button14.classList.toggle("active");
    });
  button13.addEventListener("click", function() {
    for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "flex";
    }
    for (let i = 0; i < divs.length; i++) {
    if (divs[i].parentNode.id !== "2013") {
    divs[i].style.display = "none";
    }
    }
    removeActiveClass();
    button13.classList.toggle("active");
    });
  button11.addEventListener("click", function() {
    for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "flex";
    }
    for (let i = 0; i < divs.length; i++) {
    if (divs[i].parentNode.id !== "2011") {
    divs[i].style.display = "none";
    }
    }
    removeActiveClass();
    button11.classList.toggle("active");
    });
    button10.addEventListener("click", function() {
      for (let i = 0; i < divs.length; i++) {
      divs[i].style.display = "flex";
      }
      for (let i = 0; i < divs.length; i++) {
      if (divs[i].parentNode.id !== "2010") {
      divs[i].style.display = "none";
      }
      }
      removeActiveClass();
      button10.classList.toggle("active");
      });
      button9.addEventListener("click", function() {
        for (let i = 0; i < divs.length; i++) {
        divs[i].style.display = "flex";
        }
        for (let i = 0; i < divs.length; i++) {
        if (divs[i].parentNode.id !== "2009") {
        divs[i].style.display = "none";
        }
        }
        removeActiveClass();
        button9.classList.toggle("active");
        });
        button7.addEventListener("click", function() {
          for (let i = 0; i < divs.length; i++) {
          divs[i].style.display = "flex";
          }
          for (let i = 0; i < divs.length; i++) {
          if (divs[i].parentNode.id !== "2007") {
          divs[i].style.display = "none";
          }
          }
          removeActiveClass();
          button7.classList.toggle("active");
          });
          button6.addEventListener("click", function() {
            for (let i = 0; i < divs.length; i++) {
            divs[i].style.display = "flex";
            }
            for (let i = 0; i < divs.length; i++) {
            if (divs[i].parentNode.id !== "2006") {
            divs[i].style.display = "none";
            }
            }
            removeActiveClass();
            button6.classList.toggle("active");
            });