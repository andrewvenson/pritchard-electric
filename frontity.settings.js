const settings = {
  "name": "pritchard-electric",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Pritchard Electric",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "HOME",
              "/"
            ],
            [
              "SERVICES",
              "/"
            ],
            [
              "GALLERY",
              "/gallery"
            ],
            [
              "FAQ",
              "/faq"
            ],
            [
              "CONTACT",
              "/contact"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://localhost/pedev"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
