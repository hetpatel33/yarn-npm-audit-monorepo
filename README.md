# parcel-plugin-externals-yarn-workspaces-issue-demo

This reproduces https://github.com/FlorianRappl/parcel-plugin-externals/issues/10.

```
yarn && yarn start
```

A page will be open that should call an externalized function which is not provided anywhere and therefore fail. However the function is bundled and actually prints a message on the screen.
