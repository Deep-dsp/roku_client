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

        <div class="social-share">
            <div class="like-share">
                <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=150&layout=button_count&action=like&size=small&share=true&height=46&appId" width="150" height="46" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
            // <div class="fb-comments" data-href="https://localhost:5000/movies" data-width="10" data-numposts="1"></div>
        </div>
    </div>
    `
}