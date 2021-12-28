class ServiseCreaetElement{
    getElement(options){                                            
        var element = document.createElement(options.tagName);               
                      

       if('className' in options){
           element.setAttribute('class',options.className);                                       
       }
       if('click' in options){
           element.setAttribute('onclick',options.click);                                       
       }
       if('id' in options){
           element.setAttribute('id',options.id);                                       
       }
       if('dataId' in options){
           element.setAttribute('data-id',options.dataId);                                    
       }
       if('innerText' in options){
           element.innerText = options.innerText;                                    
       }
       if('backgroundImage' in options){
           element.style.backgroundImage = options.backgroundImage;                                   
       }

        return element;
   }
}


var serviseCreaetElement = new ServiseCreaetElement();
