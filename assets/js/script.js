var nav_element = document.querySelectorAll('.nav_element'); // Here we select all navigation elements.
var images_figure_div = document.getElementsByClassName('figure_div'); // Here we select all images.

nav_element.forEach(function (item, index) {
  // Add event listener to all elements.
  item.addEventListener('click', filter_and_show_img);
});

function filter_and_show_img(e) {
  // This function filter and show images that belogs to specific category.
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
  setTimeout(function () {
    element.children[0].style.cssText =
      'transition: .5s; width: 260px; height: 200px;';
  }, 500);
}

function hide_figure_div(element) {
  // This function make element hide itself.
  element.children[0].style.cssText = 'transition: .5s; width: 0; height: 0;';
  setTimeout(function () {
    element.style.cssText = 'display: none;';
  }, 500);
}
