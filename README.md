# who-i-am

A personal website for developers built with react. You can list the projects you worked on, write some bio about your self, and put in links to your social media, github, npm accounts.
Fee to use from everyone.

## How to use it

- Fork the project
- rn `yarn`
- Edit files in `src/config` and `src/global.scss`
- run `yarn deploy` to deploy it on github pages.

## Config files

Yo can find them in `src/config`. Please note that you need to put all the images in `src/assets` if you are not using urls. Otherwise you might run into errors.

- `me.json`
  General info about you

```
{
"name":  "Your name",
"birthday":  "Your bithday",
"profession":  "Your profession",
"image": "some url or image file",
"accounts": {
  "linkedin":  "https://www.linkedin.com/in/..",
  "github":  "https://github.com/name",
  "npm":  "https://www.npmjs.com/~name",
  "twitter":  "",
  "instagram":  "",
  "stackoverflow":  "",
  "stackshare":  "https://stackshare.io/name"
  }
}
```

- `projects.json`
  Projects you worked on or are working on

```
{
  "onlineProjects": [
    {
      "name":  "project name",
      "logo":  "logo.png or url",
      "description":  "Some long text here",
      "link":  "some link to your project"
    }
  ],
  "openSourceProjects": [
    {
       ...same as above
    },
  ],
  "projectsWorkedOn": [
    {
      ...same as above
    },
  ]
}
```

- `bio.tsx`
  Ab bio about you as html/jsx.

```html
import React from "react"; import { myAge } from "../utils"; export default () =>
<p>Hello world, I'm {myAge()} years old</p>
```

## Customize colors

Go to `src/global.scss`
Just change the 4 sass vairables in this file and colors will be applied to your site.
