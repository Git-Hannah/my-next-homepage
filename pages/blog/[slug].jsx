import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  console.log(router.query.log);
  return (
    <div>
      <br /> My Blog Page {router.query.slug}
    </div>
  );
}
