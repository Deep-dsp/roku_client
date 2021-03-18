export default{
    name: "TheMovieThumbnail",
    props: ['movie'],
    template:`
    <div class="song-box">
        <img @click="movieThumbSelected" :src='"images/" + movie.movie_thumb' alt="movie thumb">
        <p>{{movie.movie_title}}</p>
    </div>
    `,

    mounted:function(){
        console.log("Selection->Movie Thumbnail Component");
    },

    methods:{
        movieThumbSelected(){
            // document.querySelector('.pop-box').classList.add('pop-close');
            console.log(`thumbnail: "${this.movie.movie_title}" movie selected from component`);
            this.$emit("showmoviedata",this.movie);
        }
    }
}