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
            icon: review,
            iconActive: reviewActive,
            submenu: [],
            count: ''
        },
        {
            label: 'Заказы',
            path: '/orders',
            icon: orders,
            iconActive: ordersActive,
            submenu: [
                {
                    label: 'Позиции',
                    path: '/positions',
                    count: 3
                },
                {
                    label: 'Категории',
                    path: '/categories',
                    count: 4
                }
            ],
            count: 2
        },
        {
            label: 'Новости',
            path: '/news',
            icon: news,
            iconActive: newsActive,
            submenu: [],
            count: ''
        },
        {
            label: 'Клиенты',
            path: '/clientele',
            icon: clients,
            iconActive: clientsActive,
            submenu: [],
            count: ''
        }
    ],
    menuOpen: false,
    showSearch: false,
    openDetails: false
};
