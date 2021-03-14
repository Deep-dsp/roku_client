export default{
    name: "TheMovieThumbnail",
    props: ['movie'],
    template:`
    <div class="song-box">
        <img :src='"images/" + movie.movie_thumb' alt="movie thumb">
        <p>{{movie.movie_title}}</p>
    </div>
    `
}