function getElement(selection) {
  element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error(`The selection "${selection}" does not exist.`);
  }
}

class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;
    this.btndecrease = element.querySelector(".decrease");
    this.btnreset = element.querySelector(".reset");
    this.btnincrease = element.querySelector(".increase");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = value;

    //Usamos this porque sin bind esta enlazando con el boton y da error
    this.btnincrease.addEventListener("click", this.increase.bind(this));
    this.btnreset.addEventListener("click", this.reset.bind(this));
    this.btndecrease.addEventListener("click", this.decrease.bind(this));
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
    this.color();
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
    this.color();
  }
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
    this.color();
  }
  color() {
    if (this.value == 0) {
      this.valueDOM.style.color = "black";
    } else if (this.value < 0) {
      this.valueDOM.style.color = "red";
    } else if (this.value > 0) {
      this.valueDOM.style.color = "green";
    }
  }
}

const firstCounter = new Counter(getElement(".first-counter"), 10);
const secondCounter = new Counter(getElement(".second-counter"), 200);
