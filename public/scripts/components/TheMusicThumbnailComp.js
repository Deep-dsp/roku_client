export default{
    name: "TheMusicThumbnail",
    props: ['music'],
    template:`
        <div class="song-box">
            <img @click="thumbSelected" :src='"/images/music/" + music.thumbnail' alt="music thumb">
            <p>{{music.song_name}}</p>
            <p>-By {{music.singer}}</p>
        </div>
    `,

    mounted:function(){
        console.log("Selection from Music Thumbnail Component");
    },

    methods:{
        thumbSelected(){
            console.log(`Thumbnail image for "${this.music.song_name}" song selected from component`);
            this.$emit("showmydata", this.music);
        }
    }
}