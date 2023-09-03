import { KickLogo } from "@components/KickLogo";
import { TwitchLogo } from "@components/TwitchLogo";
import {
  Input,
  InputAdornment,
  InputButton,
  InputGroup,
} from "@components/Input";
import { Stream } from "@utils/url";
import { useFieldArray, useForm } from "react-hook-form";

import { RiDeleteBin2Line } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import { Button, ButtonGroup } from "@/components/Button";

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
  const { handleSubmit, register, control } = useForm<FormFields>({
    defaultValues: initialValues,
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "streams",
    }
  );

  return (
    <form
      className={twMerge("", className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <ButtonGroup>
        <Button
          onClick={() => append({ platform: "twitch", channel: "" })}
          intent="secondary"
        >
          Add <TwitchLogo size={20} />
        </Button>
        <Button
          onClick={() => append({ platform: "kick", channel: "" })}
          intent="secondary"
        >
          Add <KickLogo size={20} />
        </Button>
      </ButtonGroup>

      <ul className="mt-4 grid grid-cols-2 gap-4">
        {fields.map((field, index) => (
          <li key={field.id}>
            <InputGroup>
              <InputAdornment>
                {field.platform === "twitch" ? (
                  <TwitchLogo size={20} />
                ) : (
                  <KickLogo size={20} />
                )}
              </InputAdornment>
              <Input
                {...register(`streams.${index}.channel`, {
                  shouldUnregister: true,
                  required: true,
                })}
              />
              <InputButton onClick={() => remove(index)}>
                <RiDeleteBin2Line size={20} />
              </InputButton>
            </InputGroup>
          </li>
        ))}
      </ul>
    </form>
  );
};
