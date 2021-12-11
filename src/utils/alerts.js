export const hideAlert = function(){
    const el = document.querySelector('#alert');
    if(el) el.parentElement.removeChild(el);
}

export const showAlert = function(type, message){
    hideAlert();
    const bg = type === 'error' ? 'red' : 'green';
    const markup = `
    <div role="alert" id="alert" class="w-1/2 fixed top-4 left-1/4">
        <div class="bg-${bg}-500 text-white font-bold rounded-t px-4 py-2">
        Alerta
        </div>
        <div class="border border-t-0 border-${bg}-400 rounded-b bg-${bg}-100 px-4 py-3 text-${bg}-700">
        <p>${message}</p>
        </div>
    </div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    setTimeout(hideAlert, 3000);
}
