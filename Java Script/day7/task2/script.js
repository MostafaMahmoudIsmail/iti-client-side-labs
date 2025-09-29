class LinkedList {
  constructor(node) {
    this.head = node;
    this.tail = this.head;
  }

  addToBegin(val) {
    let NewNode = new Node(val);
    NewNode.next = this.head;
    this.head = NewNode;
    updateView("addBegin");
  }

  addToEnd(val) {
    let NewNode = new Node(val);
    this.tail.next = NewNode;
    this.tail = NewNode;
    updateView("addEnd");
  }

  removeFromBegin() {
    updateView("removeBegin");
    if (this.head === null) return;
    this.head = this.head.next;

  }

  removeFromEnd() {
    updateView("removeEnd");
    if (this.head === null) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    this.tail = current;
    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    updateView();
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let initNode = new Node(0);
let mainLinkedList = new LinkedList(initNode);
let LinkedShow = document.getElementById("linkedList");

let addBegin = document.getElementById("addBegin");
addBegin.addEventListener("click", AddBegin);
function AddBegin(e) {
  e.preventDefault();
  let val = document.getElementById("addValue").value;
  mainLinkedList.addToBegin(val);
}

let addEnd = document.getElementById("addEnd");
addEnd.addEventListener("click", AddEnd);
function AddEnd(e) {
  e.preventDefault();
  let val = document.getElementById("addValue").value;
  mainLinkedList.addToEnd(val);
}

let removeBegin = document.getElementById("removeBegin");
removeBegin.addEventListener("click", RemoveBegin);
function RemoveBegin(e) {
  e.preventDefault();
  mainLinkedList.removeFromBegin();
}

let removeEnd = document.getElementById("removeEnd");
removeEnd.addEventListener("click", RemoveEnd);
function RemoveEnd(e) {
  e.preventDefault();
  mainLinkedList.removeFromEnd();
}

let reverse = document.getElementById("reverse");
reverse.addEventListener("click", Reverse);
function Reverse(e) {
  e.preventDefault();
  mainLinkedList.reverse();
}

updateView()
function updateView(action = "") {
  LinkedShow.textContent = "";
  let current = mainLinkedList.head;
  let idx = 0;

  while (current !== null) {
    let new_div = document.createElement("div");
    new_div.innerHTML = current.val;
    new_div.classList.add("Node");

    if (action === "addBegin" && idx === 0) new_div.classList.add("in");
    if (action === "addEnd" && current.next === null)
      new_div.classList.add("in");

    if (action === "removeBegin" && idx === 0) {
      new_div.classList.add("out");
      setTimeout(() => new_div.remove(), 400);
    }
    if (action === "removeEnd" && current.next === null) {
      new_div.classList.add("out");
      setTimeout(() => new_div.remove(), 400);
    }

    LinkedShow.appendChild(new_div);
    current = current.next;
    idx++;
  }
}
