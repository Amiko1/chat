import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

export default function SocialLinks() {
  return (
    <article className="flex justify-center items-ccenter gap-6">
      <BsFacebook className="text-xl" />
      <BsInstagram className="text-xl" />
      <BsTiktok className="text-xl" />
    </article>
  );
}
