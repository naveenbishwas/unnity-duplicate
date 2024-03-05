module.exports = {
  async rewrites() {
    return [
      {
        source: "/Case-study/dentist",
        destination: "/Case-study/dentist/page",
      },
      {
        source: "/Case-study/home-appliances",
        destination: "/Case-study/home-appliances/page",
      },
      {
        source: "/Case-study/travel",
        destination: "/Case-study/travel/page",
      },
    ];
  },
};
