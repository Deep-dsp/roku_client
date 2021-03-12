
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import TheMovieThumb from './components/TheMovieThumbnailComp.js';
import TheMusicThumb from './components/TheMusicThumbnailComp.js';
// import './components/loginPanelAnim.js';
// import './components/popclose.js';

  (()=>{
      const vm = new Vue({
          data:{
              allMovies: [],
              allMusic: []
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
            imageSelected(music){
                console.log("Thumbnail Selected:", music.song_name);
            }
          },

          components:{
              moviethumb: TheMovieThumb,
              musicthumb: TheMusicThumb
          }
      }).$mount("#app");
  })();
