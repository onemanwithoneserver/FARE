import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 font-['Outfit']">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-[#0B1D3A]/60 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ 
                            type: 'spring', 
                            damping: 25, 
                            stiffness: 300,
                            duration: 0.4
                        }}
                        className="relative w-full max-w-[800px] max-h-[90vh] overflow-y-auto bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl z-10 custom-scrollbar"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#F8FAFD] hover:bg-[#EEF4FF] text-[#0B1D3A] transition-colors z-20 group border border-[#0B1D3A]/5 shadow-sm"
                        >
                            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                        
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    if (!mounted) return null;

    return createPortal(modalContent, document.body);
}
