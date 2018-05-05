const { format } = require('date-fns');

const localeMapping = {
  sv: require('date-fns/locale/sv')
};

function formatPeriodDate(date, localeName) {
  return format(date, 'MMM YYYY', { locale: localeMapping[localeName] });
}

module.exports = (dato, root, i18n) => {
  root.directory('content', dir => {
    i18n.availableLocales.forEach(locale => {
      i18n.withLocale(locale, () => {
        dir.createPost(`_index.${locale}.md`, 'yaml', {
          frontmatter: {
            title: dato.cv.title,
            name: dato.cv.name,
            photo: {
              url: dato.cv.photo.url({w: 120, h: 120, fm: 'jpg'}),
              alt: dato.cv.photo.alt,
            },
            location: dato.cv.location,
            phoneNumber: dato.cv.phoneNumber,
            emailAddress: dato.cv.emailAddress,
            jobs: dato.cv.jobs.map(job => {
              return Object.assign(job.toMap(), {
                startDate: formatPeriodDate(job.startDate, locale),
                endDate: job.endDate ? formatPeriodDate(job.endDate, locale) : dato.cv.now,
              });
            }),
            skills: dato.cv.skills.toMap(),
            sections: {
              skills: dato.cv.skillsSectionTitle,
              experience: dato.cv.experienceSectionTitle,
              education: dato.cv.educationSectionTitle,
            },
            education: Object.assign(dato.cv.education.toMap(), {
              endYear: dato.cv.education.endYear || dato.cv.now,
            }),
          },
        });
      });
    });
  });
};
