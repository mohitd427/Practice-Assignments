
class Counter {
  #counter;
  constructor(initialValue) {
    this.#counter = initialValue;
  }

  get counterValue() {
    return this.#counter;
  }

  set addValue(newValue) {
      this.#counter = this.#counter + newValue;
    }
    
  set reduceValue(newValue) {
    this.#counter = this.#counter - newValue;
  }
}

const counter = new Counter(0);

function add() {
    counter.addValue = 1;
    // console.log(counter)
    document.getElementById(
      "counter"
    ).innerText = `Counter : ${counter.counterValue}`;

} 

function reduce() {
    counter.reduceValue = 1;
    // console.log(counter);
    document.getElementById(
      "counter"
    ).innerText = `Counter : ${counter.counterValue}`;

}

window.onload = () => {
    document.getElementById("counter").innerText = `Counter : ${counter.counterValue}`
}