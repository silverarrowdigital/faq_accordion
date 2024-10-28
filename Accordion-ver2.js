//auto-close other accordions

const faqQuestions = Array.from(document.querySelectorAll(".faq-question"));
let newArr = [];

faqQuestions.forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (e.currentTarget === item) {
      newArr = faqQuestions.filter((i) => i !== e.currentTarget);
      console.log(newArr);
      newArr.forEach(function (el) {
        let answer2 = el.nextElementSibling;
        console.log(answer2);
        // Get the initial state
        const state2 = Flip.getState(answer2, { props: "height" });

        // toggle the flex direction
        el.classList.remove("is--active");

        Flip.from(state2, {
          absolute: false, // uses position: absolute during the flip to work around flexbox challenges
          duration: 0.5,
          ease: "power2.Out",
          // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc.
        });
      });

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
    }
  });
});
