import {useParams} from 'react-router'

function User() {
 const params = useParams()
 const username = params.username
 
  return (
    <div>
    <h1>Soy {username}</h1>
    </div>
   )
}
 
export default User;