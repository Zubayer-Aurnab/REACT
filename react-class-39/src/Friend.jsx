
export default function Friend(friend){
 const data = friend.friend
    const {name,email} = data
    
    return(
        <div className="box">
            <h4>name : {name} </h4>
            <p>email : {email} </p>
        </div>
    )
}