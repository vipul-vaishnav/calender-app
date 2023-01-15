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
            { label: "# daily" },
            { label: "# appointments" },
            { label: "# frontend" },
            { label: "# production" },
            { label: "# exercise" },
            { label: "# ideas" },
            { label: "# family" },
            { label: "# meetings" },
            { label: "# backend" },
            { label: "# office" },
        ],
        name: "channels"
    },
    {
        label: "🎯 Target",
        hasChildren: true,
        children: [
            { label: "⚽ goal2023" },
            { label: "🗒️ todos" },
            { label: "✏️ exams" },
            { label: "💵 money" },
            { label: "🏋️‍♀️ gym" },
        ],
        name: "targets"
    },
    {
        label: "New Event",
        hasChildren: false,
        icon: "new"
    },
]