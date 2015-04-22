#Development
```
./gradlew server
```

then open http://localhost:10101

#Build
##JS
```
./gradlew closureCompileJS
```
Or put application and external JS together
```
./gradlew assembleJS
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
