### City weekly seed


## Plugins used

* react-navigation - Navigation library
* redux- State management library
* redux-saga - Middleware for Redux.
* react-native-paper - Ui component library
* react-native-config - Config variables manging library
* axios - HTTP client
* react-native-fast-image - Performant React Native image component.
* @reduxjs/toolkit - The official, opinionated, batteries-included toolset for efficient Redux development
* react-native-keychain - Keychain/Keystore Access for React Native
* @react-native-community/geolocation - The Geolocation API
* @react-native-community/async-storage - Key-value storage system
* react-native-firebase - Social auth, push notification etc...

## Language

* Typescript

## Main folder structure

* src/assets
  *  src/assets/images
  *  src/assets/values
        *  src/assets/values/colors
        *  src/assets/values/measures
        *  src/assets/values/strings

* src/components
  *  src/assets/{component-name}
      *  src/assets/{component-name}/{component-name}.component.tsx
      *  src/assets/{component-name}/{component-name}.style.ts

* src/config 

* src/pages
  *  src/pages/{page-name}
        *  src/pages/{page-name}/{page-name}.page.tsx
        *  src/pages/{page-name}/{page-name}.style.ts

* src/slices
  *  src/slices/{slice-name}.slice.ts

* src/sagas
  *  src/slices/{saga-name}.saga.ts

* src/store
  *  src/store/root.reducer.ts
  *  src/store/root.saga.ts
  *  src/store/store.ts

* src/routes
  *  src/routes/navigation.ts
  *  src/routes/rootNavigation.ts

* src/styles
  *  src/{style-name}.ts

* src/utils/

* env/

* @types/


