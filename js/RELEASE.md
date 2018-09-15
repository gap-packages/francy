# Making a francy release

## Update version number

Follow the git flow:

```bash
mcmartins@local:~$ git checkout develop # just to make sure
mcmartins@local:~$ git flow init # all defaults except the tag prefix that should be 'v'
mcmartins@local:~$ git flow release start 0.10.0
mcmartins@local:~$ git checkout master
mcmartins@local:~$ git merge release/0.10.0
mcmartins@local:~$ git flow release finish '0.10.0'
mcmartins@local:~$ git push
mcmartins@local:~$ git push --tags
```

Notes:

After runing `git flow release start <v>`, update the version number on /js using 
`npm run version`. Update `gap/PackageInfo.g` and the tests relying on it.

Make sure all versions are consitent and commit your changes.

Travis will run and push a new release of the jupyter_francy extension to PyPi.
