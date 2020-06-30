import axios from "axios";

async function LoginUser(username: string, password: string): Promise<any> {
    //const url = process.env.NEXT_PUBLIC_USER_SERVICE_DOMAIN + '/api/sessions'
    console.log('LoginUser: ', { username, password })

    const url = 'http://localhost:3000/api/sessions'
    const response = await axios.post(url, { username, password })

    if ([200, 201, 202].includes(response.status)) {
        return response.data;
    } else {
        throw Error(`Error: ${response.status}: ${response.data}`)
    }
}

async function CreateUser(username: string, password: string): Promise<boolean> {
    return false;
}

export {
    LoginUser,
    CreateUser,
}
