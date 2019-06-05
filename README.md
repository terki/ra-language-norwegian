# Norwegian Messages for React-Admin

Norwegian (bokmål) messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install --save ra-language-norwegian
```

## Usage

```js
import norwegianMessages from 'ra-language-norwegian';

const messages = {
    'nb': norwegianMessages,
};
const i18nProvider = locale => messages[locale];

<Admin locale="nb" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License, and sponsored by [terki](https://www.terki.no).