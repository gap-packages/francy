# Making a francy release

## Update version number

After merging branches on develop, update the version number in `extensions/jupyter_francy/_version.py`, and `extensions/jupyter_francy/package.json`.

Commit your changes.


```bash
mcmartins@local:~$ git checkout develop # just to make sure
mcmartins@local:~$ git flow init # all defaults except the tag prefix that should be 'v'
mcmartins@local:~$ git flow release start 0.5.0
mcmartins@local:~$ git checkout master
mcmartins@local:~$ git merge release/0.5.0
mcmartins@local:~$ git flow release finish '0.5.0'
mcmartins@local:~$ git push
mcmartins@local:~$ git push --tags
```

Travis will run and push a new release of the jupyter_francy extension to PyPi.
