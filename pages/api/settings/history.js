import moment from 'moment';

export default (req, res) => {
  const timeout = Math.floor(Math.random() * 2000);

  const content = [
    {
      postId: '57239859321',
      action: 'You commented on this',
      date: moment()
        .subtract(1, 'day')
        .subtract(Math.floor(Math.random() * 3), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      postId: '57239859321',
      action: 'You posted this',
      date: moment()
        .subtract(4, 'day')
        .subtract(Math.floor(Math.random() * 3), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      postId: '78432523759',
      action: 'You liked this',
      date: moment()
        .subtract(5, 'day')
        .subtract(Math.floor(Math.random() * 3), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      postId: '08572385975',
      action: 'You liked this',
      date: moment()
        .subtract(5, 'day')
        .subtract(Math.floor(Math.random() * 10), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      postId: '92375987492',
      action: 'You shared this',
      date: moment()
        .subtract(5, 'day')
        .subtract(Math.floor(Math.random() * 10), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      postId: '35473831923',
      action: 'You liked this',
      date: moment()
        .subtract(5, 'day')
        .subtract(Math.floor(Math.random() * 10), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
  ];

  setTimeout(() => {
    res.status(200).json(
      content.sort((a, b) => {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
        return 0;
      })
    );
  }, timeout);
};

// postId: PropTypes.string.isRequired,
// action: PropTypes.string.isRequired,
// date: PropTypes.instanceOf(Date).isRequired,
