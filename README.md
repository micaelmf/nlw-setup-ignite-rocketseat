# nlw-setup-ignite-rocketseat

# NLW Setup (Ignite)

I am currently a PHP programmer, I started with this language a long time ago, in 2012. In the year 2023, seeking to improve more and more, I marked my territory in the world of reactive JavaScript. I participated in the Next Level Week Setup (NLW Setup), on the Ignite trail. It was a great opportunity to develop a habit tracking system using Fastify, React and React Native.

Thanks Rocketseat, let the next levels come!

Other social networks:
[linkedin](https://www.linkedin.com/in/micaelferreira) | [instagram](https://www.instagram.com/micael.mf/) | [twitter](https://twitter.com/micaelmf1)

Below I leave useful links and command used during the week:

## Day 1

### Commands - backend

- `npm install fastify` // more modern than the Express
- `npm install typescript -D`
- `npx tsc --init`
- `npm i tsx -D`
- `npx tsx src/server.ts`
- `npm run dev`
- `npm i -D prisma`
- `npm i @prisma/client`
- `npx prisma init --datasource-provider SQLite`
- `npx prisma migrate dev`
- `npx prisma studio` // open the prism sgbd
- `npm i @fastify/cors`

### Commands - frontend

- `npm vit@latest`
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`

### Useful links - mobile

- [https://react-native.rocketseat.dev/expo-managed/linux](https://react-native.rocketseat.dev/expo-managed/linux)
- [https://docs.expo.dev/get-started/installation/](https://docs.expo.dev/get-started/installation/)
- [https://facebook.github.io/watchman/docs/install#buildinstall](https://facebook.github.io/watchman/docs/install#buildinstall)

### Commands - mobile

- `npx create-expo-app mobile --template` // --template facilitates project creation using typescript
- `npx expo start`
- `npx expo start --clear --tunnel` // --tunell should be used when project is running on wsl2, to display using expo e --clear chear the cache
- `npx expo install expo-font @expo-google-fonts/inter`

## Day 2

### Useful links - server

- [https://www.npmjs.com/package/prisma-erd-generator](https://www.npmjs.com/package/prisma-erd-generator)

### Commands - server

- `npm i -D prisma-erd-generator @mermaid-js/mermaid-cli`
- `npx prisma generate // create a bank diagram`
- `npx prisma migrate dev`
- `npx prisma seed`
- `npm i zod` // validates data sent to the backend (queries, parameters)
- `npm i dayjs` // operations with dates
- `npm i phosphor-react` // icon lib

### Commands - mobile

- `npm i nativewind`
- `npm i tailwindcss --save-dev`
- `npx tailwindcss init`
- `npx expo install react-native-svg`
- `npm i react-native-svg-transformer --save-dev` // then create the 'metro.config.js' file (there is an example from the transformer documentation)

## Day 3

### Useful links - web

- [https://www.radix-ui.com/](https://www.radix-ui.com/) // lib with non-styled, accessibility-focused components

### Commands - web

- `npm install @radix-ui/react-dialog`
- `npm install @radix-ui/react-popover`
- `npm i clsx` // for working with conditions for displaying css classes

### links úteis - mobile

- [https://reactnavigation.org/](https://reactnavigation.org/)

### Commands - mobile

- `npm install @react-navigation/native`
- `npx expo install react-native-screens react-native-safe-area-context`
- `npm install @react-navigation/native-stack`

## Day 4

### Useful links

- [https://pureinfotech.com/open-port-firewall-windows-10/](https://pureinfotech.com/open-port-firewall-windows-10/)
- [https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig)
- [https://blog.expo.dev/running-expo-in-windows-subsystem-for-linux-wsl2-425f6fd7838e](https://blog.expo.dev/running-expo-in-windows-subsystem-for-linux-wsl2-425f6fd7838e)

### Commands - web

- `npm install @radix-ui/react-checkbox`
- `npm i axios`

### Commands - mobile

- `npm i axios`
- `npm install --save clsx`
- `npm install -g localtunnel`
- `lt --local-host 0.0.0.0 --port 3333`

## Day 5

### Useful links

- [https://docs.swmansion.com/react-native-reanimated/](https://docs.swmansion.com/react-native-reanimated/)

### Commands - mobile

- `npx expo install react-native-reanimated`

