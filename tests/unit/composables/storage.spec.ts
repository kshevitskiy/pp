import { assert, describe, expect, it } from 'vitest'
import { useStorage } from '~/composables'

describe('storage composable', () => {
  it('to have defined methods properties', () => {
    const storage = useStorage()

    expect(storage).toHaveProperty('getItem')
    expect(storage).toHaveProperty('setItem')
    expect(storage).toHaveProperty('removeItem')
  })
})

// TODO: Test each separate composable method
// ...
