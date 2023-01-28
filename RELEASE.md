# Francy releases

Francy's releases are done automatically using GitHub Actions.

Update the project version number using `scripts/prepare.js`.

Commit and follow Git Flow instructions.

## Git Flow

Follow the git flow:

```bash
mcmartins@local:~$ git checkout develop # just to make sure
mcmartins@local:~$ git flow init # all defaults except the tag prefix that should be 'v'
mcmartins@local:~$ git flow release start 2.0.0
mcmartins@local:~$ git checkout master
mcmartins@local:~$ git merge release/2.0.0
mcmartins@local:~$ git flow release finish '2.0.0'
mcmartins@local:~$ git push
mcmartins@local:~$ git push --tags
```
