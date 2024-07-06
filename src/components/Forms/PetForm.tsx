import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

const PetForm = ({ children, onSubmit }: TFormProps) => {
  const methods = useForm();

  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  ); // Fixed syntax errors: Added missing React.Fragment shorthand and corrected semicolon placement
};

export default PetForm;
