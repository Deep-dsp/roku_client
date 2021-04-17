export default{
    name: "showthumb",
    props: ['show'],
    template:`
    <div class="song-box">
        <img @click="showThumbSelected" :src='"images/show/" + show.show_thumb' alt="show thumb">
        <p>{{show.show_title}}</p>
    </div>
    `,

    mounted:function(){
        console.log("Selection->SHOW Thumbnail Component");
    },

    methods:{
        showThumbSelected(){
            // document.querySelector('.pop-box').classList.add('pop-close');
            console.log(`thumbnail: "${this.show.show_title}" show selected from component`);
            this.$emit("showshowdata",this.show);
        }
    }
}