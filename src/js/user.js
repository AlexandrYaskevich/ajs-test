export function userNpc(npc) {
    if (npc.health > 50) {
        return "healthy";
    } else if (npc.health <= 50 && npc.health >= 15) {
        return "wounded";
    } else if (npc.health < 15) {
        return "critical";
    }
}