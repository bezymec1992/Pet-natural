//timer 2:00:00
function startTimer(duration, display) {
  let timer = duration;
  
  setInterval(() => {
    const hours = Math.floor(timer / 3600),
          minutes = Math.floor((timer % 3600) / 60),
          seconds = timer % 60;

    display.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timer--;
  }, 1000);
}

//current date
window.onload = () => {
  startTimer(2 * 3600, document.getElementById('timer'));

  const now = new Date();
  document.getElementById("currentDate").textContent =
    now.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

// phone mask 
Inputmask({
  mask: "+38(099)999-99-99",
  placeholder: "+38(0__)___-__-__",
  showMaskOnHover: false
}).mask(document.getElementById("phone"));

document.getElementById("form").addEventListener("submit", function(e) {
  const phoneInput = document.getElementById("phone");
  const phoneValue = phoneInput.inputmask.unmaskedvalue(); 

  if (phoneValue.length !== 9) {
    e.preventDefault();
    alert("enter valid phone number");
  }
});