import { useDispatch, useSelector } from 'react-redux';

function useAuth (data = null, fn){
    
    const dispatch = useDispatch();
    const auth = useSelector( state => state.auth );
  
    function handleAuth(){ dispatch( fn(data) ); }
 
    return {
        handleAuth,
        auth
    }
}

export default useAuth;