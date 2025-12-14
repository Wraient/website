+++
title = "Home"
insert_anchor_links = "left"
+++

<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 60vh; text-align: center;">

## Hi, I am **Rushikesh Gaikwad** <code id="age-display"></code> suns old guy, I go by "Wraient" on the spyware.

Welcome to my corner of the internet. 

I like computers and the way i can never be done learning.

<div class="buttons centered">
    <a class="big" href="/website/blog/">Start Reading →</a>
</div>

</div>

<script>
  (function() {
    const birthDate = new Date("2005-11-09T00:00:00");
    const el = document.getElementById("age-display");
    
    function update() {
      const now = new Date();
      const diff = now - birthDate;
      // Average milliseconds per year (365.2425 days)
      const age = diff / 31556952000; 
      el.innerText = age.toFixed(9);
    }
    
    setInterval(update, 50);
    update();
  })();
</script>