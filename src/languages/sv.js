const common = require('./common')
const merge = require('deepmerge')

module.exports = merge(common, {
    title: 'Johannes Uléns CV',
    description: 'Utvecklare som brinner för utveckling och att lära sig nya saker.',
    skills: {
        title: 'Kunskaper'
    },
    experience: {
        title: 'Erfarenhet',
        list: [
            {
                title: 'Pingdom',
                description: `Mestadels backendutveckling med fokus på Node.js, Python, PHP och Go i olika delar av Pingdoms produkter.`
            },
            {
                title: 'Rabalder Media',
                description: 'Webbutveckling med moderna verktyg och språk. Mestadels front-end (hostad på bland annat Netlify), men även en hel del back-end på egen infrastruktur samt på PaaS-system som Heroku.'
            },
            {
                title: 'CGI',
                description: 'Mestadels webbutveckling i Java och ASP.NET.'
            }
        ]
    },
    education: {
        title: 'Utbildning',
        list: [
            {
                title: 'Kandidatexamen i programvaruteknik',
                school: 'Mittuniversitetet'
            }
        ]
    },
    location: 'Västerås',
    present: 'nu',
    email: 'kontakt@johannesulen.se',
    phoneNumber: '0738370791',
    easterEgg: [`%c
#     #               
#     # ######      # 
#     # #           # 
####### #####       # 
#     # #           # 
#     # #      #    # 
#     # ######  ####  

%cKontakta gärna mig på %ckontakt@johannesulen.se%c!

`, 'font-family: monospace', '', 'color: blue', '']
})