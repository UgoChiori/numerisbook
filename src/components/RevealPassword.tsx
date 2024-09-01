// import EyeHide from "./svg-icons/eye-hide";
// import { EyeIcon } from "@heroicons/react/24/outline";

type RevealPropsType = {
  reveal: boolean;
  setReveal: (value: boolean) => void;
};

export default function RevealPassword({ reveal, setReveal }: RevealPropsType) {
  return (
    <div className="cursor-pointer w-4" onClick={() => setReveal(!reveal)}>
      {/* {reveal ? <EyeIcon /> : <EyeHide />} */}
    </div>
  );
}
