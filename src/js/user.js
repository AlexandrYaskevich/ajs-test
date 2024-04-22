export const user = {
    name: 'Маг', 
    health: 90
  };

export function userNpc (npc) {
    if(npc.health >= 50) {
        return "healthy";
    }
    else if(npc.health <= 50 && npc.plaerOne.health >= 15) {
        return "wounded";
    }
    else if(npc.health < 15) {
        return "critical";
    }
}