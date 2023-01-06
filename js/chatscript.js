let userinput= document.getElementById('userin');
var i=0;
userinput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      // let brcloud = document.createElement('br');
// brcloud.className="cloudbr";
      let div = document.createElement('p');
      div.className="userspeech";
      div.textContent=userinput.value;
      document.getElementById('cont').append(document.createElement('br'));
      document.getElementById('cont').append(div);
    //   document.className(".speech").replace(top="250px");
if (  userinput.value.toUpperCase()=="КОМАНДА" || userinput.value.toUpperCase()=="РАЗРАБОТЧИКИ")
{
  let div = document.createElement('p');
  div.className="speech";
  div.textContent="команда!";
  document.getElementById('cont').append(document.createElement('br'));
  document.getElementById('cont').append(div);
}
else
{
  let div = document.createElement('p');
  div.className="speech";
  div.textContent="Умею : \n1)Команда\n2)";
  document.getElementById('cont').append(document.createElement('br'));
  document.getElementById('cont').append(div);
}
document.getElementById('cont').append(document.createElement('br'));
document.getElementById('cont').append(document.createElement('br'));
    userinput.value="";
    }
  });