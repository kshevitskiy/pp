import { test, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import AppError from './AppError.vue'

const errorFixture = {
  code: 400,
  message: 'Error message'
}

beforeEach(() => {
  const alert = document.createElement('div')
  alert.id = 'alert'
  document.body.appendChild(alert)
})

afterEach(() => {
  document.body.outerHTML = ''
})

test('mount component', async () => {
  const wrapper = mount(AppError, {
    props: {
      error: errorFixture
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('find alert component', async () => {
  const wrapper = mount(AppError, {
    props: {
      error: errorFixture
    }
  })
  wrapper.findComponent({ name: 'Alert' })
})

test('updates errors ref', async () => {
  const wrapper = mount(AppError, {
    props: {
      error: errorFixture
    }
  })

  expect(wrapper.vm.errors).toHaveLength(1)
  expect(wrapper.vm.errors).toMatchObject([{ data: errorFixture }])
})
