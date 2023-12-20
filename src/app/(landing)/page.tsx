import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Welcome</h1>
      <Button variant={"outline"}>
        <a href="/sign-in">SignIn</a>
      </Button>
      <Button variant={"outline"}>
        <a href="/sign-up">SignUp</a>
      </Button>
    </div>
  );
}
