import {useState} from "react";

function FormInput() {
  const [inputUsername, setUsername] = useState();
  const [inputPassword, setPassword] = useState();
  const onChangedUserHandler = (ev) => setUsername(ev.target.value);
  const onChangedPasswordHandler = (ev) => setPassword(ev.target.value);

  function onSubmit() {
    return alert(`Welcome. ${inputUsername} \nYour password is : ${inputPassword}`);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="input-form py-2 flex flex-col gap-2">
        <label htmlFor="name">Username</label>
        <input
          type="text"
          className="border-[1px] border-black rounded-md w-full h-[2.5rem] p-2"
          value={inputUsername}
          onChange={onChangedUserHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="border-[1px] border-black rounded-md w-full h-[2.5rem] p-2"
          value={inputPassword}
          onChange={onChangedPasswordHandler}
        />
        <button className="w-full mt-5 h-[2.5rem] rounded-md bg-black text-white">
          Sign Now
        </button>
      </div>
    </form>
  );
}
export default FormInput;
