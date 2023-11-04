import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MessengerMessage({
  message,
  userId,
  authorId,
}: {
  message: string;
  userId: string;
  authorId: string;
}) {
  return (
    <article className="mt-10">
      {userId !== authorId ? (
        <div style={{ maxWidth: "24rem" }} className="flex gap-4 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="max-w-24">
            <div className="bg-yellow-300  px-2 py-2 rounded">
              <p className="self-endtext-sm text-slate-800">{message}</p>
            </div>
            <div className="mt-2">
              <time className="text-sm">By Stranger - July 7</time>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ maxWidth: "24rem" }}
          className="flex gap-4 mt-10 ml-auto  ml-auto justify-end"
        >
          <div className="max-w-24">
            <div className="bg-blue-300  px-2 py-2 rounded">
              <p className="self-endtext-sm text-slate-800">{message}</p>
            </div>
            <div className="mt-2">
              <time className="text-sm">By You - July 7</time>
            </div>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      )}
    </article>
  );
}
