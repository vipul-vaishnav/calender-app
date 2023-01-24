import Calender from "../components/Calender";
import { SideNavDataType } from "../types/SideNavDataType";

export const SideNavData: SideNavDataType = [
    {
        label: "📆 Calender",
        hasChildren: true,
        children: Calender,
        name: "calender"
    },
    {
        label: "#️⃣ Channels",
        hasChildren: true,
        children: [
        ],
        name: "channels"
    },
    {
        label: "🎯 Target",
        hasChildren: true,
        children: [
        ],
        name: "targets"
    },
    {
        label: "New Event",
        hasChildren: false,
        icon: "new"
    },
]