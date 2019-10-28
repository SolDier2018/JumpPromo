export function scroll() {
    let prevPos = window.scrollY;
    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        console.log(scrollTop);
        const direction = prevPos - scrollTop > 0 ? 'up' : 'down';
        prevPos = scrollTop;

        switch (direction) {
            case "down":
                if (scrollTop > 100) {
                    document.getElementsByClassName('content_menu-wrap')[0].className = 'content_menu-wrap hidden_head';
                }
                break;
            case "up":
                document.getElementsByClassName('content_menu-wrap')[0].className = 'content_menu-wrap';
                break
        }
    });
}