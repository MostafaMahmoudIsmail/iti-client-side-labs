function linkedList(val) {
  let node = new Node(val);
  this.head = node;
  this.tail = node;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

let linkedList1 = new linkedList(0);

function addNode() {
  let random = Math.random() * 100;
  random = Math.floor(random);
  let newNode = new Node(random);
  let iterate = linkedList1.head;
  while (iterate.next != null) {
    iterate = iterate.next;
  }
  iterate.next = newNode;
  linkedList1.tail = newNode;
  fillLinkedList()
}

function removeNode() {
  let iterate = linkedList1.head;
  while (iterate.next != linkedList1.tail) {
    iterate = iterate.next;
  }
  iterate.next = null;
  linkedList1.tail = iterate;
  fillLinkedList()
}

let linkedListShow = document.getElementById("linkedlistShow");

function fillLinkedList() {
  linkedListShow.innerHTML = "";
  let head1 = linkedList1.head;
  let tail1 = linkedList1.tail;

  while (head1 != tail1) {
    let newDiv = document.createElement("div");
    newDiv.style.width = "50px";
    newDiv.style.height = "50px";
    newDiv.style.backgroundColor = "#0E5241";
    newDiv.style.borderRadius = "50%";
    newDiv.style.color = "white";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";

    newDiv.textContent = head1.value;
    linkedListShow.appendChild(newDiv);
    head1 = head1.next;
  }

  let newDiv = document.createElement("div");
  newDiv.style.width = "50px";
  newDiv.style.height = "50px";
  newDiv.style.backgroundColor = "#0E5241";
  newDiv.style.color = "white";
  newDiv.style.borderRadius = "50%";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";

  newDiv.textContent = tail1.value;
  linkedListShow.appendChild(newDiv);
}

fillLinkedList();

document.getElementById("addBtn").addEventListener("click",()=> addNode());
document.getElementById("removeBtn").addEventListener("click", ()=> removeNode());
