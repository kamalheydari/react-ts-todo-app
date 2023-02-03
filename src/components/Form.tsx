import { useRef } from "react";

interface Props {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Form: React.FC<Props> = (props): JSX.Element => {
  // PROPS
  const { title, setTitle, handleAdd } = props;

  // REFS
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type='text'
        className='input__box'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type='submit' className='input__submit'>
        GO
      </button>
    </form>
  );
};

export default Form;
