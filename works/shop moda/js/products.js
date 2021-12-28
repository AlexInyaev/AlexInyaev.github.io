
     
class Producrs{
    constructor(gallery, basket,productsCatalog) {                              //2 получил класс galery and arr productsCatolog
        this.container = document.querySelector(gallery);            //3 получил класс gallery и записал его в переменную container
        this.basket = document.querySelector(basket);            //3 получил класс gallery и записал его в переменную container
        this.productsCatalog = productsCatalog;                     //4 записал массив productsCatalog в пеоеменную productsCatolog
        this.create();                                             // 5 создал метод create
    }
    create(){
        var wrapper =  document.createElement('slot'); 
         
        var products = basketStore.getProducts();
        this.basket.innerText = products.length;

        for (var i = 0; i<this.productsCatalog.length; i++){       

            var index = products.indexOf(this.productsCatalog[i].id);
			if (index === -1) {
				var activeClass = '';
				var activeText = 'Добавить в корзину';
			} else {
				var activeClass = ' btnActive';
				var activeText = 'Удалить из корзины';
			}
           

            var item  = serviseCreaetElement.getElement({ tagName: 'div', className: 'item',innerText:''});   //пременил innerText:''-чтобы убрать undefined
            var name  = serviseCreaetElement.getElement({ tagName: 'div', className: 'name',innerText: this.productsCatalog[i].name});   //вызвал метод и передал  объект 
            var img   = serviseCreaetElement.getElement({ tagName: 'div', id:this.productsCatalog[i].id,click:`testclick(${this.productsCatalog[i].id})`,  className: 'img',backgroundImage:`url(${this.productsCatalog[i].img})`,innerText:''});   //вызвал метод и передал  объект 
            var size  = serviseCreaetElement.getElement({ tagName: 'div', className: 'size',innerText:'Размер: '+ this.productsCatalog[i].size});
            var btn   = serviseCreaetElement.getElement({ tagName: 'button', className: 'btn'+activeClass, dataId:this.productsCatalog[i].id, innerText:activeText});
            var model = serviseCreaetElement.getElement({ tagName: 'div', className: 'model',innerText:'Модель: '+this.productsCatalog[i].id});
            
            btn.addEventListener('click', function(){   //выбор товара
            var id = this.getAttribute('data-id');
            var result = basketStore.putProduct(id);
            producrs.basket.innerText = result.products.length;
            
            if(result.pushProduct) {
                this.classList.add('btnActive');
                this.innerText = 'Удалить из корзины';
            } else {
                this.classList.remove('btnActive');
                this.innerText = 'Добавить в корзину';
            }
            });

            item.appendChild(img);
            item.appendChild(name);
            item.appendChild(model);
            item.appendChild(size);
            item.appendChild(btn);
            wrapper.appendChild(item);                             //9 чтобы меньше обращаться к дом дереву записавыем эл. в переменную wrapper
        }
        this.container.appendChild(wrapper);                        //9.1 добавил вновь созданные эл-ты. в эл с классом '.gallery' как дочерние
    }
}
 var producrs = new Producrs('.gallery','.basket',productsCatalog);               //1 получил экземпляр класса 'Producrs' передал в класс класс'.gallery' и массив productsCatolog 

 //*************************************** basket */
 

