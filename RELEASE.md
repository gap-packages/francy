# Francy releases

Francy's releases are done automatically using GitHub Actions.

Update the project version number using `npm run version` in /js. 
Update `gap/PackageInfo.g` and the tests relying on it.

Make sure all versions are consistent and commit your changes. Follow the Git Flow.

Travis will run and push a new release of the jupyter_francy extension to PyPi.

## Git Flow

Follow the git flow:

```bash
mcmartins@local:~$ git checkout develop # just to make sure
mcmartins@local:~$ git flow init # all defaults except the tag prefix that should be 'v'
mcmartins@local:~$ git flow release start 1.2.4
mcmartins@local:~$ git checkout master
mcmartins@local:~$ git merge release/1.2.4
mcmartins@local:~$ git flow release finish '1.2.4'
mcmartins@local:~$ git push
mcmartins@local:~$ git push --tags
```
