document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const movieContainers = document.querySelectorAll('.movie');

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase();

        movieContainers.forEach(movie => {
            const title = movie.querySelector('.movie-info h2').textContent.toLowerCase();
            
            if (title.includes(query)) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });
    });
});