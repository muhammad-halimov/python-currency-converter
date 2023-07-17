let button = document.querySelector('.wrapper button');
let now = new Date(), showDate = (now.getDate() + '.' + now.getMonth() + '.' + now.getFullYear() + ' - ' + now.getHours() + ' : ' +now.getMinutes());
let from = document.querySelector('.from select');
let to = document.querySelector('.to select');
let amount = document.querySelector('.amount input');

button.addEventListener('click', async () =>
{
   if (!amount.value || amount.value == 0)
   {
      return alert("You didn't choose amount !");
   }
   else if (from.value === to.value)
   {
      return alert('Choose another currency !');
   }
   document.querySelector('.result').innerHTML = await eel.currency(from.value, to.value, amount.value)();
   document.querySelector('.result').style = 'display: block';
   document.querySelector('.time').innerHTML = showDate;
   document.querySelector('.time').style = 'display: block';
});
