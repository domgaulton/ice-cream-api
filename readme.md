https://medium.com/faun/posting-to-your-express-server-2bf0a0b516d0

## Deploy
```
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```

## Add Heroku 
```
$ brew tap heroku/brew && brew install heroku
$ heroku login
$ heroku git:remote -a ice-creams-api
```