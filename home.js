document.addEventListener('DOMContentLoaded', function() {
  console.log("loading");

  document.querySelectorAll('.tab-item').forEach(item => {
    console.log("ayo");
    item.addEventListener('click', function() {
      console.log("hi");

      // Hide all content divs
      document.querySelectorAll('.content').forEach(div => {
        div.classList.remove('active');
      });

      // Show the target content div
      const targetDiv = document.getElementById(this.getAttribute('data-target'));
      targetDiv.classList.add('active');
    });
  });
});
