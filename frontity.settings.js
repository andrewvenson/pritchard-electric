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
              "/category/nature/"
            ],
            [
              "GALLERY",
              "/category/travel/"
            ],
            [
              "FAQ",
              "/tag/japan/"
            ],
            [
              "CONTACT",
              "/about-us/"
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
          "url": "https://test.frontity.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
