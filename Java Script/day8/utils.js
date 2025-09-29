// q1
export function greetUser(name){
    console.log(`hi ${name}`);
} 



export default class DataFetcher{
    async getUser(id){
        let user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        user = await user.json()
        return user
    }
}1