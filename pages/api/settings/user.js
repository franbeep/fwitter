export default (req, res) => {
  const timeout = Math.floor(Math.random() * 2000);

  setTimeout(() => {
    res.status(200).json({
      // account
      nsfwContent: false,
      // page
      showLeftProfile: true,
      showRelevantContent: true,
      showAdditionalTrends: false,
      showPosts: true,
      showReplies: true,
      showLikes: true,
      // privacy
      showMyPosts: true,
      showMyLikes: true,
      showMyFollowers: true,
      showMyFollowing: true,
      showOnRelevantContent: true,
      showOnPeoplesFeed: true,
    });
  }, timeout);
};
