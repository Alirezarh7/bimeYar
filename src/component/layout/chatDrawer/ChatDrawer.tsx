import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export default function ChatDrawer() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "سلام! 👋 من چت ‌بات بیمه یار هستم، هر سوالی داری بپرس.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: "این جواب نمونه است 😉", sender: "bot" },
      ]);
    }, 800);

    setInput("");
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 rounded-full p-4 shadow-lg bg-[var(--primary)] text-white hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 h-full w-96 bg-[var(--footerBack)] shadow-2xl z-[9999] flex flex-col rounded-r-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-[var(--primary)]">چت ‌بات بیمه یار</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <X className="w-5 h-5 text-[var(--muted)]" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                      msg.sender === "bot"
                        ? "bg-gray-100 text-gray-700 self-start"
                        : "bg-[var(--primary)] text-white self-end ml-auto"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
              </div>

              {/* اینپوت ارسال پیام */}
              <div className="p-3 border-t border-gray-200 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="پیامت رو بنویس..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
                />
                <button
                  onClick={handleSend}
                  className="bg-[var(--primary)] text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
                >
                  ارسال
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
