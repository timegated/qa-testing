import controllers from '../user.controllers'
import { isFunction } from 'lodash'


describe('user controllers', () => {
  test('has me and updateme routes', () => {
    const userRoutes = [
      'me',
      'updateMe'
    ]

    userRoutes.forEach(name => {
      expect(isFunction(controllers[name])).toBe(true)
    })
  })

})