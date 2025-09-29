import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  title: string;
  isButtonVisible?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
};

const HeaderSection = ({ title, isButtonVisible, buttonText, onButtonClick }: Props) => {
  return (
    <div className="flex items-center justify-between gap-6">
      <h2 className="text-xl font-bold">{title}</h2>

      {isButtonVisible && (
        <>
          <Button variant="outline" onClick={onButtonClick} className="mt-4">
            <PlusIcon />
            {buttonText}
          </Button>
        </>
      )}
    </div>
  );
};

export default HeaderSection;
