import { test, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { AppStatus } from '~/types/enums'
import Alert from './Alert.vue'

test('mount component', async () => {
  const wrapper = mount(Alert, {
    props: {
      variant: AppStatus.INFO
    },
    slots: {
      default: () => 'Alert message'
    }
  })

  expect(wrapper.classes('alert')).toBe(true)
  expect(wrapper.classes('alert--info')).toBe(true)
  expect(wrapper.text()).toContain('Alert message')
  expect(wrapper.html()).toMatchSnapshot()
})

test('alert is visible', () => {
  const wrapper = shallowMount(Alert, {
    props: {
      variant: AppStatus.INFO
    }
  })

  expect(wrapper.vm.visible).toBe(true)
})
