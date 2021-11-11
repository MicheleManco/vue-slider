var miovue = new Vue({
    el: "#container",
    data: {
        countSlides: 0,
        slides: [
            {
              image: 'img/01.jpg',
              title: 'Svezia',
              text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/02.jpg',
                title: 'londra',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/03.jpg',
                title: 'giappone',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/04.jpg',
                title: 'tunisia',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/05.jpg',
                title: 'america',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            }
        ],
    },
    created: function (){
            this.autoSlide()  
    },

    methods: {
            nextSlide: function(){
                if(this.countSlides === this.slides.length -1){
                    this.countSlides = 0;
                }   else {
                    this.countSlides++
                }
            },
            prevSlide:function(){
                if(this.countSlides === 0){
                    this.countSlides = this.slides.length -1;
                }   else {
                    this.countSlides--
                }
            },
            autoSlide(){
                setInterval(() => {
                    if(this.countSlides === this.slides.length -1){
                        this.countSlides = 0;
                    }   else {
                        this.countSlides++
                    }
                }, 1000);
            },
    
        }     
});










