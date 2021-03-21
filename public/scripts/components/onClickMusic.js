export default{
    name: "musicbar",
    props: ['musicbar', 'name', 'format'],
    isPlaying: false,
    template:`
        <div class="audio-component-bar">
            <div class="song-detail">
                <img :src="'/images/music/' + this.musicbar">
                <p class="song-bar-name">{{ this.name }}</p>
            </div>
            <div class="audio">
                <audio :src="'/music/' + this.format"></audio>
                
                <div class="controls">
                    <button @click="play" class="play" data-icon="P" aria-label="play pause toggle"></button>
                    <button @click="pause" class="pause" data-icon="PU" aria-label="stop"></button>
                    <button @click="stop" class="stop" data-icon="S" aria-label="stop"></button>
                    <div class="timer">
                    <div></div>
                    <span aria-label="timer">00:00</span>
                    </div>
                    <button class="rwd" data-icon="B" aria-label="rewind"></button>
                    <button class="fwd" data-icon="F" aria-label="fast forward"></button>
                </div>
            </div>
        </div>
    `,

    methods:{
        play(){
            console.log("play button clicked");
            var aud = document.querySelector('audio');
            aud.play();
            this.isPlaying = true;
        },

        pause(){
            var aud = document.querySelector('audio');
            aud.pause();
            this.isPlaying = false;
        },

        stop(){
            var aud = document.querySelector('audio');
            aud.currentTime = 0;
            aud.pause();
            this.isPlaying = false;
        }
    }
}





// export default{
//     name: "musicbar",
//     props: ['musicbar', 'name', 'format'],
//     template:`
//         <div class="audio-component-bar">
//             <div class="song-detail">
//                 <img :src="'/images/music/' + this.musicbar">
//                 <p class="song-bar-name">{{ this.name }}</p>
//             </div>
//             <div class="audio">
//                 <audio :src="'/music/' + this.format" controls></audio>
//             </div>
//         </div>
//     `
// }