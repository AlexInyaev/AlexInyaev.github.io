
// var content=document.querySelector('.content');

//     var i;
//     var html='';
// for (i=0; i<productCatolog.length; i++) {
//     html+=`<div class="item" id="${i}">
//                 <div class="image" style=" background-image: url(${productCatolog.img[i]});"></div>
//                 <h3>${discription[i]}</h3>
//                 <p class="price">${price[i]}</p>
//             </div>`          
// }
// content.innerHTML=html;
     
class Producrs{
    constructor(gallery,productsCatolog) {                              //2 получил класс galery and arr productsCatolog
        this.container = document.querySelector(gallery);            //3 получил класс gallery и записал его в переменную container
        this.productsCatolog = productsCatolog;                     //4 записал массив productsCatolog в пеоеменную productsCatolog
        this.create();                                             // 5 создал метод create
    }
    create(){
        var wrapper =  document.createElement('slot');                  // slot?

        for (var i = 0; i<this.productsCatolog.length; i++){        // 6 в цикле перебераю массив productsCatolog
           

            var item = this.getElement({ tagName: 'div', className: 'item',innerText:''});   //пременил innerText:''-чтобы убрать undefined
            var name = this.getElement({ tagName: 'div', className: 'name',innerText: this.productsCatolog[i].name});   //вызвал метод и передал  объект 
            var img = this.getElement({ tagName: 'div', id:this.productsCatolog[i].id,click:`testclick(${this.productsCatolog[i].id})`,  className: 'img',backgroundImage:`url(${this.productsCatolog[i].img})`,innerText:''});   //вызвал метод и передал  объект 
            var size = this.getElement({ tagName: 'div', className: 'size',innerText:'Размер: '+ this.productsCatolog[i].size});
            var btn = this.getElement({ tagName: 'button', className: 'btn',innerText:'Добавить в корзину'});
            var model = this.getElement({ tagName: 'div', className: 'model',innerText:'Модель: '+this.productsCatolog[i].id});

            item.appendChild(img);
            item.appendChild(name);
            item.appendChild(model);
            item.appendChild(size);
            item.appendChild(btn);

            wrapper.appendChild(item);                             //9 чтобы меньше обращаться к дом дереву записавыем эл. в переменную wrapper

        }
        this.container.appendChild(wrapper);                        //9.1 добавил вновь созданные эл-ты. в эл с классом '.gallery' как дочерние
    }
    getElement(options){                                            //приняли объект и сохранили в переменную options
         var element = document.createElement(options.tagName);               //7 создал блочный элемент 
                       

        if('className' in options){
            element.setAttribute('class',options.className);                  //8 добавил к элементу  (class="item"                     
        }
        if('click' in options){
            element.setAttribute('onclick',options.click);                  //8 добавил к элементу  (class="item"                     
        }
        if('id' in options){
            element.setAttribute('id',options.id);                  //8 добавил к элементу  (class="item"                     
        }
        if('innerText' in options){
            element.innerText = options.innerText;                                    
        }
        if('backgroundImage' in options){
            element.style.backgroundImage = options.backgroundImage;                                   
        }

         return element;
    }
     
    acrions() {
        //
    }
}
 var producrs = new Producrs('.gallery',productsCatolog);               //1 получил экземпляр класса 'Producrs' передал в класс класс'.gallery' и массив productsCatolog 

 

 