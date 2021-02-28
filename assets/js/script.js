var nav_element = document.querySelectorAll('.nav_element a'); // Here we select all navigation elements.
var images_figure_div = document.getElementsByClassName('figure_div'); // Here we select all images in all images window section.
var fixed_div = document.getElementsByClassName('fixed_div'); // Here we select all images including footer images.
console.log(fixed_div);
var hamburger = document.querySelector('.hamburger');
var hamburger_close = document.getElementById('hamburger_close');

hamburger.addEventListener('click', show_menu); // This function show navigation menu in responsive mode.
hamburger_close.addEventListener('click', hide_menu); // This function hides navigation menu in responsive mode.

nav_element.forEach(function (item, index) {
  // Add event listener to all elements.
  item.addEventListener('click', filter_and_show_img); // This function filter and show images that belogs to specific category.
  item.addEventListener('click', active_button); // This function gives styles to active category and remove styles of unactive category.
});

for (x of fixed_div) {
  x.addEventListener('click', present_image); // This function present image in fixed window.
}

function filter_and_show_img(e) {
  var category_name = e.target.innerText; // Create category_name variable to store specific category of each element.

  switch (
    category_name // Depends upon category we show and hide elements.
  ) {
    case 'All':
      for (i = 0; i <= images_figure_div.length - 1; i++) {
        var element = images_figure_div[i];
        show_figure_div(element);
      }

      break;

    case 'Wallpapers':
      for (i = 0; i <= images_figure_div.length - 1; i++) {
        if (images_figure_div[i].classList.contains('wallpaper')) {
          var element = images_figure_div[i];
          show_figure_div(element);
        } else {
          var element = images_figure_div[i];
          hide_figure_div(element);
        }
      }
      break;

    case 'Logos':
      for (i = 0; i <= images_figure_div.length - 1; i++) {
        if (images_figure_div[i].classList.contains('logo')) {
          var element = images_figure_div[i];
          show_figure_div(element);
        } else {
          var element = images_figure_div[i];
          hide_figure_div(element);
        }
      }
      break;

    case 'Business Card':
      for (i = 0; i <= images_figure_div.length - 1; i++) {
        if (images_figure_div[i].classList.contains('business_card')) {
          var element = images_figure_div[i];
          show_figure_div(element);
        } else {
          var element = images_figure_div[i];
          hide_figure_div(element);
        }
      }
      break;

    case 'Stationary':
      for (i = 0; i <= images_figure_div.length - 1; i++) {
        if (images_figure_div[i].classList.contains('stationary')) {
          var element = images_figure_div[i];
          show_figure_div(element);
        } else {
          var element = images_figure_div[i];
          hide_figure_div(element);
        }
      }
      break;

    case 'Websites':
      for (i = 0; i <= images_figure_div.length - 1; i++) {
        if (images_figure_div[i].classList.contains('websites')) {
          var element = images_figure_div[i];
          show_figure_div(element);
        } else {
          var element = images_figure_div[i];
          hide_figure_div(element);
        }
      }
      break;

    case 'Mobile Apps':
      for (i = 0; i <= images_figure_div.length - 1; i++) {
        if (images_figure_div[i].classList.contains('mobile_apps')) {
          var element = images_figure_div[i];
          show_figure_div(element);
        } else {
          var element = images_figure_div[i];
          hide_figure_div(element);
        }
      }
      break;

    default:
      break;
  }
}

function show_figure_div(element) {
  // This function make element show itself.
  element.classList.remove('hide_figure_div');
  element.classList.add('show_figure_div');
  console.log(element.firstElementChild.firstElementChild);
  setTimeout(function () {
    element.firstElementChild.firstElementChild.classList.remove(
      'hide_figure_img'
    );
    element.firstElementChild.firstElementChild.classList.add(
      'show_figure_img'
    );
  }, 500);
}

function hide_figure_div(element) {
  // This function make element hide itself.
  element.firstElementChild.firstElementChild.classList.remove(
    'show_figure_img'
  );
  element.firstElementChild.firstElementChild.classList.add('hide_figure_img');
  setTimeout(function () {
    element.classList.remove('show_figure_div');
    element.classList.add('hide_figure_div');
  }, 500);
}

function present_image(e) {
  var image = e.target;

  switch (image.tagName) {
    case 'IMG':
      console.log('img');
      image.parentNode.parentNode.classList.add('present_image');
      break;

    case 'LI':
      console.log('li');
      image.classList.remove('present_image');
      image_present_click = 0;

    default:
      break;
  }
}

function active_button(e) {
  var each_navigation_element = e.target;
  each_navigation_element.classList.add('active_btn');
  var node = each_navigation_element.parentNode.parentNode.firstElementChild; // Store firstChild for start of looping.

  while (node) {
    if (
      node.firstElementChild !== each_navigation_element &&
      node.nodeType === Node.ELEMENT_NODE
    )
      // Remove styles of unactive elements.
      node.firstElementChild.classList.remove('active_btn');
    node = node.nextElementSibling;
  }
}

// Hamburger code starts here.
function show_menu(e) {
  var nav_menu = hamburger.nextElementSibling;
  nav_menu.classList.remove('menu_hide');
  nav_menu.classList.add('menu_show');
}

function hide_menu() {
  var nav_menu = hamburger.nextElementSibling;
  nav_menu.classList.remove('menu_show');
  nav_menu.classList.add('menu_hide');
}
