const settings = {
  name: "pritchard-electric",
  state: {
    frontity: {
      url: "https://manage.pritchardelectric.net",
      title: "| Austin, TX | Pritchard Electric, LLC",
      description: "Pritchard Electric",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["HOME", "/"],
            ["SERVICES", "/services/"],
            ["GALLERY", "/gallery/"],
            ["FAQ", "/faq/"],
            ["CONTACT", "/contact/"],
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
          url: "https://manage.pritchardelectric.net",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
