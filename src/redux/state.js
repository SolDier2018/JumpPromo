import review from "../ui/img/review.svg";
import reviewActive from "../ui/img/reviewActive.svg";
import orders from "../ui/img/orders.svg";
import ordersActive from "../ui/img/ordersActive.svg";
import news from "../ui/img/news.svg";
import newsActive from "../ui/img/newsActive.svg";
import clients from "../ui/img/clients.svg";
import clientsActive from "../ui/img/clientsActive.svg";

export const DEFAULT_STATE = {
    menu: [

        {
            label: 'Обзор',
            path: '/review',
            pathContain: '/review', //нужен для определения причастности вложеных элементов меню к родителю
            icon: review,
            iconActive: reviewActive,
            submenu: [],
            count: ''
        },
        {
            label: 'Заказы',
            path: '/orders',
            pathContain: '/orders',
            icon: orders,
            iconActive: ordersActive,
            submenu: [
                {
                    label: 'Позиции',
                    path: '/positions',
                    pathContain: '/orders',
                    count: 3
                },
                {
                    label: 'Категории',
                    path: '/categories',
                    pathContain: '/orders',
                    count: 4
                }
            ],
            count: 2
        },
        {
            label: 'Новости',
            path: '/news',
            pathContain: '/news',
            icon: news,
            iconActive: newsActive,
            submenu: [],
            count: ''
        },
        {
            label: 'Клиенты',
            path: '/clientele',
            pathContain: '/clientele',
            icon: clients,
            iconActive: clientsActive,
            submenu: [],
            count: ''
        }
    ],
    menuOpen: false,
    showSearch: false,
    openDetails: false,
    pathName: ''
};
