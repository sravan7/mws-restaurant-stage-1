self.addEventListener('fetch', function(event){
   console.log('i am registered', event.request); 
});