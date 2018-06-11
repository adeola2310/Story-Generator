 var customname = document.getElementById('.customname');
     var randomize = document.querySelector('.generate story');
     var story = document.querySelector('.story');
     var storyText = "It was 94 farenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
     var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
     var inserty = ["the soup kitchen", "Disney land", "the White house"];
     var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
     var newStory = storyText;
     var xItem = randomValueFromArray(insertX);
     var yItem =  randomValueFromArray(insertY);
     var zItem =  randomValueFromArray(insertZ);
     // make a methodcall of the new story
     newStory = newStory.replace('.insertX','xItem');
      newStory = newStory.replace('.insertY','yItem');
       newStory = newStory.replace('.insertZ','zItem');

    function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

randomize.addEventListener('click', result);

function result() {

  if(customname.value !== '') {
    var name = customname.value;
    newStory = newStory.replace("Adeola", name);

  }
  if(document.getElementById("uk").checked) {
    var weight = Math.round(300/14) + 'stone';
    var temperature =  Math.round(((94-32)*5)/9) + 'centigrade';

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

