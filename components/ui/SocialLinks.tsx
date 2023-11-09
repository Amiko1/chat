import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

export default function SocialLinks() {
  return (
    <article className="flex justify-center items-ccenter gap-6">
      <BsFacebook className="text-xl text-white  dark:text-red" />
      <BsInstagram className="text-xl text-white" />
      <BsTiktok className="text-xl text-white" />
    </article>
  );
}
