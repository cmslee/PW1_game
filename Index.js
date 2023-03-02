//draft 1 with filler text

const story = {
    currentScene: "attack",
    attack: {
        title: "Chapter 1",
        story: "Are you ready, ?",
        choices: [
            {
                choice: "Yes. Let's do this.",
                //create property destination to indicate where scene will go next
                destination: "battle"
            },
            {
                choice: "No. I'll be back.",
                destination: "goHome"
            }
        ]
    },
    // battle: {
    //     title: "Chapter 2",
    //     story: "Yargggghhhh",
    //     choices: [
    //         {
    //             choice: "Grab your fork and charge.",
    //             destination: "fork"
    //         },
    //         {
    //             choice: "Retreat and fight another day.",
    //             destination: "goHome"
    //         }
    //     ]
    // },
    // goHome: {
    //     title: "Whew.",
    //     story: "Good job wherever you land. Take a breather and return to this another day."
    // }
}

let button = document.querySelector("#start-button")
let input = document.querySelector('#name-input');
const content = document.querySelector('#content');
// button.addEventListener('click', renderScene)

// function renderScene(){
//     content.innerHTML = `
//     <h1>${story[story.currentScene].title}</h1>
//     <p>${story[story.currentScene].story}</p>
//     ${getInputs()}
//     <button id="submit-button">Next</button>
//     `
//     let button = document.querySelector("#submit-button")
//     button.addEventListener('click', function(){

//     })
// }

function getInputValue(){
    //this says find variable input and makes sure that it has an attribute of type that says "radio"; what querySelectorAll does is grab all the elements noted and returns it as an array; note: quotation mark styles around radio and input[] must be different!
    let inputs = document.querySelectorAll('input[type="radio"]')
    for (let i=0; i<inputs.length; i++){
        //checked method is used for choices
        if (inputs[i].checked){
            //currently getting stuck tring to get this to log!!!    
            console.log(inputs[i])
        }
    }
}

function getInputs() {
    let input = ""
    for (let i = 0; i < story[story.currentScene].choices.length; i++) {
        input += `
        <div>
        <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices"></input>
        <label for = "radio${i}">${story[story.currentScene].choices[i].choice}</label>
        </div>
        `
        // this log just runs down the location for what needs to be logged and attaches the i in brackets to the varying property
        // console.log(story[story.currentScene].choices[i].choice)
    }
    //this acts as value for ${getInputs()}
    return input;
}