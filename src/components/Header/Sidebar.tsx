import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Logo } from "./Svgs/Logo";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SideBar({ open, setOpen }: Props) {
  return (
    <Dialog open={true} onOpenChange={setOpen}>
      <DialogContent className="data-[state=closed]:duration-0 data-[state=open]:duration-0 left-[7.5rem] top-[23rem] h-full border-r w-3/4 sm:max-w-sm pr-0">
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center gap-2 ">
              <Logo w="4" h="4" />
              <span className="font-bold text-[1rem]">shadcn/ui</span>
            </div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
