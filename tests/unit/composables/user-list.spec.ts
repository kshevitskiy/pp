import { assert, describe, expect, it } from 'vitest'
import { useUserList } from '~/composables'

describe('user-list composable', () => {
  it('to have defined methods properties', () => {
    const userList = useUserList()

    expect(userList).toHaveProperty('list')
    expect(userList).toHaveProperty('remove')
    expect(userList).toHaveProperty('reset')
  })
})

// TODO: Test each separate composable method
// ...
