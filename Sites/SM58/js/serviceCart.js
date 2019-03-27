 class ServiceCart {
     constructor(basket, containerCart, productsCatalog) {
        
         this.containerCart = document.querySelector(containerCart);
         this.basket = document.querySelector(basket);
         this.productsCatalog = productsCatalog;
         this.create();
     }
     create(){
        this.basket.addEventListener('click', function () {
            serviceCart.containerCart.style.display = 'flex';
            var productCart = serviceCart.getProductsCart();
            var wrapper =  document.createElement('slot'); 
            for (var i=0; i<productCart.length; i++){                  //цикл по массиву товаров в корзине
            var item  = serviseCreaetElement.getElement({ tagName: 'div', className: 'item',innerText:''});   //пременил innerText:''-чтобы убрать undefined
            var name  = serviseCreaetElement.getElement({ tagName: 'div', className: 'name',innerText: productCart[i].name});   //вызвал метод и передал  объект 
            var img   = serviseCreaetElement.getElement({ tagName: 'div', id: productCart[i].id,click:`testclick(${productCart[i].id})`,  className: 'img',backgroundImage:`url(${productCart[i].img})`,innerText:''});   //вызвал метод и передал  объект 
            var model = serviseCreaetElement.getElement({ tagName: 'div', className: 'model',innerText:'Модель: '+ productCart[i].id});
            item.appendChild(img);
            item.appendChild(name);
            item.appendChild(model);
            wrapper.appendChild(item); 
            }
           

            var close = serviseCreaetElement.getElement({tagName: 'div', className: 'cartClose'});
            close.addEventListener('click', function (){
                serviceCart.containerCart.innerHTML = '';
                serviceCart.containerCart.style.display = 'none';
            });
            serviceCart.containerCart.appendChild(wrapper);
            serviceCart.containerCart.appendChild(close);
        });   

        
     }
     getProductsCart() {
         var products = basketStore.getProducts();  // получил товар в корзине
         var productsCart = [];                     //создал массив
         for (var i = 0; i < this.productsCatalog.length; i++) {          //цикл по длинне массива продуктов
             if (products.indexOf(this.productsCatalog[i].id) !== -1) { //проверка если нет эл в массиве
                 productsCart.push(this.productsCatalog[i]);            //то добавить в массив
             }
        }
         return productsCart;                                            //вернуть массив
        
     }
 }
 var serviceCart = new ServiceCart('.basket', '.containerCart', productsCatalog );
 

// 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// productsCatolog
// class ServiceCart {
//     constructor(containerCounter, containerCart, productsCatalog) {
//         this.containerCounter = document.querySelector(containerCounter);
//         this.containerCart = document.querySelector(containerCart);
//         this.productsCatalog = productsCatalog;
//         this.create();
//     }
//     create() {
        
//         this.containerCounter.addEventListener('click', function () {
//             serviceCart.containerCart.style.display = 'flex';
//             var productsCart = serviceCart.getProductsCart();
//             var wrapper = document.createElement('slot');

//             for (var i = 0; i < productsCart.length; i++) {

//                 var item  = serviceCreateElement.getElement({ tagName:'div', className:'item' });
//                 var name  = serviceCreateElement.getElement({ tagName:'div', className:'name',  innerText: productsCart[i].name });
//                 var img   = serviceCreateElement.getElement({ tagName:'div', className:'img',   backgroundImage: `url(${productsCart[i].img})` });
//                 var price = serviceCreateElement.getElement({ tagName:'div', className:'price', innerText: productsCart[i].price.toLocaleString()+' USD' });

//                 item.appendChild(name);
//                 item.appendChild(img);
//                 item.appendChild(price);
//                 wrapper.appendChild(item);
//             }
//             var close = serviceCreateElement.getElement({ tagName: 'div', className: 'cart-close' });

//             close.addEventListener('click', function () {
//                 serviceCart.containerCart.innerHTML = '';
//                 serviceCart.containerCart.style.display = 'none';
//             });

//             serviceCart.containerCart.appendChild(wrapper);
//             serviceCart.containerCart.appendChild(close);
//         });
//     }
//     getProductsCart() {
//         var products = serviceStore.getProducts();
//         var productsCart = [];
//         for (var i = 0; i < this.productsCatalog.length; i++) {
//             if (products.indexOf(this.productsCatalog[i].id) !== -1) {
//                 productsCart.push(this.productsCatalog[i]);
//             }
//         }
//         return productsCart;
//     }
// }

// var serviceCart = new ServiceCart('.container-counter', '.container-cart', productsCatalog);

// 55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555



// class ServiceCart {
//     constructor(containerCounter, containerCart, productsCatalog) {
//         this.containerCounter = document.querySelector(containerCounter);
//         this.containerCart = document.querySelector(containerCart);
//         this.productsCatalog = productsCatalog;
//         this.create();
//     }
//     create() {
        
//         this.containerCounter.addEventListener('click', function () {
//             serviceCart.containerCart.style.display = 'flex';
//             var productsCart = serviceCart.getProductsCart();
//             var wrapper = document.createElement('slot');

//             for (var i = 0; i < productsCart.length; i++) {

//                 var item  = serviceCreateElement.getElement({ tagName:'div', className:'item' });
//                 var name  = serviceCreateElement.getElement({ tagName:'div', className:'name',  innerText: productsCart[i].name });
//                 var img   = serviceCreateElement.getElement({ tagName:'div', className:'img',   backgroundImage: `url(${productsCart[i].img})` });
//                 var size  = serviseCreaetElement.getElement({ tagName: 'div', className: 'size',innerText:'Размер: '+ this.productsCatalog[i].size});

//                 item.appendChild(name);
//                 item.appendChild(img);
//                 item.appendChild(size);
//                 wrapper.appendChild(item);
//             }
//             var close = serviceCreateElement.getElement({ tagName: 'div', className: 'cart-close' });

//             close.addEventListener('click', function () {
//                 serviceCart.containerCart.innerHTML = '';
//                 serviceCart.containerCart.style.display = 'none';
//             });

//             serviceCart.containerCart.appendChild(wrapper);
//             serviceCart.containerCart.appendChild(close);
//         });
//     }
//     getProductsCart() {
//         var products = serviceStore.getProducts();
//         var productsCart = [];
//         for (var i = 0; i < this.productsCatalog.length; i++) {
//             if (products.indexOf(this.productsCatalog[i].id) !== -1) {
//                 productsCart.push(this.productsCatalog[i]);
//             }
//         }
//         return productsCart;
//     }
// }

// var serviceCart = new ServiceCart('.container-counter', '.container-cart', productsCatalog); 
