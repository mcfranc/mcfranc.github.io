export default function(state = null, action) {
  switch(action.type) {
    case 'PROJECT_SELECTED':
      return state;
    default: {
      return [
        { index: '01', name: 'Inkscribe', url: '#', desc: 'Creative microblogging platform - coming soon', technology: 'MongoDB, Express, React, Node.js' },
        { index: '02', name: 'Plantza', url: 'https://plantza-alan1010010.herokuapp.com/', desc: 'Plant rental marketplace', technology: 'Ruby on Rails, PostgreSQL, Heroku' },
        { index: '03', name: 'Plantis', url: 'http://www.plantis.co/', desc: 'Social house-plant management system', technology: 'Ruby on Rails, PostgreSQL, Heroku' }
      ];
    }
  }
}
