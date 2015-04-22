#Development
```
./gradlew server
```

then open [http://localhost:10101](http://localhost:10101)

#Build
##JS
```
./gradlew closureCompileJS
```
Or put application and external JS together
```
./gradlew assembleJS
```
##Test JS
Default is the firefox browser but selenium seems to have some issues with it :(
```
./gradlew testJS
```
```
./gradlew testJS -Pwatch
```
With chrome
```
./gradlew testJS -Pchrome
```
##CSS
```
./gradlew compileSCSS
```
Or put it all together directly
```
./gradlew assembleCSS
```

##Get all external content like jquery, fonts or extra css stuff
```
./gradlew assembleWebapp
```
see ```build/webapp```
