const SteamUser = require("steam-user");
const client = new SteamUser();

const LogOnOptions = {
  accountName: "",
  password: "",
};

client.logOn(LogOnOptions);

client.on("loggedOn", () => {
  console.log("Logged on");
  client.setPersona(SteamUser.EPersonaState.Online);
  client.gamesPlayed("Tên Custom Game Here");
});
