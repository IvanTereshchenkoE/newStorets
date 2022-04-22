import { useForm } from "react-hook-form";
import styled from "styled-components";
import InputMask from "react-input-mask";


const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: #dfdfdf;
`;

const Error = styled.div`
  font-size: 12px;
  color: #800101;
`;

const Field = styled.fieldset`
  background-color: #dfdfdf;
  border: none;
  margin-bottom: 10px;
`;

export default function ProfileForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Resume</h1>
      <label>
        First Name:
        <Input
          {...register("firstName", {
            required: "поле обязательно к зополнению!!!",
            minLength: { value: 3, message: "Минимум 5 символов" },
            pattern: { value: /^[A-Za-z]+$/i, message: "Недопустимые символы" },
          })}
        />
        <Error>
          {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </Error>
      </label>
      <label>
        Last Name:
        <Input
          {...register("lastName", {
            required: "поле обязательно к зополнению!!!",
            minLength: { value: 3, message: "Минимум 5 символов" },
            pattern: { value: /^[A-Za-z]+$/i, message: "Недопустимые символы" },
          })}
        />
        <Error>
          {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
        </Error>
      </label>
      <label>
        Family Name:
        <Input
          {...register("Family Name", {
            required: "поле обязательно к зополнению!!!",
            minLength: { value: 3, message: "Минимум 5 символов" },
            pattern: { value: /^[A-Za-z]+$/i, message: "Недопустимые символы" },
          })}
        />
        <Error>
          {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
        </Error>
      </label>
      <label>
        Age:
        <Input
          type={"number"}
          {...register("age", {
            min: 18,
            max: 99,
            required: true,
          })}
        />
        <Error>
          {errors.age && <p>должно быть младьше 99 и старше 18 лет!!!</p>}
        </Error>
      </label>
      <Field>
        Choose your gender:
        <form>Male</form>
        <input
          type="radio"
          value="male"
          checked
          {...register("gender")}
        ></input>
        <form>Female</form>
        <input
          type="radio"
          value="female"
          checked
          {...register("gender")}
        ></input>
      </Field>
      <label>
        Email:
        <Input
          type="email"
          placeholder="email@example.com"
          {...register("email", { required: true })}
        />
      </label>
      <label>
        Number:
        <InputMask
          mask="+7-(999)-999-9999"
          className={"tel"}
          {...register("phone", {
            required: true,
            minLength: { value: 11, message: "11 цифр" },
          })}
        />
        <Error>
          {errors?.Number && <p>{errors?.Number?.message || "Error!"}</p>}
        </Error>
      </label>
      <button type="submit">Register</button>
    </Form>
  );
}
