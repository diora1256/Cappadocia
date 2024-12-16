document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight / 2) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  });


//strelka

document.addEventListener('DOMContentLoaded', () => {
    const scrollTop = document.querySelector('.scroll_top');
    let lastScrollY = 0; 
  
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > window.innerHeight && currentScrollY > lastScrollY) {
        scrollTop.classList.add('show');
        scrollTop.classList.remove('hide');
      } else {
        scrollTop.classList.add('hide');
        scrollTop.classList.remove('show');
      }
  
      lastScrollY = currentScrollY;
    });
  
    scrollTop.addEventListener('click', () => {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    });
  });


  //slider

  let tour = document.querySelectorAll('.tour_photo')
  let trip = document.querySelectorAll('.trip_photo')
  let next = document.querySelector('.next')
  let prev = document.querySelector('.prev')
  let next2 = document.querySelector('.next2')
  let prev2 = document.querySelector('.prev2')


  let i = 0

  for(let i = 0; i < tour.length; i++){      
    tour[i].style.display = 'none'
}

tour[0].style.display = 'block'

next.addEventListener('click', () => {
    if(i < 2){
        tour[i].style.display = 'none'
        i++;
        tour[i].style.display = 'block'
    }
    else{
        tour[i].style.display = 'none'
        i = 0;
        tour[i].style.display = 'block'
    }
})

prev.addEventListener('click', () => {
    if(i > 0){
        tour[i].style.display = 'none'
        i--;
        tour[i].style.display = 'block'
    }
    else{
        tour[i].style.display = 'none'
        i = 2;
        tour[i].style.display = 'block'
    }
})

let j = 0

  for(let j = 0; j < trip.length; j++){      
    trip[j].style.display = 'none'
}

trip[0].style.display = 'block'

next2.addEventListener('click', () => {
    if(j < 2){
        trip[j].style.display = 'none'
        j++;
        trip[j].style.display = 'block'
    }
    else{
        trip[j].style.display = 'none'
        j = 0;
        trip[j].style.display = 'block'
    }
})

prev2.addEventListener('click', () => {
    if(j > 0){
        trip[j].style.display = 'none'
        j--;
        trip[j].style.display = 'block'
    }
    else{
        trip[j].style.display = 'none'
        j = 2;
        trip[j].style.display = 'block'
    }
})


//btn

let btn = document.querySelectorAll('.click')
let model = document.querySelector('.model')
let model_close = document.querySelector('.model_close')

btn[0].addEventListener('click', () => {
    model.style.display = 'block'
})

model_close.addEventListener('click', () => {              
    model.style.display = 'none'
})


//tg

let token = '7784528160:AAE4wd2XHJfIJ0FouGOd3d7mUaBDXuQp-uo'
let botName = 't_dota_bot'
let url_api = `https://api.telegram.org/bot${token}/sendMessage`
let CHAT_ID = '5579407657'

let tg = document.querySelector('#tg')
let success = document.querySelector('#success')

tg.addEventListener('submit', function(e) {
        e.preventDefault()
        let message = `<b>Заявка с сайта</b>\n`
        message +=`<b>Отправитель: </b> ${this.name.value}\n`
        message +=`<b>Номер: </b> ${this.number.value}\n`
        // message +=`<b>Email: </b> ${this.email.value}\n`
        axios.post(url_api, {
            chat_id : CHAT_ID,
            parse_mode : 'html',
            text : message
        }).then ((res) => {
            this.name.value = ''
            this.number.value = ''
            // this.email.value = ''
            success.innerHTML = 'Сообщение отправлено !'
            success.style.display = 'block'
            setTimeout(() =>{
                success.style.display = 'none'
            }, 3000)
        }).catch((err) => {
            console.log(err);
        }).finally(() =>{
            console.log(gooood);
        })
    })
