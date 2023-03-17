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
                    destination: "DinnerServedMaruchan"
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
                    choice: "We can level it up a bit. Let's make our own dashi, but use mostly ready-to-eat toppings.",
                    destination: "MediumStep1"
                },
                {
                    choice: "Let's go all out! Let's make our own dashi and primary topping from scratch.",
                    destination: "HardStep1"
                },
                {
                    choice: "This is all a lot. Let me regroup for second...",
                    destination: "layDown"
                },
            ]
        },
        DinnerServedMaruchan: {
            title: "Dinner is Served!",
            story: "Good thing you always keep some instant Maruchan stocked! It's a solid choice, great for a mind-blank-low-key-replenish type day. Just follow package instructions (usually adding boiling water and waiting) and dinner is served! Garnish with some toppings (i.e. nori, furikake) and throw in a handful of prewashed greens with your boiling water for extra nourishment!",
            //EDIT: the goal would eventually be to insert images of what's involved in this process
            //PROBLEM: this destination is not right. research reset options or figure out how to access start page. is it just document
            image: "kitsune_udon_maruchan.jpg",
            defaultDestination: 'checkIn',
            buttonText: "Back to Start"
        },
        EasyStep1: {
            title: "Easy Mode: Gather Ingredients",
            story: "Nice. Low and slow is the way to go, especially when there are so many great time-saving products available to help you along.",
            ingredients: "Noodles: frozen udon noodle pack; Broth: dashi packet, mirin, sugar, soy sauce, salt; Toppings: inari-age, narutomaki, green onion",
            steps: "Time to gather your ingredients. Udon packs come frozen and dried, but the frozen ones usually hold up better after cooking and are more suitable to noodle soup dishes. Dashi packets save you the time of making your own broth. Inari-age, fried tofu pouches marinated in a sweet and savory broth, can be bought pre-made in a can or refridgerated package. Narutomaki, scallop-edged fish cake with a pink swirl in the middle (which might be familiar to some anime buffs), comes cooked and ready-to-eat either from the fridge or defrosted/parboiled from freezer.",
            // **Development note: the idea is to create a waiting room so that player has a chance at this point to going to a "rest area" away from decision-making chain that isn't "back to start."
            // choices: [
            //     {
            //         choice: "",
            //         destination: "EasyStep2"
            //     },
            //     {
            //         choice: "I need a moment after all. Be right back...",
            //         destination: "waitingRoom"
            //     },
            // ],
            defaultDestination: "EasyStep2",
            buttonText: "Keep going..."
        },
        EasyStep2: {
            title: "Easy Mode: Prepare Noodles",
            story: "Cook your noodles according to package directions. Drain under running water, shake off excess water, and set aside in serving bowl.",
            defaultDestination: "EasyStep3",
            buttonText: "Almost there..."
        }, 
        EasyStep3: {
            title: "Easy Mode: Prepare Broth & Toppings",
            story: "Prepare the dashi by boiling dashi packet according to instructions. Remove dashi packet and disgard. Dashi complete. Add mirin, sugar, soy sauce, and salt. Bring to boil and turn off heat. Broth complete.",
            steps: "Optional: slice some green onion and narutomaki as garnish.",
            defaultDestination: "DinnerServedEasy",
            buttonText: "So close..."
        },
        DinnerServedEasy: {
            title: "Dinner is Served!",
            story: "Now you just put everything together.",
            steps: "Pour the prepared dashi over noodles, just so most of the noodles are submerged. Top artfully (or not) with at least 2 inari-age slices and your toppings of choice. Enjoy a warm bowl of rich broth, chewy noodles, and the sweet-savory punch of the inari-age.",
            defaultDestination: "checkIn",
            buttonText: "Back to Start"
        },
        MediumStep1: {
            title: "Leveled Up Mode: Gather Ingredients",
            story: "Way to choose a worthy challenge! For noodle soups, attention to broth can make a noticeable difference. Let's start by gathering ingredients.",
            ingredients: "What you'll need: frozen udon noodle pack, dashi ingredients (konbu, bonito flakes, water), inari-age, narutomaki, green onion.",
            steps: "Udon packs come frozen and dried, but the frozen ones usually hold up better after cooking and are more suitable to noodle soup dishes. Dashi ingredients usually include dried konbu kelp and dried bonito flakes, both of which can be used straight out of the package. Inari-age, fried tofu pouches marinated in a sweet and savory broth, can be bought pre-made in a can or refridgerated package. Narutomaki, scallop-edged fish cake with a pink swirl in the middle (which might be familiar to some anime buffs), comes cooked and ready-to-eat either from the fridge or defrosted/parboiled from freezer.",
            defaultDestination: "DashiStepMedium",
            buttonText: "Let's go!"
        },
        DashiStepMedium: {
            title: "Prepare Dashi",
            story: "Making dashi from scratch can be a bit daunting at first, but the process can ease into habit with practice, even become a therapeutic or meditative way to enter your cooking process. Or, you can prepare your dashi in advance to save brain space AND have on hand for all sorts of brothy, umami deliciousness (miso soup, soba noodles, braised veggies).",
            ingredients: "What you'll need: dried konbu, dried bonito flakes, water.",
            steps: "Prepare the dashi. Let konbu soak into pot of water until completely submerged (5-10 min). Turn heat to high and let slowly come to near-boil. When you see bubbles start to form, remove konbu. Put loose bonito flakes in a teabag and place in near-boiling water. After liquid comes to a boil, turn off heat and let soak for 10 minutes. Remove bonito flakes teabag. Dashi is complete.",
            defaultDestination: "NoodlesToppings",
            buttonText: "Keep going..."
        },
        NoodlesToppings: {
            title: "Prepare Noodles & Toppings",
            story: "This can be done while wait for your dashi to finish steeping or maybe this is where you start if you've got dashi on hand to reheat!",
            ingredients: "What you'll need: frozen udon noodle pack, inari-age, narutomaki, green onion.",
            steps: "Cook noodles according to package directions. Drain under running water, shake off excess water, and set aside in serving bowl. Slice some green onion and narutomaki as garnish. Optional: squeeze extra liquid from inari-age for a milder, chewier experience.",
            defaultDestination: "BrothStep",
            buttonText: "Almost there..."
        },
        BrothStep: {
            title: "Prepare Noodle Broth",
            story: "Now let's come back to our dashi and turn it into noodle broth!",
            ingredients: "What you'll need: dashi, mirin, sugar, soy sauce, salt.",
            steps: "Add mirin, sugar, soy sauce, and salt. Bring to boil and turn off heat. Noodle broth complete.",
            defaultDestination: "DinnerServedMedium",
            buttonText: "So close..."
        },
        DinnerServedMedium: {
            title: "Dinner is Served!",
            story: "Now you just put everything together!",
            steps: "Pour the prepared dashi over noodles, just so most of the noodles are submerged. Top artfully (or not) with at least 2 inari-age slices and additional toppings of choice. Enjoy a warm bowl of chewy noodles in a deeply flavored broth of your own making. It compliments the sweet-savory punch of the inari-age perfectly.",
            defaultDestination: "checkIn",
            buttonText: "Back to Start"
        },
        HardStep1: {
            title: "All Out Mode: Gather Ingredients",
            story: "The kitsune in this recipe means fox, either because the primary topping on this dish, inari-age, is believed to be a favorite treat of the fox spirit or because it approximates the color of a fox. Either way, to choose to make your own inari-age is to choose the path of god-tier (or fox-tier) kitsune udon. Let's gather our ingredients.",
            ingredients: "What you'll need: frozen udon noodle pack, dashi ingredients (konbu, bonito flakes, water), inari-age ingredients (aburaage, dashi, soy sauce, mirin, sugar), narutomaki, green onion.",
            steps: "Udon packs come frozen and dried, but the frozen ones usually hold up better after cooking and are more suitable to noodle soup dishes. Dashi ingredients usually include dried konbu kelp and dried bonito flakes, both of which can be used straight out of the package. Inari-age is made by simmering aburaage (fried tofu pouches) in a sweet and savory broth. Narutomaki, scallop-edged fish cake with a pink swirl in the middle (which might be familiar to some anime buffs), comes cooked and ready-to-eat either from the fridge or defrosted/parboiled from freezer.",
            defaultDestination: "DashiStepHard",
            buttonText: "Let's go!"
        },
        DashiStepHard: {
            title: "Prepare Dashi",
            story: "Making dashi from scratch can be a bit daunting at first, but the process can ease into habit with practice, even become a therapeutic or meditative way to enter your cooking process. Or, you can prepare your dashi in advance to save brain space AND have on hand for all sorts of brothy, umami deliciousness: miso soup, soba noodles, braised veggies, and -- you guessed it -- inari-age! Your dashi will be serving double duty this recipe, so make sure to keep in mind while portioning.",
            ingredients: "What you'll need: dried konbu, dried bonito flakes, water.",
            steps: "Prepare the dashi. Let konbu soak into pot of water until completely submerged (5-10 min). Turn heat to high and let slowly come to near-boil. When you see bubbles start to form, remove konbu. Put loose bonito flakes in a teabag and place in near-boiling water. After liquid comes to a boil, turn off heat and let soak for 10 minutes. Remove bonito flakes teabag. Dashi is complete.",
            defaultDestination: "InariAge",
            buttonText: "Keep going..."
        },
        InariAge: {
            title: "Prepare Inari-age",
            story: "Congratulations! You are about to level-up with the power to control this topping's flavor intensity! If you like a sweeter finish to this chewy delight, you can up the sugar content or tamp down for a more subtle sweetness. Like dashi, this can be made in advance for easier dinner preparation. It also works well as a topping for soba or rice and, of course, as a wrapper for inarizushi.",
            ingredients: "What you'll need: aburaage (deep-fried tofu pouch), dashi, soy sauce, mirin, sugar.",
            steps: "Prepare aburaage by slicing by half width-wise. Cook in saucepan of boiling water for 2 minutes to remove factory oil. Strain and press gently (with spoon or ladel) to squeeze out excess liquid. Combine dashi, soy sauce, mirin, sugar in saucepan and bring to boil. Add aburaage in broth, arranging so they are all submerged in liquid. Reduce heat. Place drop lid on top to keep submerged and cook for 30-40 minutes. Remove from heat and let cool. Inari-age complete.",
            defaultDestination: "NoodlesToppingsHard",
            buttonText: "You got this!"
        },
        NoodlesToppingsHard: {
            title: "Prepare Noodles & Additional Toppings",
            story: "This can be done while wait for your dashi to finish steeping or maybe you're a rockstar and have some dashi on hand to reheat!",
            ingredients: "What you'll need: frozen udon noodle pack, homemade inari-age, narutomaki, green onion.",
            steps: "Cook noodles according to package directions. Drain under running water, shake off excess water, and set aside in serving bowl. Slice some green onion and narutomaki as garnish. Optional: squeeze extra liquid from inari-age for a milder, chewier experience.",
            defaultDestination: "BrothStepHard",
            buttonText: "Almost there..."
        },
        BrothStepHard: {
            title: "Prepare Noodle Broth",
            story: "Now let's come back to our dashi and turn it into noodle broth!",
            ingredients: "What you'll need: dashi, mirin, sugar, soy sauce, salt.",
            steps: "Add mirin, sugar, soy sauce, and salt. Bring to boil and turn off heat. Noodle broth complete.",
            defaultDestination: "DinnerServedHard",
            buttonText: "So close..."
        },
        DinnerServedHard: {
            title: "Dinner is Served!",
            story: "Now you just put everything together!",
            steps: "Pour the prepared dashi over noodles, just so most of the noodles are submerged. Top artfully (or not) with at least 2 inari-age slices and additional toppings of choice. Enjoy this warm bowl of chewy noodles by taking in a sip of broth. As the flavor awakens your palette, take a moment to admire your homemade inari-age sitting organically atop the noodles, charmingly wrinkly and pillowy soft. Its not-too-sweet-and-savory punch is complimented perfectly by the mild, satisfying depth of your broth.",
            image: "kitsune_udon_justonecookbook.jpg",
            defaultDestination: "checkIn",
            buttonText: "Back to Start"
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
    let image = "";
    let resetButton = document.querySelector("#reset-button")
    resetButton.addEventListener('click', function() {
        window.location.reload();
        return false;
    })
    if (story[story.currentScene].image) {
        image = "<img></img>"
    }
    if (story[story.currentScene].buttonText) {
        text = story[story.currentScene].buttonText
    }
    if (story[story.currentScene].ingredients) {
        content.innerHTML = `
        <div class="content">
        <h1>${story[story.currentScene].title}</h1>
        <h4></h4>
        <p>${story[story.currentScene].story}</p>
        <br></br>
        <p>${story[story.currentScene].ingredients}</p>
        <br></br>
        <p>${story[story.currentScene].steps}</p>
        </div>
        ${image}
        ${getInputs()}
        <button id = "submit-button">${text}</button>
        `
    } else if (story[story.currentScene].steps) {
        content.innerHTML = `
        <div class="content">
        <h1>${story[story.currentScene].title}</h1>
        <h4></h4>
        <p>${story[story.currentScene].story}</p>
        <br></br>
        <p>${story[story.currentScene].steps}</p>
        </div>
        ${image}
        ${getInputs()}
        <button id = "submit-button">${text}</button>
        `
    } else {
        content.innerHTML = `
        <div class="content">
        <h1>${story[story.currentScene].title}</h1>
        <h4></h4>
        <p>${story[story.currentScene].story}</p>
        <br></br>
        </div>
        ${image}
        ${getInputs()}
        <button id = "submit-button">${text}</button>
        `
    };
    if (story[story.currentScene].image) {
        document.querySelector("img").src = `./img/${story[story.currentScene].image}`
    };
    let button = document.querySelector("#submit-button");
    button.addEventListener('click', function () {
        getSelectedInput()
    });
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