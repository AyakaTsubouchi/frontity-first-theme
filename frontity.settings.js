const settings = {
  "name": "hello-frontity",
  "state": {
    "frontity": {
      "url": "https://portfolio.ayakaru-kininaru.com/",
      // "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
        name: "tabimemo"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://portfolio.ayakaru-kininaru.com/"
          // "url": "https://test.frontity.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
