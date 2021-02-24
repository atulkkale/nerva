var nav_element = document.querySelectorAll('.nav_element'); // Here we select all navigation elements.
var images_figure_div = document.getElementsByClassName('figure_div'); // Here we select all images.
var hamburger = document.querySelector('.hamburger');
var clickrecord = 0; // Set 1 if hamburger get clicked or set to 0.

hamburger.addEventListener('click', toggle_menu); // This function toggle navigation menu in responsive mode.

nav_element.forEach(function (item, index) {
  // Add event listener to all elements.
  item.addEventListener('click', filter_and_show_img); // This function filter and show images that belogs to specific category.
  item.addEventListener('click', active_button); // This function gives styles to active category and remove styles of unactive category.
});

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
  element.style.cssText = 'display: block;';
  var curr_window_width = window.innerWidth; // Storing window width to give style for responsive.
  setTimeout(function () {
    if (curr_window_width > 1080) {
      element.children[0].style.cssText =
        'transition: .5s; width: 260px; height: 200px;';
    } else {
      element.children[0].style.cssText =
        'transition: .5s; width: 120px; height: 85px;';
    }
  }, 500);
}

function hide_figure_div(element) {
  // This function make element hide itself.
  element.children[0].style.cssText = 'transition: .5s; width: 0; height: 0;';
  setTimeout(function () {
    element.style.cssText = 'display: none;';
  }, 500);
}

function active_button(e) {
  var each_navigation_element = e.target;
  each_navigation_element.classList.add('active_btn');

  var node = each_navigation_element.parentNode.firstChild; // Store firstChild for start of looping.

  while (node) {
    if (node !== each_navigation_element && node.nodeType === Node.ELEMENT_NODE)
      // Remove styles of unactive elements.
      node.classList.remove('active_btn');
    node = node.nextElementSibling;
  }
}

// Hamburger code starts here.
function toggle_menu(e) {
  var nav_menu = hamburger.nextElementSibling;
  if (clickrecord === 0) {
    nav_menu.classList.remove('menu_hide');
    nav_menu.classList.add('menu_show');
    clickrecord = 1;
  } else {
    nav_menu.classList.remove('menu_show');
    nav_menu.classList.add('menu_hide');
    clickrecord = 0;
  }
}
