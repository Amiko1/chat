import { Button } from "@/components/ui/button";

export default function DarkButton(props) {
  return (
    <Button
      disabled={props.disabled}
      className={`${props.className} bg-slate-800 text-white mr--4 hover:bg-slate-800 hover:opacity-80  uppercase`}
    >
      {props.children}
    </Button>
  );
}
