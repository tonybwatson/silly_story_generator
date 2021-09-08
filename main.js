// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day. Bob laughed, and continued on their way.';

insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas',
    'Rudolph the red-nosed reindeer'
]

insertY = [
    'the soup kitchen',
    'Disneyland',
    'the White House',
    'Skull Island'
]

insertZ = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away',
    'caught fire and was eaten by a shark'
]

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
//create new variable to make new story each time button is pressed & function is run
    var newStory = storyText;

// variables to grab items from arrays
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

// replace text in storyText  ('' with text in item)
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    

// replace name with custom name
  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  } 

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14) + ' stone';
    let temperature =  Math.round((94 - 32)*5/9) + ' centigrade';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }
    
    story.textContent = newStory;
    story.style.visibility = 'visible';
  
}