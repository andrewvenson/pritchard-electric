const settings = {
  name: "pritchard-electric",
  state: {
    frontity: {
      url: "http://test.pritchardelectric.net.user.server296.com",
      title: "Pritchard Electric",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["HOME", "/"],
            // ["SERVICES", "/test"],
            // ["GALLERY", "/gallery"],
            // ["FAQ", "/faq"],
            // ["CONTACT", "/contact"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://test.pritchardelectric.net.user.server296.com/",
          // url: "http://localhost/pedev",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
