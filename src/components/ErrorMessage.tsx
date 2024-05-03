import { addSpaceBeforeCapitalLetters } from '../utils';

interface Props {
  message?: string;
}

const ErrorMessage = ({ message }: Props): JSX.Element | null => {
  if (!message) return null;
  return (
    <p className="p-1 text-sm lowercase text-red first-letter:uppercase">
      {addSpaceBeforeCapitalLetters(message.split('"').join(''))}
    </p>
  );
};

export default ErrorMessage;
