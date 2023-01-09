import React from "react"
import axios from "axios"

function  App(){
const [data, setData] = React.useState();
const url = "http://127.0.0.1:8000";

const GetData = () => {
	axios.get(url).then((res)=>{
	setData(res.data)
});
};

// const GetUsers = () => {
// 	axios.get(url + '/users/').then((res)=>{
// 	setData(res.data)
// });
// };


const CreateUser = () =>{
	axios.post('http://localhost:8000/users/', {
	  email: "string",
	  password: "string"
}
)
}

return(
<>
<div>
	<div>ここに処理を書いていきます</div>
	{data ? <div>{data.Hello}</div> : <button onClick={GetData}>データを取得</button>}
</div>
<div>
	{data ? <div>OK</div> : <button onClick={CreateUser}>User作成</button>}
</div>
</>
)
}

export default App;
// <div>
// 	{data ? <div>{data}</div> : <button onClick={GetUsers}>Usersを取得</button>}
// </div>
