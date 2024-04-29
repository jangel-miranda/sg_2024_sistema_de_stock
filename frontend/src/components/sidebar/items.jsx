"use client"

import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react'

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
    const { name, icon: icon, subItems, path, isSubItem } = item;
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();
    const pathname = usePathname();


    const onClick = () => {
        path !== '#' && router.push(path);
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
            <div className={`flex item-center space-x-2 p-3 rounded-lg hover:bg-blue-100 cursor-pointer hover:text-ui-active ${isActive && "text-ui-active bg-blue-100"} ${isSubItem && "ml-3"}`}
                onClick={onClick}
            >
                <span className="material-symbols-outlined">{icon}</span>
                <p>{name}</p>
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