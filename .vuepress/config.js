const config = require('../config.json');

module.exports = {
    title: config.title,
    description: config.description,
    base: "/",
    themeConfig:{
        logo: config.logo,
        nav: config.navigation,
        displayAllHeaders: true,
        smoothScroll: true,
        sidebar: 'auto'
    }
}