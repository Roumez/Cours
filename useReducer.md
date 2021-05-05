* useReducer alternative useState
 (state, action) => newState 
 const initialState = {
   var1: initialVar1,
   var2: initialVar2,
   var3: initialVar3,
 }
 const [state, dispatch] = useReducer(reducer, initialState)

 const reducer = (state, action) => {
   retourne nouvelle valeur de state
 }
 const [state => etat initial , dispatch => fct qui gere la logique] = React.useReducer(reducer, initialState, init)