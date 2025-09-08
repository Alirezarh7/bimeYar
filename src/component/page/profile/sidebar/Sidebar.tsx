import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHome, FiEdit, FiUsers, FiBarChart, FiUser, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});

    const toggleExpand = (index: number) => {
        setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    const items = [
        {
            index: 0,
            title: 'صفحه اصلی',
            icon: <FiHome />,
            children: [
                { name: 'پیشخوان', icon: <FiBarChart /> },
                { name: 'پروفایل', icon: <FiUser /> },
                { name: 'تنظیمات', icon: <FiSettings /> },
            ],
        },
        {
            index: 1,
            title: 'پست ها',
            icon: <FiEdit />,
            children: [
                { name: 'ایجاد پست', icon: <FiEdit /> },
                { name: 'مدیریت پست ها', icon: <FiBarChart /> },
                { name: 'برچسب ها', icon: <FiSettings /> },
            ],
        },
        {
            index: 2,
            title: 'کاربران',
            icon: <FiUsers />,
            children: [
                { name: 'لیست کاربران', icon: <FiUsers /> },
                { name: 'نقش ها', icon: <FiSettings /> },
                { name: 'مجوزها', icon: <FiBarChart /> },
            ],
        },
    ];

    return (
        <div className="w-[250px] bg-[#f4f4f4] p-2.5">
            <div className="w-[80px] h-[80px] mb-2.5 bg-[#e0e0e0] rounded-full mx-auto" />
            {items.map((item) => (
                <div key={item.title}>
                    <div
                        className="flex font-bold text-md items-center justify-between gap-2.5 px-3.75 py-2.5 rounded-lg cursor-pointer hover:bg-[#e0e0e0]"
                        onClick={() => toggleExpand(item.index)}
                    >
                        <div className="flex items-center gap-2.5">
                            {item.icon} {item.title}
                        </div>
                        {item.children && <FiChevronDown />}
                    </div>
                    <AnimatePresence>
                        {expanded[item.index] && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="pl-5 overflow-hidden"
                            >
                                {item.children.map((child, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-1.25 text-sm pr-3.75"
                                    >
                                        <span className="text-base opacity-70">{child.icon}</span> {child.name}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;