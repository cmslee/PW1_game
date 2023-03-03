let story;
function getStory(name) {
    return {
        currentScene: "checkIn",
        checkIn: {
            title: "Dinnertime",
            story: `You have made it. It is time to eat! Are you ready, ${name}?`,
            choices: [
                {
                    choice: "Yes. Let's do this.",
                    destination: "startMode"
                },
                {
                    choice: "No. I need a minute.",
                    destination: "layDown"
                }
            ]
        },
        startMode: {
            title: "Kitsune Udon",
            story: "We're going to have Kitsune Udon today. It's a simple noodle soup topped with aburaage (fried marinated tofu pouches) and some simple garnishes like green onion or pre-made fish cake. It's great for a light dinner, but can also be done up with more toppings and sides. Where is your energy level?",
            choices: [
                {
                    choice: "I can spend some time in the kitchen. Let's chef!",
                    destination: "KitsuneUdonStart"
                },
                {
                    choice: "The flesh-sack just needs calories. Let's get this over with.",
                    destination: "DinnerServedNissin"
                },
                {
                    choice: "Need a minute after all...",
                    destination: "layDown"
                }
            ]
        },
        KitsuneUdonStart: {
            title: "Let's Chef!",
            story: "Great! Let's get started. You have the ingredients to go all out or keep it simple. How do you want to do this?",
            //FUTURE EDIT: the idea would be to include a cupboard, so you can consider ingredients while selecting options.
            //FUTURE EDIT: then it might be nice to include images of the products
            choices: [
                {
                    choice: "Let's keep it easy. Use the dashi (broth) mix and mostly ready-to-eat toppings.",
                    destination: "EasyStep1"
                },
                {
                    choice: "We can level it up a bit. Let's use dashi mix, but make some fresh toppings.",
                    destination: "MediumStep1"
                },
                {
                    choice: "Let's go all out! Let's make our own dashi and make most of our toppings.",
                    destination: "HardStep1"
                },
                {
                    choice: "This is all a lot. Let me regroup for second...",
                    destination: "layDown"
                },
            ]
        },
        EasyStep1: {
            title: "",
            story: "",
            defaultDestination: "EasyStep2"
        },
        MediumStep1: {
            title: "",
            story: "",
            defaultDestination: ""
        },
        HardStep1: {
            title: "",
            story: "",
            defaultDestination:""
        },
        DinnerServedNissin: {
            title: "Dinner Served!",
            story: "Good thing you always keep some Nissin stocked! It's a solid choice, great for a mind-blank-low-key-replenish type day. Just follow package instructions (usually adding boiling water and waiting) and dinner is served! Garnish with some toppings (i.e. nori, furikake) and throw in a handful of prewashed greens with your boiling water for extra nourishment!",
            //EDIT: the goal would eventually be to insert images of what's involved in this process
            //PROBLEM: this destination is not right. research reset options or figure out how to access start page. is it just document
            defaultDestination: 'checkIn',
            buttonText: "Back to Start."
        },
        layDown: {
            title: "Whew.",
            story: "Take a breather. Come back when you can.",
            defaultDestination: 'checkIn',
            buttonText: "I'm ready. Try again."
        }
    }
}


document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector("#start-button")
    let content = document.querySelector('#content')
    button.addEventListener('click', function () {
        let name = document.querySelector("#name-input")
        story = getStory(name.value)
        renderScene()
    })
})


function renderScene() {
    let text = "Next"
    if (story[story.currentScene].buttonText) {
        text = story[story.currentScene].buttonText
    } 
    content.innerHTML = `
        <h1>${story[story.currentScene].title}</h1>
        <h4></h4>
        <p>${story[story.currentScene].story}</p>
        <br></br>
        ${getInputs()}
        <button id = "submit-button">${text}</button>
        `
    let button = document.querySelector("#submit-button");
    button.addEventListener('click', function () {
        getSelectedInput()
    })
}

function getSelectedInput() {
    let inputs = document.querySelectorAll("input[type='radio']")
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            story.currentScene = inputs[i].getAttribute('data-destination');
            renderScene();
            return;
        }
    }
    story.currentScene = story[story.currentScene].defaultDestination
    renderScene()
}

function getInputs() {
    let input = ""
    if (!story[story.currentScene].choices) {
        return ""
    }
    for (let i = 0; i < story[story.currentScene].choices.length; i++) {
        input += `
        <div>
        <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices"></input>
        <label for="radio${i}">${story[story.currentScene].choices[i].choice}</label>
        </div>
        `
    }
    return input;
}

