const settings = {
  "name": "hello-frontity",
  "state": {
    "frontity": {
      // "url": "http://localhost:8888",
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
        name: "my-first-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // "url": "http://localhost:8888"
          "url": "https://test.frontity.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
