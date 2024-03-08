const click = document.querySelector('.click');
const giftBox= document.querySelector('.GiftBox');
const shadow= document.querySelector('.Shadow');
const giftContainer= document.querySelector('.GiftContaner');
const mess= document.querySelector('.Mess');

click.addEventListener('click',()=>{
    if(click.className === "click")
    {
        click.classList.add('active')
        giftBox.classList.add('active')
        shadow.classList.add('active')
        giftContainer.classList.add('active')
        mess.classList.add('active')

    }
    else
    {
        click.classList.remove('active')
        giftBox.classList.remove('active')
        shadow.classList.remove('active')
        giftContainer.classList.remove('active')
        mess.classList.remove('active')
    }
})