export default{
    name: "TheMusicThumbnail",
    props: ['music'],
    data:{
        filter_image: false
    },

    template:`
        <div class="song-box">
            <img @click="thumbSelected" :src='"/images/music/" + music.thumbnail' alt="music thumb" :class="{'filter-data' : filter_image }">
            <p>{{music.song_name}}</p>
            <p>-By {{music.singer}}</p>
        </div>
    `,

    mounted:function(){
        console.log("Selection from Music Thumbnail Component");
    },

    methods:{
        thumbSelected(){
            this.filter_image = true;
            console.log(`Thumbnail image for "${this.music.song_name}" song selected from component`);
            this.$emit("showmydata", this.music);
        }
    }
}