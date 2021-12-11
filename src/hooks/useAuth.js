import { useDispatch, useSelector } from 'react-redux';

function useAuth (data = {}, fn){
    
    const dispatch = useDispatch();
    const auth = useSelector( state => state.auth );
  
    function handleAuth(){ if(typeof fn === 'function') dispatch( fn(data) ); }
    
    return {
        handleAuth,
        auth
    }
}

export default useAuth;