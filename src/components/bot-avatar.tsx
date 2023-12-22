import { Avatar, AvatarImage, Fallback } from "@radix-ui/react-avatar";

const BotAvatar = () => {
  return (
    <Avatar className="mt-8">
      <AvatarImage
        src={"/images/ai-bot.png"}
        alt="ai bot"
        className="max-w-[32px]"
      />
      <Fallback>
        <span className="font-bold border py-2 px-5 bg-black/10 flex justify-center items-center rounded-full">
          AI-BOT
        </span>
      </Fallback>
    </Avatar>
  );
};

export default BotAvatar;
