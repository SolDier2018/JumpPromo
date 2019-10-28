export function openDetails(value) {
    if(value) {
        document.getElementsByClassName('item_details')[0].className = 'item_details loaded';
        document.getElementsByClassName('content_menu')[0].className = 'content_menu disabled_scroll';
    } else {
        document.getElementsByClassName('item_details')[0].className = 'item_details';
        document.getElementsByClassName('content_menu')[0].className = 'content_menu';
    }
}