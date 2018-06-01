# Making a francy release

## Update version number

After merging a feature branche on develop, update the version number in 
`js/package.json`, `gap/package.json`, `gap/PackageInfo.g`, `extensions/jupyter_francy/_version.py`, and `extensions/jupyter/package.json`.

The versions on the `package.json` can be managed with `npm version`:

```bash
mcmartins@local:francy/js$ npm version minor
v0.6.0
```

Update the local dependencies for *francy-js* and *francy-gap* on `extensions/jupyter/package.json`.
This is a local dependency, tarball named <module-name>-<version>.tgz, to the `npm pack` built on each module *francy-js* and *francy-gap*, 
so it is needed to update the file name with the new version:

```json
...
  "francy-js": "../../js/francy-js-0.6.0.tgz",
  "francy-gap": "../../gap/francy-gap-0.6.0.tgz"
...
```

Make sure all versions are consitent and commit your changes.

Follow the git flow:

```bash
mcmartins@local:~$ git checkout develop # just to make sure
mcmartins@local:~$ git flow init # all defaults except the tag prefix that should be 'v'
mcmartins@local:~$ git flow release start 0.6.0
mcmartins@local:~$ git checkout master
mcmartins@local:~$ git merge release/0.6.0
mcmartins@local:~$ git flow release finish '0.6.0'
mcmartins@local:~$ git push
mcmartins@local:~$ git push --tags
```

Travis will run and push a new release of the jupyter_francy extension to PyPi.
