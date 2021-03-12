export default{
    name: "TheMusicThumbnail",
    props: ['music'],
    template:`
        <div class="music-container">
                <div class="music-thumb">
                    <img :src='"images/music/" + music.thumbnail' alt="music thumb">
                    <p>{{music.song_name}}</p>
                    <p>{{music.singer}}</p>
                </div>
        </div>
    `
}