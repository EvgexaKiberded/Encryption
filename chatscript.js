let userinput= document.getElementById('userin');
const answVariants =["КОМАНДА","РАЗРАБОТЧИКИ","БОЛЬШЕ","ШИФРОВАНИЕ","ССЫЛКИ"];
var i=0;
var j=0;
var br=100;
userinput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      // let brcloud = document.createElement('br');
// brcloud.className="cloudbr";
      let div = document.createElement('p');
      div.className="userspeech";
      div.style.top=br+"px";
      br+=55;
      div.textContent=userinput.value;
      document.getElementById('cont').append(div);
    //   document.className(".speech").replace(top="250px");
    div = document.createElement('p');
    div.className="speech";
switch(Findword())
{
  case 0:
    case 1:
      {
        div.textContent="Команда: Kiberded, Michael & Bald";
        break;
      }
      case 2:
        case 3:
          case 4:
      {
        div.textContent="https://en.wikipedia.org/wiki/Quantum_cryptography";
        break;
      }
      case -1:
        {
          div.textContent="Что умеет бот?\n1)Команда разработчиков\n2)Ссылки";
          break;
        }
}
div.style.top=br+"px";
document.getElementById('cont').append(div);
br+= div.textContent.length *3;
    userinput.value="";
    }
  });


  // Алгоритм Кнута:
  function Findword(){
let inputarr=userinput.value.toUpperCase().split(' ');
for(i=0;i<inputarr.length;i++)
{
  for(j=0;j<answVariants.length;j++)
  {
  if (  inputarr[i]==answVariants[j])return j;
  }
  return -1;
}
  }