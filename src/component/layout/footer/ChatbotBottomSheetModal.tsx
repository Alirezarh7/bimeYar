import { useState } from "react";
import { motion } from "framer-motion";
import BottomSheetModal from "../../general/bottomShitModal/BottomSheetModal.tsx";

interface IProps {
  open: boolean;
  onClose: (e: boolean) => void;
}

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const ChatbotBottomSheetModal = ({ onClose, open }: IProps) => {
  const [messages, setMessages] = useState<Message[]>([{ id: 1, text: "سلام! 👋 من چت‌ بات بیمه یار هستم، هر سوالی داری بپرس.", sender: "bot" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);

    // پاسخ موقتی (بعداً به API وصل می‌کنی)
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: "این جواب نمونه است 😉", sender: "bot" }]);
    }, 800);

    setInput("");
  };

  return (
    <BottomSheetModal isOpen={open} onClose={() => onClose(false)}>
      <div className="flex flex-col h-[60vh]">
        {/* هدر چت‌بات */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-primary">چت‌ بات بیمه یار</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={() => onClose(false)}>
            ✕
          </button>
        </div>

        {/* پیام‌ها */}
        <div className="flex-1 overflow-y-auto space-y-2 py-3">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${msg.sender === "bot" ? "bg-gray-100 text-gray-700 self-start" : "bg-primary text-white self-end ml-auto"}`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>

        {/* اینپوت */}
        <div className="flex items-center gap-2 border-t pt-2">
          <input
            type="text"
            placeholder="سوالتو بنویس..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-card-foreground text-card-foreground "
          />
          <button onClick={handleSend} className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
            ارسال
          </button>
        </div>
      </div>
    </BottomSheetModal>
  );
};

export default ChatbotBottomSheetModal;
