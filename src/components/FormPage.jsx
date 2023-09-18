import FormInput from "./FormInput";

function FormPage() {
  return (
    <div className="form-input bg-white border-[2px] p-10 w-[50rem] rounded-[20px]">
      <div className="header text-center">
        <h1 className="text-black font-bold text-2xl">Sign In</h1>
        <h2 className="text-black font-normal text-xl">
          Please input your account
        </h2>
      </div>
      <FormInput />
    </div>
  );
}

export default FormPage;
