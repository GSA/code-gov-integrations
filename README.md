# Code.gov Integrations
[![CircleCI](https://circleci.com/gh/GSA/code-gov-integrations/tree/master.svg?style=shield)](https://circleci.com/gh/GSA/code-gov-integrations/tree/master)
[![Maintainability](https://api.codeclimate.com/v1/badges/e0522ebed343c27d8fa1/maintainability)](https://codeclimate.com/github/GSA/code-gov-integrations/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e0522ebed343c27d8fa1/test_coverage)](https://codeclimate.com/github/GSA/code-gov-integrations/test_coverage)

Small module to house Code.gov integrations with third party services.

## How to use this module

All integrations found in the `libs` folder are accesible when requiring this package.

```javascript
const { github } = require('@code.gov/code-gov-integrations');

const githubClientParams = {
    type: 'token',
    token: '[your-gh-token]'
};
const client = github.getClient(githubClientParams)

github.getData('gsa', 'code-gov-integrations', client)
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

For more examples take a looks at our `examples` folder.

## How to add a module / integration

All you have to do is add a folder with an `index.js` file that exports your integration's API. The folder name will the the name used to export the integration.

```
libs
  |- new_integration
    |- index.js
```

The included integration(s) export an object with a getData function. We recomend following the same pattern with your integrations.

Contributing integrations to this module must follow the pattern mentioned for it to be considered for inclusion.

## Generating License Data

To update the `dependency_licenses.json` file, run `npm run licenses`.

## License

As stated in [CONTRIBUTING](CONTRIBUTING.md):

> [..] this project is in the worldwide public domain (in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/)).

> All contributions to this project will be released under the CC0
> dedication. By submitting a pull request, you are agreeing to comply
> with this waiver of copyright interest.

## Questions?

Feel free to contact us however is most convenient for you:

* Twitter: [@CodeDotGov](https://twitter.com/CodeDotGov)
* Email: [code@gsa.gov](mailto:code@gsa.gov)
* LinkedIn: [code-gov](https://www.linkedin.com/company/code-gov)
* Join our #opensource-public Slack channel: https://chat.18f.gov/
