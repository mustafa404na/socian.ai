import microphone from "@/images/aidemo/microphone.png";
import bot from "@/images/aidemo/bot.png";
import user from "@/images/aidemo/user.png";
import chatbot from "@/images/aidemo/chatbot.png";
import Image from "next/image";

export default function ChatBotCom() {
  return (
    <div className="py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-5xl font-light text-white sm:text-4xl">
            Chat bot
          </h2>
        </div>
        <div className="mx-auto mt-11 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none items-start lg:grid-cols-2 lg:gap-y-16">
            <div className="border grid gap-y-7 border-white/[.3] rounded-md px-4 py-6 bg-red w-full">
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium leading-6 text-white"
                >
                  Chat bot
                </label>
                <div className="mt-2 grid gap-y-5">
                  <div className="flex gap-x-3">
                    <div className="w-14 h-14 bg-white/[.1] shadow-sm border border-white/[.3] rounded-xl overflow-hidden grid justify-center items-center">
                      <Image src={bot} alt={" "} width={" "} />
                    </div>
                    <div className="flex-1">
                      <p className="block bg-white/[.1] text-white text-lg w-full rounded-lg py-3 px-4 shadow-sm border border-white/[.3]">
                        Hello ! I am socian chat bot. What can I do for you
                        today
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-3">
                    <div className="flex-1">
                      <p className="block bg-white/[.3] text-white text-lg w-full rounded-lg py-3 px-4 shadow-sm border border-white/[.3]">
                        Yea I feel good. How about the weather today? any
                        special occasion on my area??
                      </p>
                    </div>
                    <div className="w-14 h-14 bg-white/[.1] shadow-sm border border-white/[.3] rounded-xl overflow-hidden grid justify-center items-center">
                      <Image src={user} alt={" "} width={" "} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="flex-1">
                  <input
                    id="text"
                    name="text"
                    type="text"
                    autoComplete="text"
                    placeholder="Type here"
                    required
                    className="block bg-transparent text-white text-lg w-full rounded-lg py-3 px-4 shadow-sm border border-white/[.3] placeholder:text-white placeholder:text-lg"
                  />
                </div>
                <div className="w-14 h-14 bg-[#0068EC] rounded-xl overflow-hidden grid justify-center items-center">
                  <Image src={microphone} alt={" "} width={" "} />
                </div>
              </div>
            </div>
            <div className="grid justify-center items-center">
              <div>
                <Image className="mr-2" src={chatbot} alt={" "} width={" "} />
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
