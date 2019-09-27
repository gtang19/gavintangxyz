const descriptions = ["This link is broken, don't even try clicking on it","Really, it doesn’t do anything","Nothing has happened yet, why do you expect that to change?","I’ll be honest, this is just a filler link to make the website look bigger. It isn’t going to go anywhere. You can stop clicking the link now.","Persistence is a valuable skill, but sometimes you’re just wasting your time.","That meant right now. You’re currently wasting your time by clicking on this link.","Does it not bother you at all that you’ve clicked this link several times, and yet nothing has happened?","Alright we’ll open a broken page. Does that work for you?","Look, I admire the resilience, but really consider, what are you learning from this experience? Is it worth it?","You probably think that this has to be going somewhere","ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ","Alright, fine. Link is fixed now. Congratulations"];

let counter = 1;
const links = document.querySelectorAll("#broken-link a");

links.forEach(link => {
   link.addEventListener("click", () => {
       if (counter < 12) {
           document.getElementById("broken-summary").innerHTML = descriptions[counter];
           counter++
           console.log(counter);
       }
       else {
           window.open('https://forms.gle/6uAUbxUJY7t8Gun6A','_blank');
       }
       if (counter == 8) {
           window.open('./brokenlink','_blank');
       }
       if (counter == 12) {
           document.getElementById("broken-name").innerHTML = "Fixed Link";
           document.getElementById("broken-mini-link").innerHTML = "https://forms.gle/6uAUbxUJY7t8Gun6A"
       }
   }) 
});