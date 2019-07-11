'use strict';

console.log('hello');

// Refactored constructor function

let hornsGallery = [];

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

hornsDataSet.forEach(hornsObject => {
  hornsGallery.push(new DataSet(hornsObject));
});

hornsGallery.forEach(ourNewHornObject => {
  $('#hornsGallery').append(ourNewHornObject.toHTML());
});

//JS function to populate filter list
var sel = $('<select>').appendTo('body');
$(hornsDataSet).each(function() {
  sel.append($('<option>').attr('value', this.keyword).text(this.text));
});



