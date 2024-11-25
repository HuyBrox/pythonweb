document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const title = params.get('title');
    const description = params.get('description');
    const genre = params.get('genre');
    const time = params.get('time');
    const year = params.get('year');

    if (title !== null && description !== null && year !== null) {
        document.getElementById('movieTitle').textContent = title;
        document.getElementById('movieDescription').textContent = description;
        document.getElementById('movieGenre').textContent = "Thể loại: " + (genre !== null ? genre : "N/A");
        document.getElementById('movieTime').textContent = "Thời lượng: " + (time !== null ? time : "N/A");
        document.getElementById('movieYear').textContent = "Năm sản xuất: " + year;
    } else {
        document.getElementById('movieTitle').textContent = "Title: N/A";
        document.getElementById('movieDescription').textContent = "Description: N/A";
        document.getElementById('movieGenre').textContent = "Genre: N/A";
        document.getElementById('movieTime').textContent = "Time: N/A";
        document.getElementById('movieYear').textContent = "Year: N/A";
    }
});

//movieVideo
const videoUrl = "đường_dẫn_video_của_bạn.mp4";

const movieVideo = document.getElementById('movieVideo');
movieVideo.src = videoUrl;

movieVideo.style.display = 'block';

