import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/FilterRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.filterRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.filterSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.filterFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
