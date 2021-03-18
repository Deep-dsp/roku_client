export default{
    name: "ThePopMovie",
    props: ['trailer', 'title', 'date', 'runtime', 'about', 'rate'],
    template:`
    <div class="screen-box">
        <div class="screen">
            <iframe width="560" height="315" :src="this.trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="details">
            <div class="title">
                    <h5>{{ this.title }}</h5>
                    <p>
                        <sub>Duration: {{ this.runtime }}</sub><br>
                        <sub>release year: {{ this.date }}</sub>
                    </p>    
            </div>
            <div class="about">
                <p>{{ this.about }}</p>
                <p>Movie Rate: {{ this.rate }}<span> / 10</span></p>
            </div>
        </div>
    </div>
    `
}