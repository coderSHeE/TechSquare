function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


/*--------date updatation ------*/

var today = moment();

      // Get the element with the id "date"
      var dateElement = document.getElementById("date");

      // Set the innerHTML of the element to the current date
      dateElement.innerHTML = today.format("MMMM Do YYYY, h:mm:ss a");

/*-------------------------*/


const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
const navItem = document.querySelector('a.toggle-nav');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  // Check if working...
  console.log(count);
}

function toggleNavigation(){
  this.nextElementSibling.classList.toggle('active');
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);
navItem.addEventListener('click', toggleNavigation);



/*------------------cards events--------------------*/
(function() {
    var images;
  
    images = ["https://source.unsplash.com/featured/?mountains", "https://source.unsplash.com/featured/?hiking", "https://source.unsplash.com/featured/?kayak", "https://source.unsplash.com/featured/?forest", "https://source.unsplash.com/featured/?mountain", "https://source.unsplash.com/featured/?trail", "https://source.unsplash.com/featured/?outdoors", "https://source.unsplash.com/featured/?norway"];
  
    $('div.card-image1').each(function() {
      var random_image_index;
      random_image_index = Math.floor(images.length * Math.random());
      return $(this).css('background-image', 'url(' + images[random_image_index] + ')');
    });
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLE1BQUEsR0FBUyxDQUNQLGlEQURPLEVBRVAsOENBRk8sRUFHUCw2Q0FITyxFQUlQLDhDQUpPLEVBS1AsZ0RBTE8sRUFNUCw2Q0FOTyxFQU9QLGdEQVBPLEVBUVQsOENBUlM7O0VBV1QsQ0FBQSxDQUFFLGdCQUFGLENBQW1CLENBQUMsSUFBcEIsQ0FBeUIsUUFBQSxDQUFBLENBQUE7QUFDekIsUUFBQTtJQUFFLGtCQUFBLEdBQXFCLElBQUksQ0FBQyxLQUFMLENBQVcsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUEzQjtXQUNyQixDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsR0FBUixDQUFZLGtCQUFaLEVBQWdDLE1BQUEsR0FBUyxNQUFNLENBQUMsa0JBQUQsQ0FBZixHQUFzQyxHQUF0RTtFQUZ1QixDQUF6QjtBQVhBIiwic291cmNlc0NvbnRlbnQiOlsiaW1hZ2VzID0gW1xuICBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9mZWF0dXJlZC8/bW91bnRhaW5zXCIsXG4gIFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2ZlYXR1cmVkLz9oaWtpbmdcIixcbiAgXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vZmVhdHVyZWQvP2theWFrXCIsXG4gIFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2ZlYXR1cmVkLz9mb3Jlc3RcIixcbiAgXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vZmVhdHVyZWQvP21vdW50YWluXCJcbiAgXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vZmVhdHVyZWQvP3RyYWlsXCJcbiAgXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vZmVhdHVyZWQvP291dGRvb3JzXCJcblwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2ZlYXR1cmVkLz9ub3J3YXlcIlxuXVxuXG4kKCdkaXYuY2FyZC1pbWFnZScpLmVhY2ggLT5cbiAgcmFuZG9tX2ltYWdlX2luZGV4ID0gTWF0aC5mbG9vcihpbWFnZXMubGVuZ3RoICogTWF0aC5yYW5kb20oKSlcbiAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcgKyBpbWFnZXNbcmFuZG9tX2ltYWdlX2luZGV4XSArICcpJykiXX0=
  //# sourceURL=coffeescript