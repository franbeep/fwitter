import moment from 'moment';

export default (req, res) => {
  const timeout = Math.floor(Math.random() * 2000);

  const content = [
    {
      slug: 'PearceBurn',
      action: 'commented on your',
      postId: '57239859321',
      date: moment()
        .subtract(1, 'day')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      slug: 'PearceBurn',
      action: 'liked your',
      postId: '57239859321',
      date: moment()
        .subtract(1, 'day')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      slug: 'DrRhodriHal',
      action: 'commented on your',
      postId: '57239859321',
      date: moment()
        .subtract(1, 'day')
        .subtract(Math.floor(Math.random() * 24), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      slug: 'Mamaaaaaaaaas',
      action: 'liked your',
      postId: '57239859321',
      date: moment()
        .subtract(2, 'day')
        .subtract(Math.floor(Math.random() * 24), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      slug: 'NoRestForZombies',
      action: 'commented on your',
      postId: '57239859321',
      date: moment()
        .subtract(2, 'day')
        .subtract(Math.floor(Math.random() * 24), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      slug: 'NoRestForZombies',
      action: 'shared your',
      postId: '25785423856',
      date: moment()
        .subtract(Math.floor(Math.random() * 10), 'day')
        .subtract(Math.floor(Math.random() * 24), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      slug: 'DasApple00',
      action: 'commented on your',
      postId: '26365450351',
      date: moment()
        .subtract(Math.floor(Math.random() * 10), 'day')
        .subtract(Math.floor(Math.random() * 24), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      slug: 'DasApple00',
      action: 'liked your',
      postId: '26365450351',
      date: moment()
        .subtract(Math.floor(Math.random() * 10), 'day')
        .subtract(Math.floor(Math.random() * 24), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      slug: 'StunningPlay',
      action: 'commented on your',
      postId: '26365450351',
      date: moment()
        .subtract(Math.floor(Math.random() * 10), 'day')
        .subtract(Math.floor(Math.random() * 24), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      slug: 'StunningPlay',
      action: 'liked your',
      postId: '24935235252',
      date: moment()
        .subtract(Math.floor(Math.random() * 10), 'day')
        .subtract(Math.floor(Math.random() * 24), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
    {
      slug: 'FarazPlant',
      action: 'commented on your',
      postId: '38252521346',
      date: moment()
        .subtract(Math.floor(Math.random() * 10), 'day')
        .subtract(Math.floor(Math.random() * 24), 'hours')
        .subtract(Math.floor(Math.random() * 60), 'minutes'),
    },
  ];

  setTimeout(() => {
    res.status(200).json(
      content.sort((a, b) => {
        if (a.date > b.date) {
          return -1;
        }
        if (a.date < b.date) {
          return 1;
        }
        return 0;
      })
    );
  }, timeout);
};
