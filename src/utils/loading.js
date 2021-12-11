export const hideLoading = function(){
    const el = document.querySelector('#loading');
    if(el) el.parentElement.removeChild(el);
    document.querySelector('#main').style.opacity= 1;
}

export const showLoading = function(){
    const markup = `
    <div id='loading' class="absolute top-1/4 left-1/2 flex items-center justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
    </div>
    `;
    document.querySelector('#main').style.opacity= 0;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
}