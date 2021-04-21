let Links = {
    setColor: function (color) {
      let alist = document.querySelectorAll("a");
      let i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
      }
    },
  };

  let Body = {
    setColor: function (color) {
      document.querySelector("body").style.color = color;
    },
    setBackgroundColor: function (color) {
      document.querySelector("body").style.backgroundColor = color;
    },
  };

  function nightDayHandler(self) {
    let target = document.querySelector("body");
    if (self.value === "night") {
      Body.setBackgroundColor("black");
      Body.setColor("white");
      self.style.border = "5px solid purple";
      self.value = "day";

      Links.setColor("pink");
    } else {
      Body.setBackgroundColor("white");
      Body.setColor("black");
      self.style.border = "3px solid coral";
      self.value = "night";

      Links.setColor("powderblue");
    }
  }