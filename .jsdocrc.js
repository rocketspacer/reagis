module.exports = {
  "plugins": ["plugins/markdown"],
  "recurse": true,
  "recurseDepth": 10,
  "source": {
    "include": ["src"],
    "excludePattern": "\.test\.|\.spec\."
  },
  "sourceType": "module",
  "tags": {
    "allowUnknownTags": true,
    "dictionaries": ["jsdoc", "closure"]
  },
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false,
    "default": {
      "includeDate": false
    }
  },
  "opts": {
    "recurse": true,
    "destination": "docs",
    "readme": "README.md",
    "template": "node_modules/minami",
  }
}
