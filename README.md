# Frontend social media rest api: Alpha

this a the figma link https://www.figma.com/file/PgUJR0YqHDQMglCIHrnhJG/Untitled?node-id=2%3A70&t=Il63TIkaYEBwXk77-1, is only for visual porpuse, use it as reference

===================================================================================

# Rest Api Social Media Frontend Service:

This is a Social media Frontend project, it uses [MY OWN SOCIAL MEDIA BACKEND SERVICE](https://github.com/yamilt351/Social-media).

The goal with this project is show the backend working.

# INDEX:

- [Features And Usage](#Features-And-Usage)
  - [Features List](#Features-List)
- [Views](#Views)
  - [Demo Desktop](#Demo-Desktop)
  - [Demo Mobile](#Demo-Mobile)
- [CSS And Rules](#CSS-And-Rules)
  - [Global Values](#Global-Values)
- [Tools](#Tools)
  - [React](#React)
  - [React Router Dom](#React-Router-Dom)
  - [Redux Toolkit](#Redux-Toolkit)
  - [React Icons](#React-Icons)
  - [Local Storage](#Local-Storage)
  - [Express Rate Limit](#Express-Rate-Limit)
  - [Timeago](#Timeago)
  - [Axios](#Axios)
  - [Verify Token](#Verify-Token)
- [About The Project](#About-the-project)
  - [Deploy](#Deploy)
  - [Future Features](#Future-Features)
  - [About Us](#About-Us)
  - [Changelog](#Changelog)
  - [Contributions](#Contributions)

# Features And Usage

---

## Features List

| Features            | Implemented |
| ------------------- | ----------- |
| Create Account      | y           |
| Login               | y           |
| Logout              | y           |
| Home                | y           |
| Subscriptions       | y           |
| Trending            | y           |
| Search Post         | y           |
| Create Post         | y           |
| See Post            | y           |
| Add View post       | y           |
| Edit Post           | y           |
| Delete Post         | y           |
| Like Post           | y           |
| Dislike Post        | y           |
| Recommended Post    | y           |
| Comment Post        | y           |
| Get comments        | y           |
| Like comments       | y           |
| Dislike Comment     | y           |
| Edit Comment        | y           |
| Delete Comment      | y           |
| Subscribe Channel   | y           |
| Unsubscribe Channel | y           |
| Delete User         | y           |
| Loading Screen      | y           |

- You can watch the whole Rest Api Endpoint [here](https://github.com/yamilt351/Social-media) and compare.

- go back to --->[Index](#index)

---

# Views

---

## Demo Desktop:

## Demo Mobile:

# CSS And Rules:

## Global Values:

```
:root {
  /* dark shades of primary color*/
  --clr-primary-1: #222;
  --clr-primary-2: #333;
  /* lighter shades of primary color */
  --clr-primary-3: #fff;
	--clr-primary-4:#F8F8FF;
	--clr-primary-5:#F5F5F5;
  --clr-grey-1: hsl(211, 27%, 70%);
  --clr-gray-opa: #727272a1;
  --clr-dark-grey: #6b6b6b;
  --dark-shadow: #000;
  --action-color:#5DF67A;
  /* FONT-SIZE */

  --normal-name-section: 1.5rem;
  --normal-p: 1.3;
  --normal-title: 1rem;
  --normal-description: 0.8rem;

  --media-name-section: 1rem;
  --media-title: 0.8rem;
  --media-description: 0.6rem;

  /* ICONS SIZE */

  --menu-icon-size: 1.3rem;
  --text-icon-size: 1rem;
}
```

- go back to --->[Index](#index)

# Tools:

## React:

- Version: "^18.2.0"

## React Router Dom:

- Version: ^6.8.1"

- React Router enables "client side routing".

In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

Client side routing is enabled by creating a Router and linking/submitting to pages with Link and <Form>:

- You can find more information [here](https://reactrouter.com/en/main/start/overview)

## Redux Toolkit:

- Version: "^1.9.3"

- You can find more information [here](https://redux-toolkit.js.org/introduction/getting-started)

## Local Storage:

- Redux-persist: "^6.0.0"

- The user information is stored into the local Storage
- You can find more [here](https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/)

## Timeago:

- Version: "^4.0.2"

- By default, dates show in timestamps format, but the server provides timeago.js to change that format.
- You can find more about timeago.js [here](https://www.npmjs.com/package/timeago.js/v/4.0.0-beta.3)

## Verify Token:

- This API use JWT as an authentication method. Passing a cookie into the user browser header,
  our CORS use:

```
	{origin: true,
	credentials: true}

```

so, if your gonna use axios, please add `{withCredentials: true, credentials: 'include'}` as your third argument

- You can find more information about JWT [here](https://www.npmjs.com/package/jsonwebtoken)

- go back to --->[Index](#index)

---

## Future Features

| high                                    | medium                                     |
| --------------------------------------- | ------------------------------------------ |
| Profile                                 | Comment commentary (need backend endpoint) |
| Get Images                              | Read Later (need a backend endpoint)       |
| Notifications (need a backend endpoint) |                                            |

---

# About Us

- [Yamil Tauil Linkedin](https://www.linkedin.com/in/yamil-tauil/)
- [Contact Yamil Tauil](mailto:y.kasper@protonmail.com)

- [Luis Franco](https://github.com/luisfranco23)

# Changelog

- subscriptions: now subscriptions endpoints send the right response
- Edit user: The Description was updated to indicates the right funcionality.

# Contributions

- Clone Repo
- Create your branch

```
git clone https://github.com/yamilt351/social-media-frontend/tree/main
```

- Make your changes
- Test your changes
- Document your changes
- create your pull request with evidences

# Licence

- GPLv3

- go back to --->[Index](#index)
