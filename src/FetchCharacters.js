import { useReducer, useEffect } from 'react'
import axios from 'axios'

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
}

const URL = 'https://www.breakingbadapi.com/api/characters'

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, characters: [] }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, characters: action.payload.characters }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, characters: [] }
    default:
      return state
  }
}

export default function useFetchCharacters(params) {
  const [state, dispatch] = useReducer(reducer, { characters: [], loading: true })

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source()
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios.get(URL, {
      cancelToken: cancelToken1.token,
      params: { markdown: true, ...params }
    }).then(res => {
      dispatch({ type: ACTIONS.GET_DATA, payload: { characters: res.data } }) 
      console.log(res.data)
    }).catch(error => {
      dispatch({ type: ACTIONS.ERROR, payload: { error: error } }) 
    })
    

    axios.get(URL, {
      params: { markdown: true, ...params }
    }).catch(e => {
      dispatch({ type: ACTIONS.ERROR, payload: { error: e } }) 
    }) 
  }, [params])
  
  return state
}