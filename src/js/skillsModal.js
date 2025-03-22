function openModal(id) {
  document.getElementsByClassName("modal")[id].style.display = "flex";
}

function closeModal(id) {
  document.getElementsByClassName("modal")[id].style.display = "none";
}

const style = document.createElement("style");
style.innerHTML = `
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(30, 30, 30, 0.84);
    justify-content: center;
    align-items: center;
}
.modal-content {
  background: rgba(32, 32, 32, 0.81);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  position: relative;
  border: 2px solid #000000;
  max-width: 500px;
  color:#ffffff;

}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}

`;
document.head.appendChild(style);
