const modal = document.getElementsByClassName('modal')[0];
const btnform = document.getElementById('modalButtonInfo');
const btnModal = document.getElementById('modalcat');
modal.addEventListener('click', (e) => {
    //if (e.currentTarget === e.target) {
        console.log(e.target, e.currentTarget)
        modal.style.display = 'none'
    //}
})
modalNew(btnModal, modal, 'block')
modalNew(btnform, modal, 'none')

function modalNew(element, container, data) {
    element.addEventListener('click', () => container.style.display = data)
}
//
let btnHeader = document.getElementsByClassName('shadow_button')[0]
btnHeader.addEventListener('click', (e) => {
    alert('Вашу заявку відправлено')
    console.log(e.currentTarget)
})

let btnViber = document.getElementsByClassName('header_btn')[0]
btnViber.addEventListener('click', (e) => {
    alert("Ми напишемо вам трохи пізніше")
    console.log(e.currentTarget)
})

let btnTelegram = document.getElementsByClassName('header_btn1')[0]
btnTelegram.addEventListener('click', (e) => {
    alert("Ми напишемо вам трохи пізніше")
    console.log(e.currentTarget)
})

const open = document.getElementsByClassName('open')[0]
const aside = document.getElementsByTagName('aside')[0]
const close = document.getElementsByClassName('close')[0]

modalNew(open, aside, 'block')
modalNew(close, aside, 'none')
const menu = Array.from(document.getElementsByClassName('menu'))
const scroll = Array.from(document.getElementsByClassName('scroll'))
menu.forEach((item, index) => {
    item.addEventListener('click', () =>
        scroll[index].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        }))
})
const menu2 = Array.from(document.getElementsByClassName('menu2'))
const scroll2 = Array.from(document.getElementsByClassName('scroll22'))
menu2.forEach((item1, index1) => {
    item1.addEventListener('click', () =>
        scroll2[index1].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        }))
})

let btn11 = document.getElementsByClassName('btn11')[0]
btn11.addEventListener('click', () => {
    alert('Ми відправляємо посилки одразу після отримання замовленння')
})

let btn12 = document.getElementsByClassName('btn12')[0]
btn12.addEventListener('click', () => {
    alert('Ми стараємося ставати чим доступніші ціни на нашу продукцію')
})

let btn13 = document.getElementsByClassName('btn13')[0]
btn13.addEventListener('click', () => {
    alert('У нас є пракнично все: від героїв Гаррі Потера до котів з улюблених мемів:)')
})

let btn14 = document.getElementsByClassName('btn14')[0]
btn14.addEventListener('click', () => {
    alert('У нас є канали на таких платформах як YouTube, Instagram, Telegram, Viber, Twitter та Tiktok, проте всі вони називаються Pink cat')
})

let btn15 = document.getElementsByClassName('btn15')[0]
btn15.addEventListener('click', () => {
    alert('До кожного замовлення кладемо невеличкий подарунок')
})

let btn16 = document.getElementsByClassName('btn16')[0]
btn16.addEventListener('click', () => {
    alert('Ви можете надіслати нам фото чи малюнок іграшки і ми її пошиємо')
})

const section5_btn = document.getElementsByClassName('section5_btn');
const section5_btn_form = document.getElementByClassName('close');
const btn_section5_btn = document.getElementByClassName('close');
section5_btn.addEventListener('click', (e) => {
    if (e.currentTarget === e.target) {
        console.log(e.target, e.currentTarget)
        section5_btn.style.display = 'none'
    }
})

modalNew(section5_btn_form, section5_btn, 'block')
modalNew(section5_btn_form, section5_btn, 'none')