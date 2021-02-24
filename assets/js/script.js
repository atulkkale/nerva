var nav_element = document.querySelectorAll('.nav_element'); // Here we select all navigation elements.
var images_figure_div = document.getElementsByClassName('figure_div'); // Here we select all images.
// console.log(images_figure_div);
// console.log(images_figure_div.length);
// console.log(images_figure_div[3].children);

nav_element.forEach(function (item, index) {
  // Add event listener to all elements.
  item.addEventListener('click', filter_and_show_img);
});

function filter_and_show_img(e) {
  // This function filter and show images that belogs to specific category.
  var category_name = e.target.innerText;

  switch (category_name) {
    case 'All':
      for (i = 0; i <= images_figure_div.length - 1; i++) {
        var element = images_figure_div[i];
        show_figure_div(element);
      }

      break;

    case 'Wallpapers':
      console.log('Clicked Wallpapers');

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
      console.log('Clicked Logos');

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
      console.log('Clicked Business Card');

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
      console.log('Clicked Stationary');

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
      console.log('Clicked Websites');

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
      console.log('Clicked Mobile Apps');

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
  element.style.cssText = 'display: block;';
  setTimeout(function () {
    element.children[0].style.cssText =
      'transition: .5s; width: 260px; height: 200px;';
  }, 500);
}

function hide_figure_div(element) {
  element.children[0].style.cssText = 'transition: .5s; width: 0; height: 0;';
  setTimeout(function () {
    element.style.cssText = 'display: none;';
  }, 500);
}
