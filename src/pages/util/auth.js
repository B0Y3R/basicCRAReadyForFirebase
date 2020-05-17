export const authMiddleWare = (history) => {
    const authToken = localStorage.getItem('AuthToken');
    console.log(authToken)
    if (authToken === null){
        console.log('hit return path')
        history.push('/login')
    }
    return;
}