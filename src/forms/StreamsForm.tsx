import { KickLogo } from "@components/KickLogo";
import { TwitchLogo } from "@components/TwitchLogo";
import {
  Input,
  InputAdornment,
  InputButton,
  InputGroup,
} from "@components/Input";
import { Stream } from "@utils/url";
import { useForm } from "react-hook-form";

import { RiDeleteBin2Line } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

type FormFields = {
  streams: Stream[];
};

type StreamsFormProps = {
  initialValues?: FormFields;
  onSubmit: (formFields: FormFields) => void;
} & React.ComponentPropsWithoutRef<"form">;

export const StreamsForm: React.FC<StreamsFormProps> = ({
  initialValues,
  onSubmit,
  className,
  ...props
}) => {
  const { handleSubmit, register } = useForm({ defaultValues: initialValues });

  return (
    <form
      className={twMerge(className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <ul className="grid gap-4">
        <li>
          <InputGroup>
            <InputAdornment>
              <TwitchLogo size={20} />
            </InputAdornment>
            <Input />
            <InputButton>
              <RiDeleteBin2Line size={20} />
            </InputButton>
          </InputGroup>
        </li>
        <li>
          <InputGroup>
            <InputAdornment>
              <KickLogo size={20} />
            </InputAdornment>
            <Input />
            <InputButton>
              <RiDeleteBin2Line size={20} />
            </InputButton>
          </InputGroup>
        </li>
      </ul>
    </form>
  );
};
