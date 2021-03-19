
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import './components/audioWebAccessibility.js';
// import './components/loginPanelAnim.js';
import TheMovieThumb from './components/TheMovieThumbnailComp.js';
import TheShowThumb from './components/TheShowThumbnailComp.js';
import TheMusicThumb from './components/TheMusicThumbnailComp.js';
import onclickmusic from './components/onClickMusic.js';
import ThePopMovieData from './components/popMovieData.js';
import ThePopShowData from './components/ThePopShowData.js';

  (()=>{
      const vm = new Vue({
          data:{
              allMovies: [],
              allMusic: [],
              allShows:[],
              moviesdb:{},
              musicpdb: {},
              showsdb:{},
              show_movie_data: false,
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
              fetch('/api/shows')
                    .then(res=>res.json())
                    .then(data=>{
                        console.table(data);
                        this.allShows = data;
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
            },

            movieImageSelected(item){
                console.log("Thumbnail movie image Selected:", item.movie_title);
                this.show_movie_data = true;
                this.moviesdb = item;
            },
            // Show Thumb-> Image
            showImageSelected(item){
                console.log("Thumbnail show image Selected:", item.show_title);
                this.show_movie_data = true;
                this.showsdb = item;
            },

            closePopup(){
                document.querySelector('.pop-box').classList.add('closepopup');
                this.show_movie_data = false;
            }
          },

          components:{
              moviethumb: TheMovieThumb,
              musicthumb: TheMusicThumb,
              clickmusic: onclickmusic,
              popupmovie: ThePopMovieData,
              showthumb: TheShowThumb,
              popupshow: ThePopShowData
          }
      }).$mount("#app");
  })();
