// data content movies
const movies = [
    { title: "DJANGO", description: "Hành Trình Django - Django Unchained kể về một nô lệ da đen được trả tự do tên là Django cùng một thợ săn tiền thưởng đi dọc nước Mỹ để tìm và giải cứu vợ của anh khỏi Candie - một chủ đồn điền.", genre: "Hành động", time: "165 phút", year: 2012 },
    { title: "Her", description: "Her là một bộ phim khoa học viễn tưởng xen lẫn lãng mạn và hài chính kịch do Hoa Kỳ sản xuất.", genre: "Chính kịch,Khoa Học,Viễn Tưởng", time: "126 phút", year: 2013 },
    { title: "Star Wars", description: "Chiến tranh giữa các vì sao diễn ra trong một thiên hà giả tưởng do mỹ sản xuất.", genre: "Western", time: "165 phút", year: 2010 },
    { title: "Đội Bóng Trong Mơ", description: "Đây là một bộ phim hiếm hoi của Hàn Quốc lấy chủ đề về thể thao.", genre: "Western", time: "165 phút", year: 2023 },
    { title: "1917", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic fugit similique accusantium.", genre: "Western", time: "165 phút", year: 2009 },
    { title: "Avengers", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic fugit similique accusantium.", genre: "Western", time: "165 phút", year: 2009 },
];
const buttons = document.querySelectorAll('.custom-btn');
const containerMovies = document.querySelector('.container-movies');

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        const dataIndex = parseInt(this.getAttribute('data-index'));
        const movie = movies[dataIndex];

        // Get the existing overlay element
        var overlay = document.querySelector('.overlay-movies');

        // Add movie details to overlay
        document.getElementById('movieTitle').innerText = movie.title;
        document.getElementById('movieDescription').innerText = movie.description;
        document.getElementById('movieGenre').innerText = movie.genre;
        document.getElementById('movieTime').innerText = movie.time;
        document.getElementById('movieYear').innerText = movie.year;

        // Show the overlay with animation
        overlay.style.display = 'flex';
        overlay.style.opacity = '0';
        setTimeout(() => overlay.style.opacity = '1', 100);

        // Disable scroll on .container-movies
        containerMovies.style.overflow = 'hidden';
    });
});

// Add close button to overlay
var closeButton = document.createElement('button');
closeButton.innerText = 'X';
closeButton.style.position = 'absolute';
closeButton.style.top = '10px';
closeButton.style.right = '10px';
document.querySelector('.overlay-movies').appendChild(closeButton);

// Close overlay when clicking on close button or outside of overlay
document.addEventListener('click', function (event) {
    var overlay = document.querySelector('.overlay-movies');
    if (event.target === overlay || event.target === closeButton) {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.style.display = 'none', 500);
        // Enable scroll on .container-movies
        containerMovies.style.overflow = 'auto';
    }
});






