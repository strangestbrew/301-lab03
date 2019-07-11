'use strict';

console.log('hello');

// Refactored constructor function

function DataSet(rawDataObject) {
  for(let key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
}

DataSet.prototype.toHTML = function() {
  // Grabbing the template from the HTML
  let template = $('#photo-template').html();
  // Using handlebars to compile - TODO: initiate handlebar
  let templateRender = Handlebars.compile(template);
  // Returning HTML from this method
  return templateRender(this);
};

// function NewData (idx) {
//   this.image_url = idx.image_url;
//   this.title = idx.title;
//   this.description = idx.description;
//   this.keyword = idx.keyword;
//   this.horns = idx.horns;
// }
// NewData.list = [];

// Use AJAX, specifically $.get(), to read the provided JSON file.
function readFile(){
  $.get('../data/page-2.json', 'json')
    .then( data => {
      data.forEach(idx => {
        // Each object should become a new instance of a constructor function.
        DataSet.list.push(new DataSet(idx));
      });
    })
    .then(() => {
      renderImage();
      displayPage();
    });
}
readFile();

function renderImage() {
  DataSet.list.forEach(element => {
    const $newImage = $('#photo-template').clone();

    $newImage.find('section').text(element.name);
    $newImage.find('h2').text(element.rank);
    $newImage.find('p').text(element.type);
    $newImage.attr('data-type', DataSet.list.type);

    $('.DataSet.lists').append($newImage);

  });

}

function displayPage () {
  DataSet.list.forEach((image) => {
    const $newImage = $('#photo-template').clone();

    $newImage.find('h2').text(image.title);
    $newImage.find('img').attr('src', image.image_url);
    $newImage.find('p').text(image.keyword);
    $newImage.find('img').attr('alt', image.description);
    $newImage.removeAttr('id');
    console.log($newImage);
    $('main').append($newImage);
  })
}