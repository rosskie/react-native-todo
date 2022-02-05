# Todo tracker app


Inspired (like, mostly copied) by these online tuturials:

- [a react native tutorial](https://medium.com/swlh/expo-react-native-navigation-7829a0e0321f)
- [a redux tutorial](https://medium.com/geekculture/how-to-integrate-redux-in-expo-react-native-5a4a0bd0f0c6)

# Dev

## Requirement

- [nodenv](https://github.com/nodenv/nodenv)
- [expo](https://expo.dev/)
- yarn

## Recommeded tools/cli

- [anyenv](https://github.com/anyenv/anyenv)
- [nodenv-default-package](https://github.com/nodenv/nodenv-default-packages)

## Local installation

```sh
nodenv install
yarn install
expo start
```

Some commented out codes are left there (at the moment) to be looked back in need :monkey: 


# Some thoubleshootings:

- This error message:

```
Reanimated 2 failed to create a worklet, maybe you forgot to add Reanimated's babel plugin?
```
  - [solution](https://stackoverflow.com/a/69925121)
    - add this babel config: 
      ```js
      plugins: ['react-native-reanimated/plugin'],
      ```
    - restart expo
      ```sh
      expo start --clear
      ```
    - restart simulator or expo app
