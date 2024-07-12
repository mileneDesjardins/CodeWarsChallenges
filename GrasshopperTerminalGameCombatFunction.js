// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  // Write your code here
  if (health < 0 || health - damage < 0) {
    return 0;
  } else {
    return health - damage;
  }
}

//Best practices
function combat(health, damage) {
  return health < damage ? 0 : health - damage;
}
