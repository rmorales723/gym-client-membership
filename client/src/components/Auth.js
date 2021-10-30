

function Auth({setCurrentUser}) {
    const [username, setUsername] = useState('')
    const [username, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch('/users',)
    }
    return {
        
    }
}