//open and close accordion

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (item) {
  item.addEventListener("click", function () {
    let answer = item.nextElementSibling;
    console.log(answer);
    
    // Get the initial state
    const state = Flip.getState(answer, { props: "height" });

    console.log(state);

    // toggle the flex direction
    item.classList.toggle("is--active");

    Flip.from(state, {
      absolute: false, // uses position: absolute during the flip to work around flexbox challenges
      duration: 0.5,
      ease: "power2.Out",
      // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc.
    });
  });
});
