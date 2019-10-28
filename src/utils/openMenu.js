export function openMenu(value) {
    if(value) {
        document.getElementsByClassName('menu')[0].className = 'menu menu_open';
    } else {
        document.getElementsByClassName('menu')[0].className = 'menu';
    }
}