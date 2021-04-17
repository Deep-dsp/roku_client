export default{
    name: "musicbar",
    props: ['musicbar', 'name', 'format'],
    template:`
        <div class="audio-component-bar">
            <div class="song-detail">
                <img :src="'/images/music/' + this.musicbar">
                <p class="song-bar-name">{{ this.name }}</p>
            </div>
            <div class="audio">
                <audio :src="'/music/' + this.format" controls></audio>
            </div>
        </div>
    `
}