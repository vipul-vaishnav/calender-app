export function genIcon(category: string): string {
    switch (category) {
        case "goal":
            return "⚽"
        case "money":
            return "💵"
        case "todo":
            return "📝"
        case "health":
            return "🏋️"
        case "study":
            return "✏️"
        case "project":
            return "🏢"
        default:
            return ""
    }
}