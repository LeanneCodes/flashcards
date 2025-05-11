const questionsAnswers = [
    {
      question: "Tell me how you would check that the brakes are working before starting a journey.",
      answer: "Just as you move off, operate the brakes. They should not feel spongy and the car should not pull to one side."
    },
    {
      question: "Tell me where you’d find the information for the recommended tyre pressures for this car and how tyre pressures should be checked.",
      answer: "Information is in the car manufacturer’s guide. Check pressures using a reliable gauge when tyres are cold. Don't forget the spare and refit valve caps."
    },
    {
      question: "Tell me how you make sure your head restraint is correctly adjusted so it provides the best protection in the event of a crash.",
      answer: "Adjust so the centre is at least as high as the eye or top of the ears, and as close to the back of the head as comfortable. Some restraints may not be adjustable."
    },
    {
      question: "Tell me how you’d check the tyres to ensure that they have sufficient tread depth and that their general condition is safe to use on the road.",
      answer: "Tyres should have no cuts or bulges. Tread depth must be at least 1.6mm across the central ¾ of the breadth and around the entire outer circumference."
    },
    {
      question: "Tell me how you’d check that the headlights and tail lights are working.",
      answer: "Turn on the lights (and ignition if necessary), then walk around the vehicle to check lights."
    },
    {
      question: "Tell me how you’d know if there was a problem with your anti-lock braking system.",
      answer: "A warning light should illuminate on the dashboard if there's a fault with the ABS."
    },
    {
      question: "Tell me how you’d check the direction indicators are working.",
      answer: "Activate the hazard warning lights and walk around the car to see if all indicators are functioning."
    },
    {
      question: "Tell me how you’d check the brake lights are working on this car.",
      answer: "Operate the brake pedal and make use of reflections in windows or ask someone to help."
    },
    {
      question: "Tell me how you’d check the power-assisted steering is working before starting a journey.",
      answer: "1) Gentle pressure on the wheel while starting the engine should cause slight movement. 2) Turning the wheel just after moving off should feel easy."
    },
    {
      question: "Tell me how you’d switch on the rear fog light(s) and explain when you’d use them.",
      answer: "Operate the switch (with dipped headlights and ignition on if needed), check warning light is on. Use only in foggy, low visibility conditions."
    },
    {
      question: "Tell me how you switch your headlight from dipped to main beam and explain how you’d know the main beam is on.",
      answer: "Operate the light switch and activate the main beam. Check the blue warning light is on."
    },
    {
      question: "Open the bonnet and tell me how you’d check that the engine has sufficient oil.",
      answer: "Identify and remove dipstick, wipe clean, reinsert, remove again to check oil against min and max marks. Top up if needed, avoid overfilling."
    },
    {
      question: "Open the bonnet and tell me how you’d check that the engine has sufficient engine coolant.",
      answer: "Identify the coolant tank and check level is between min and max. If low, unscrew the cap when engine is cold and top up to max mark."
    },
    {
      question: "Open the bonnet and tell me how you’d check that you have a safe level of hydraulic brake fluid.",
      answer: "Identify the reservoir and check the level against the high and low markings."
    },
    {
      question: "Show me how you wash and clean the rear windscreen.",
      answer: "Use the appropriate control to operate the rear windscreen washer and wiper."
    },
    {
      question: "Show me how you wash and clean the front windscreen.",
      answer: "Use the windscreen washer control to spray and wipe the front windscreen."
    },
    {
      question: "Show me how you’d switch on your dipped headlights.",
      answer: "Use the light control switch to turn on the dipped headlights."
    },
    {
      question: "Show me how you’d set the rear demister.",
      answer: "Use the appropriate control button to activate the rear window demister."
    },
    {
      question: "Show me how you’d operate the horn.",
      answer: "Press the horn control on the steering wheel when it is safe to do so."
    },
    {
      question: "Show me how you’d demist the front windscreen.",
      answer: "Set the fan, temperature, and air flow direction to clear the front windscreen."
    },
    {
      question: "Show me how you’d open and close the side window.",
      answer: "Use the window control switch to open and close the window."
    }
];  

console.log(questionsAnswers.length)

if (questionsAnswers.length > 0) {
    const container = document.getElementById('container');
    for (let i = 0; i < questionsAnswers.length; i++ ) {
        let flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');
        let innerFlashcard = document.createElement('div');
        innerFlashcard.classList.add('flashcard-inner');
        let cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        let cardBack = document.createElement('div');
        cardBack.classList.add('card-back');

        let question = questionsAnswers[i].question;
        let questionTitle = document.createElement('h2');
        questionTitle.classList.add('question');
        questionTitle.innerHTML = question;

        let answer = questionsAnswers[i].answer;
        let response = document.createElement('p');
        response.classList.add('answer');
        response.innerHTML = answer;

        cardFront.appendChild(questionTitle);
        cardBack.appendChild(response);

        flashcard.appendChild(innerFlashcard);
        innerFlashcard.append(cardFront, cardBack);
        container.appendChild(flashcard);
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const flashcards = document.querySelectorAll(".flashcard");

  flashcards.forEach(card => {
      card.addEventListener("click", function () {
          this.classList.toggle("flipped");
      });
  });
});