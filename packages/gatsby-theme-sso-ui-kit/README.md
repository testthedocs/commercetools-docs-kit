# commercetools sso-ui-kit plugin

It's a gatsby theme plugin offering SSO ui elements such as login and logout buttons or avatar (account box) component.
The plugin interacts with auth0 authentication provider and therefore needs to be initialised with auth0 specific parameters.

## Configuration

`gatsby-theme-sso-ui-kit` plugin expects 2 parameters:

- `auth0Domain`: the auth0 application domain url (it is defined in the auth0 management app)
- `auth0ClientId`: the auth0 application client id (it is defined in the auth0 management app)
- `learnApiBaseUrl`: the learn API base url. It can be omitted if the host running the site matches the api host.

In order to enable the plugin, the following configuration should be added to the `gatsby-config.js` plugin section:

```
{
    resolve: '@commercetools-docs/gatsby-theme-sso-ui-kit',
    options: {
        auth0Domain: 'auth0domain.dummy.tld',
        auth0ClientId: 'cliendItString',
        learnApiBaseUrl: 'https://api.host.tld',
    },
},
```

The plugin will be enabled only if both the above described configuration options are defined.