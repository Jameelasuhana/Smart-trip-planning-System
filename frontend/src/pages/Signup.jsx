import { useState } from "react";
import { registerUser } from "../api/auth";

function Signup() {
  const [form, setForm] = useState({ name:"", email:"", password:"" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(form);
    alert("Signup successful");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-lg font-bold">Signup</h2>
      <input className="border w-full p-2" placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input className="border w-full p-2" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input className="border w-full p-2" type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button className="bg-green-500 text-white w-full py-2">Signup</button>
    </form>
  );
}

export default Signup;