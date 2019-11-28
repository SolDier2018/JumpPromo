export const menu = (menu) => {
  return {
      type: 'MENU',
      menu
  }
};

export const menuOpen = (value) => {
    return {
        type: 'MENU_OPEN',
        menuOpen: value
    };
};

export const showSearch = (search) => {
    return {
        type: 'SHOW_SEARCH',
        showSearch: search
    }
};

export const openDetails = (details) => {
    return {
        type: 'OPEN_DETAILS',
        openDetails: details
    }
};

export const pathName = (path) => {
    return {
        type: 'PATH_NAME',
        pathName: path
    }
};