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
