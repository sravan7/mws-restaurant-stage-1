console.log(navigator.serviceWorker)
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js').then(function(event) {
       console.log('success'+event.scope); 
    }).catch(function(event){
        console.log('failed'+event.scope,ServiceWorkerRegistration.scope);
    });

}