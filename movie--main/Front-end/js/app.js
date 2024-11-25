const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 1) {
      movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 375
        }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }

  });

  console.log(Math.floor(window.innerWidth / 270));
});
// phần lướt
document.querySelectorAll('.movie-list').forEach(movieList => {
  let startX, startY;
  let endX, endY;
  let initialPosition = 0;
  let isHorizontalScroll = false; // Biến để xác định có phải lướt ngang không

  movieList.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isHorizontalScroll = false; // Khởi tạo lại khi bắt đầu lướt
  });

  movieList.addEventListener('touchmove', e => {
    endX = e.touches[0].clientX;
    endY = e.touches[0].clientY;
    const deltaX = Math.abs(endX - startX);
    const deltaY = Math.abs(endY - startY);

    if (deltaX > deltaY && !isHorizontalScroll) {
      e.preventDefault();
      isHorizontalScroll = true;
    }

    if (isHorizontalScroll) {
      endX = e.touches[0].clientX;
    }
  }, { passive: false });

  movieList.addEventListener('touchend', () => {
    if (isHorizontalScroll) {
      const moveAmount = startX - endX;
      if (window.innerWidth <= 1560) {
        if (moveAmount > 0) {
          // Lướt từ trái sang phải
          initialPosition -= Math.abs(moveAmount);
        } else {
          // Lướt từ phải sang trái
          initialPosition += Math.abs(moveAmount);
        }
        initialPosition = Math.min(initialPosition, 0);
        const maxScroll = -(movieList.scrollWidth - movieList.offsetWidth) - 30;
        initialPosition = Math.max(initialPosition, maxScroll);

        // Cập nhật vị trí mới
        movieList.style.transform = `translateX(${initialPosition}px)`;
      }
    }
  });
});




//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,span,.cast,.director,.nation,.category,.span,.profile-name,.arrow"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
// menu-list
const menuItems = document.querySelectorAll('.menu-list-item');

menuItems.forEach(item => {
  item.addEventListener('click', function () {
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    this.classList.add('active');
  });
});
// new
document.onclick = function (e) {
  let x = e.pageX;
  let y = e.pageY;

  let span = document.createElement('span');
  span.classList.add('click_effect');
  span.style.top = y + "px";
  span.style.left = x + "px";
  document.body.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 600);
}
// search
document.querySelector('.fa-search').addEventListener('click', function () {
  document.querySelector('.overlay').style.display = 'block';
  document.querySelector('.search-overlay').style.display = 'block';
});

document.querySelector('.overlay').addEventListener('click', function () {
  this.style.display = 'none';
  document.querySelector('.search-overlay').style.display = 'none';
});

document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.search-overlay').style.display = 'none';
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');

  searchInput.addEventListener('input', function () {
    if (searchInput.value.trim() !== '') {
      searchResults.style.display = 'flex';
    } else {
      searchResults.style.display = 'none';
    }
  });
  document.addEventListener('click', function (event) {
    if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
      searchInput.value = '';
      searchResults.style.display = 'none';
    }
  });
});

function displayMovies(filteredMovies) {
  const resultsContainer = document.querySelector('.search-results');
  resultsContainer.innerHTML = '';

  if (filteredMovies.length > 0) {
    filteredMovies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.textContent = `${movie.title} (${movie.year}) - ${movie.description}`;
      resultsContainer.appendChild(movieElement);
    });
  } else {
    resultsContainer.innerHTML = '<div>Không tìm thấy phim.</div>';
  }
}

// Lắng nghe sự kiện 'input' và tìm kiếm phim
document.querySelector('.search-input').addEventListener('input', function (event) {
  const searchTerm = event.target.value.toLowerCase();

  if (searchTerm.trim()) {
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
  } else {
    document.querySelector('.search-results').innerHTML = '';
  }
});

// video
var video = document.getElementById('myVideo');
var progressBar = document.getElementById('progressBar');

video.addEventListener('timeupdate', function () {
  var value = (100 / video.duration) * video.currentTime;
  progressBar.value = value;
});

progressBar.addEventListener('input', function () {
  var time = (progressBar.value / 100) * video.duration;
  video.currentTime = time;
});










