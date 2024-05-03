"use client"

import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';


class ISidebarItem {
    name = "";
    icon = "";
    path = "";
    subItems = [];
    isSubItem = false;
}

class ISubItem {
    name = "";
    icon = "";
    path = "";
}

const SidebarItem = ({ item } = { item: ISidebarItem }) => {
    const navigate = useNavigate();
    const { name, icon: icon, subItems, path, isSubItem } = item;
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

   

    const onClick = () => {
        path !== '#' && navigate(item.path);
        if (subItems && subItems.length > 0)
            return setExpanded(!expanded);
    };

    const isActive = useMemo(
        () => {
            return path === pathname;
        }, [path, pathname]
    );

    return (
        <>
            <div className={`flex item-center p-3 m-1 rounded-lg hover:bg-blue-100 cursor-pointer hover:text-ui-active justify-between ${isSubItem && "ml-3"} ${isActive && "text-ui-active bg-blue-100"}`}
                onClick={onClick}
            >   <div className='flex space-x-2'>
                <span className="material-symbols-outlined">{icon}</span>
                <p>{name}</p>
                </div>
                {subItems && subItems.length > 0 && (
                    <span className={`material-symbols-outlined material-sm ${expanded ? "rotate-90" : ""}`}>chevron_right</span>
                )}
            </div>
            {expanded && subItems && subItems.length > 0 && (
                subItems.map((item) => {
                    return <SidebarItem key={item.path} item={item} />
                })
            )}
        </>
    )
}

export default SidebarItem;