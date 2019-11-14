# Unit & E2E testing

```bash
yarn add --dev jest vue-jest babel-jest babel-core@^7.0.0-bridge.0 jest-serializer-vue @vue/test-utils @babel/plugin-transform-runtime
```

In our `package.json`, we add the `test` script calling: `jest`

We need to add a `jest.config.js` file:

```js
module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  watchman: false,
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1",
    "^~~/(.*)$": "<rootDir>/$1",
    "^@/(.*)$": "<rootDir>/$1"
  },
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/pages/*.vue"
  ]
}
```

We wil also need a `jest.config.js` file:

```js
module.exports = function(api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs'
      }
    ]
  ]

  return {
    presets,
    plugins: ['@babel/plugin-transform-runtime']
  }
}
```

Inside `components/`, create a `__tests__` directory to test our components.

We create our `components/__tests__/MyButton.spec.js` file:

```js
import { shallowMount } from '@vue/test-utils'
import MyButton from '../MyButton'


const factory = () => shallowMount(MyButton, {})

describe('MyButton', () => {
  test('mounts properly', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
```

Then you can add more tests following https://vue-test-utils.vuejs.org.
