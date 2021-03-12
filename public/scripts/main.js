
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import TheMovieThumb from './components/TheMovieThumbnailComp.js';
import TheMusicThumb from './components/TheMusicThumbnailComp.js';
// import './components/loginPanelAnim.js';
// import './components/popclose.js';

  (()=>{
      const vm = new Vue({
          data:{
              allMovies: [],
              allMusic: [],
              musicpdb: {},
              show_bio_data: false,
              show_default_data: true,
              hide_first_data: false
          },
          created: function(){
              console.log("inside Vue Js");
              fetch('/api/movies')
                    .then(res=>res.json())
                    .then(data=>{
                        console.table(data);
                        this.allMovies = data;
                    })
              fetch('/api/music')
                    .then(res=>res.json())
                    .then(data=>{
                        console.table(data);
                        this.allMusic = data;
                    })
              .catch(err=>console.error(err));
          },

          methods:{
            //   music
            imageSelected(item){
                console.log("Thumbnail /image Selected:", item.song_name);
                this.show_bio_data = true;
                // music data
                this.musicpdb = item;
                this.show_default_data = false;
                this.hide_first_data = true;
                // console.log(this.musicpdb);
            }
          },

          components:{
              moviethumb: TheMovieThumb,
              musicthumb: TheMusicThumb
          }
      }).$mount("#app");
  })();
