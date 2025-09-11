import { motion, AnimatePresence } from "framer-motion";

interface BottomSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomSheetModal({ isOpen, onClose, children }: BottomSheetModalProps) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />

            <motion.div
              className="fixed bottom-0 left-0 right-0 bg-card rounded-t-2xl shadow-2xl z-50 max-h-[80%] overflow-y-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-center py-2">
                <div className="h-1 w-12 bg-gray-300 rounded-full" />
              </div>

              <div className="p-4">{children}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
