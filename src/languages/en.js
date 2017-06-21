const common = require('./common')
const merge = require('deepmerge')

module.exports = merge(common, {
    title: `Johannes Ulén's CV`,
    description: 'Developer passionate about software development and learning new stuff.',
    skills: {
        title: 'Skills'
    },
    experience: {
        title: 'Experience',
        list: [
            {
                title: 'Pingdom',
                description: `Mostly backend development with a focus on Node.js, Python, PHP and Go in different parts of the Pingdom products.`
            },
            {
                title: 'Rabalder Media',
                description: `
Web development with modern tools and languages. Mainly front-end (hosted on Netlify and the like), but also some back-end on both custom infrastructure and PaaS systems like Heroku.
                `
            },
            {
                title: 'CGI',
                description: `Mainly web development in Java and ASP.NET.`
            }
        ]
    },
    education: {
        title: 'Education',
        list: [
            {
                title: 'Bachelor of Science in Computer Engineering',
                school: 'Mid Sweden University'
            }
        ]
    },
    location: 'Västerås, Sweden',
    present: 'present',
    email: 'contact@johannesulen.se',
    easterEgg: [
        `%c
#     #                             
#     # ###### #      #       ####  
#     # #      #      #      #    # 
####### #####  #      #      #    # 
#     # #      #      #      #    # 
#     # #      #      #      #    # 
#     # ###### ###### ######  ####  

%cFeel free to contact me at %ccontact@johannesulen.se%c!
        `, 'font-family: monospace', '', 'color: blue', ''
    ]
})