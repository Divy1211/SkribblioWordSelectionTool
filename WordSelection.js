var unitscb, unitslist = "Xolotl Warrior, Villager, Spearman, Pikeman, Halberdier, Man At Arms, Long Swordsman, Militia, Champion, Eagle Warrior, Condottiero, Knight, Cavalier, Paladin, Steppe Lancer, Scout Cavalry, Light Cavalry, Hussar, Battle Elephant, Camel, Archer, Crossbowman, Skirmisher, Cavalry Archer, Genitour, Hand Cannoneer, Monk, Capped Ram, Siege Ram, Mangonel, Onager, Scorpion, Siege Tower, Trebuchet, Petard, Fishing Ship, Trade Cog, Transport Ship, Galley, War Galley, Galleon, Fire Ship, Demolition Ship, Cannon Galleon, Bombard Cannon, Cobra Car, Eagle Scout, Battering Ram, Siege Onager, Fire Galley, Demolition Raft, Arbalester, Fast Fire Ship, Two-Handed Swordsman, ";

var techscb, techslist = "Supplies, Tracking, Squires, Arson, Thumb Ring, Parthian Tactics, Bloodlines, Husbandry, Gillnets, Careening, Dry Dock, Shipwright, Forging, Iron Casting, Blast Furnace, Fletching, Bodkin Arrow, Bracer, Masonry, Architecture, Chemistry, Siege Engineers, Ballistics, Heated Shot, Murder Holes, Arrowslits, Treadmill Crane, Bow Saw, Stone Mining, Gold Mining, Horse Collar, Heavy Plow, Crop Rotation, Trade Cart, Caravan, Coinage, Banking, Guilds, Hoardings, Sappers, Spies, Treason, Conscription, Wheelbarrow, Hand Cart, Loom, Town Watch, Town Patrol, Two-Man Saw, Double-Bit Axe, ";

var monasterytechscb, monasterytechslist = "Redemption, Fervor, Sanctity, Atonement, Herbal Medicine, Heresy, Block Printing, Illumination, Theocracy, Faith, ";

var uniquetechscb, uniquetechslist = "First Crusade, Scutage, Burgundian Vineyards, Flemish Revolution, Garland Wars, Atlatl, Hul'che Javelineers, El Dorado, Supremacy, Inquisition, Furor Celtica, Stronghold, Yeomen, Warwolf, Chivalry, Bearded Axe, Logistica, Greek Fire, Madrasah, Zealotry, Kamandaran, Boiling Oil, Mahouts, Sipahi, Artillery, Berserkergang, Chivalry, Crenellations, Ironclad, Atheism, Marauders, Anarchy, Perfusion, Kataparuto, Yasama, Shinkichon, Panokseon, Rocketry, Great Wall, Drill, Nomads, Shatagni, Sultans, Druzhina, Orthodoxy, Pavise, Silk Road, Andean Sling, Couriers, Recurve Bow, Corvinian Army, Arquebus, Carrack, Royal Heirs, Torsion Engines, Tigui, Farimba, Kasbah, Maghrabi Camels, Chatras, Paper Money, Double Crossbow, Tusk Swords, Manipur Cavalry, Howdah, Thalassocracy, Forced Levy, Stirrups, Bagains, Cuman Mercenaries, Steppe Husbandry, Silk Armor, Timurid Siegecraft, Hill Forts, Tower Shields, ";

var buildingscb, buildingslist = "Donjon, Farm, Mill, Lumber Camp, Mining Camp, Market, House, University, Blacksmith, Siege Workshop, Town Center, Castle, Monastery, Palisade Wall, Stone Wall, Fortified Wall, Outpost, Watch Tower, Guard Tower, Keep, Bombard Tower, Fish Trap, Dock, Stable, Barracks, Archery Range, Feitoria, Wonder, Krepost, Harbor, ";

var civscb, civslist = "Burgundians, Sicilians, Aztecs, Mayans, Spanish, Celts, Britons, Franks, Byzantines, Saracens, Persians, Turks, Vikings, Teutons, Huns, Goths, Japanese, Koreans, Chinese, Mongols, Indians, Slavs, Italians, Incas, Magyars, Portuguese, Ethiopians, Malians, Berbers, Vietnamese, Khmer, Burmese, Malay, Bulgarians, Cumans, Tatars, Lithuanians, ";

var uniqueunitscb, uniqueunitslist = "Serjeant, Coustillier, Flemish Militia, Jaguar Warrior, Plumed Archer, Conquistador, Missionary, Woad Raider, Longbowman, Throwing Axeman, Cataphract, Mameluke, War Elephant, Janissary, Berserk, Longboat, Teutonic Knight, Tarkan, Huskarl, Samurai, War Wagon, Turtle Ship, Chu Ko Nu, Mangudai, Imperial Camel, Elephant Archer, Boyar, Genoese Crossbowman, Kamayuk, Slinger, Magyar Huszar, Organ Gun, Caravel, Shotel Warrior, Gbeto, Camel Archer, Rattan Archer, Ballista Elephant, Arambai, Karambit Warrior, Konnik, Kipchak, Keshik, Leitis, Flaming Camel, Trashbow, ";

var mapscb, mapslist = "Arabia, Baltic, Black Forest, Regicide Fortress, Gold Rush, Islands, Migration, Arena, Ghost Lake, Mongolia, Nomad, Oasis, Scandinavia, Steppe, Valley, Serengeti, Bog Islands, Ravines, Team Islands, ";

var proplayerscb, proplayerslist = "Nili, Tatoh, Daut, TheViper, Hera, Liereyy, Nicov, TheMax, Villese, Vivi, Rubenstock, MBL, ";

var heroescb, heroeslist = "Joan of Arc, Saladin, Genghis Khan, Barbarossa, William Wallace, Atilla the Hun, El Cid, Montezuma, Robin Hood, ";

var stratscb, stratslist = "Drush, Fast Castle, Tower Rush, Lame, Flush, Smush, Trush, Douche, Krush, Grush, ";

var streamerscb, streamerslist = "FrostyJanissary, ZeroEmpires, T90Official, LilTrouble__, Inc, Ashleylynn, NerdRageQuit, MembTV, ArtemizPlayz, ShadowCrystallux, grathwrang, ilovebaskets, lidakor, naomi, hippo_run, ";

var tournamentscb, tournamentslist = "Hidden Cup, King of the Desert, Nili Apartment Cup, Decathlon, ";

var animalscb, animalslist = "Wolf, Boar, Deer, Ibex, Shore Fish, Forage Bush, Ram, Cow, Pig, Rhinoceros, Pond, Jaguar, Llama, Alligator, Elephant, Zebra, Iron Boar, Ostrich, Bear, Horse, Komodo Dragon, Lion, Snow Leopard, Goat, Goose, Turkey, Water Buffalo, Relic, Sheep, Gazelle, Salmon, Tuna, ";

var gamemodescb, gamemodeslist = "Team Game, Minimap, Flare, Tribute, Bonus, Economy, Military, Score, Regicide, Random Map, Death Match, King of the Hill, Community Game, Sudden Death, Capture the Relic, Empire Wars, Wood, Food, Gold, Stone, Dark Age, Feudal Age, Castle Age, Imperial Age, Voobly, HD, DE, Steam, ";

var memescb, memeslist = "le mayo, Elite Boar, Makayuk, Sustainability, Mandatum, Til Bardaga, KNIEF, t90Farms, thxDE, t90Ranges, t90Woo, Trade Cock, Karambitcoin, Daut Castle, ";

var peoplecb, peoplelist = "Moonfaller, Salted Pepper, Mmarss, Robinlaws, Kaaru, Alian, Devoury, ";

var mastapiecescb, mastapieceslist = "Cutting Woodline with Onager, Cutting Woodline with Ballista Elephants, Waiting for Enemy to Overchop, House Scanning, Persian Douche on Islands, Saracen Archer rush on Black Forest, ";

var list = unitslist+techslist+monasterytechslist+uniquetechslist+buildingslist+civslist+uniqueunitslist+mapslist+proplayerslist+heroeslist+stratslist+streamerslist+tournamentslist+animalslist+gamemodeslist+memeslist+peoplelist+mastapieceslist;

var listfull = list;

var selectall, textf, copy;
function setup() {
	createCanvas(0,0);
	animalscb = createCheckbox('Animals', true);
	buildingscb = createCheckbox('Buildings', true);
	civscb = createCheckbox('Civs', true);
	gamemodescb = createCheckbox('GameModes', true);
	heroescb = createCheckbox('Heroes', true);
	mapscb = createCheckbox('Maps', true);
	mastapiecescb = createCheckbox('Mastapieces', true);
	memescb = createCheckbox('Memes', true);
	monasterytechscb = createCheckbox('Monastery Techs', true);
	peoplecb = createCheckbox('People', true);
	proplayerscb = createCheckbox('Pro Players', true);
	stratscb = createCheckbox('Strats', true);
	streamerscb = createCheckbox('Streamers', true);
	techscb = createCheckbox('Techs', true);
	tournamentscb = createCheckbox('Tournaments', true);
	uniquetechscb = createCheckbox('Unique Techs', true);
	unitscb = createCheckbox('Units', true);
	uniqueunitscb = createCheckbox('Unique Units', true);

	animalscb.attribute('title',animalslist.substring(0, animalslist.length-2));
	buildingscb.attribute('title',buildingslist.substring(0, buildingslist.length-2));
	civscb.attribute('title',civslist.substring(0, civslist.length-2));
	gamemodescb.attribute('title',gamemodeslist.substring(0, gamemodeslist.length-2));
	heroescb.attribute('title',heroeslist.substring(0, heroeslist.length-2));
	mapscb.attribute('title',mapslist.substring(0, mapslist.length-2));
	mastapiecescb.attribute('title',mastapieceslist.substring(0, mastapieceslist.length-2));
	memescb.attribute('title',memeslist.substring(0, memeslist.length-2));
	monasterytechscb.attribute('title',monasterytechslist.substring(0, monasterytechslist.length-2));
	peoplecb.attribute('title',peoplelist.substring(0, peoplelist.length-2));
	proplayerscb.attribute('title',proplayerslist.substring(0, proplayerslist.length-2));
	stratscb.attribute('title',stratslist.substring(0, stratslist.length-2));
	streamerscb.attribute('title',streamerslist.substring(0, streamerslist.length-2));
	techscb.attribute('title',techslist.substring(0, techslist.length-2));
	tournamentscb.attribute('title',tournamentslist.substring(0, tournamentslist.length-2));
	uniquetechscb.attribute('title',uniquetechslist.substring(0, uniquetechslist.length-2));
	unitscb.attribute('title',unitslist.substring(0, unitslist.length-2));
	uniqueunitscb.attribute('title',uniqueunitslist.substring(0, uniqueunitslist.length-2));

	animalscb.changed(animalsF);
	buildingscb.changed(buildingsF);
	civscb.changed(civsF);
	gamemodescb.changed(gameModesF);
	heroescb.changed(heroesF);
	mapscb.changed(mapsF);
	mastapiecescb.changed(mastapiecesF);
	memescb.changed(memesF);
	monasterytechscb.changed(monasteryTechsF);
	peoplecb.changed(peopleF);
	proplayerscb.changed(proPlayersF);
	stratscb.changed(stratsF);
	streamerscb.changed(streamersF);
	techscb.changed(techsF);
	tournamentscb.changed(tournamentsF);
	uniquetechscb.changed(uniqueTechsF);
	unitscb.changed(unitsF);
	uniqueunitscb.changed(uUF);
	
	createP("");
	
	copy = createButton("Copy List!");
	copy.mousePressed(copyF);

	selectall = createButton("Select All");
	selectall.mousePressed(selectAllF);
	
	textf = createP(list.substring(0,list.length-2));
}

function draw() {
	
}

function selectAllF(){
	animalscb.checked(true);
	buildingscb.checked(true);
	civscb.checked(true);
	gamemodescb.checked(true);
	heroescb.checked(true);
	mapscb.checked(true);
	mastapiecescb.checked(true);
	memescb.checked(true);
	monasterytechscb.checked(true);
	peoplecb.checked(true);
	proplayerscb.checked(true);
	stratscb.checked(true);
	streamerscb.checked(true);
	techscb.checked(true);
	tournamentscb.checked(true);
	uniquetechscb.checked(true);
	unitscb.checked(true);
	uniqueunitscb.checked(true);
	list = listfull;
	textf.html(list.substring(0,list.length-2));
}

function copyF() {
	const el = document.createElement('textarea');
	el.value = list.substring(0, list.length-2);
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}

function animalsF() {
	if(this.checked())
		list+=animalslist;
	else
		list = list.replace(animalslist,'');
	textf.html(list.substring(0,list.length-2));
}
function buildingsF() {
	if(this.checked())
		list+=buildingslist;
	else
		list = list.replace(buildingslist,'');
	textf.html(list.substring(0,list.length-2));
}
function civsF() {
	if(this.checked())
		list+=civslist;
	else
		list = list.replace(civslist,'');
	textf.html(list.substring(0,list.length-2));
}
function gameModesF() {
	if(this.checked())
		list+=gamemodeslist;
	else
		list = list.replace(gamemodeslist,'');
	textf.html(list.substring(0,list.length-2));
}
function heroesF() {
	if(this.checked())
		list+=heroeslist;
	else
		list = list.replace(heroeslist,'');
	textf.html(list.substring(0,list.length-2));
}
function mapsF() {
	if(this.checked())
		list+=mapslist;
	else
	list = list.replace(mapslist,'');
	textf.html(list.substring(0,list.length-2));
}
function mastapiecesF() {
	if(this.checked())
		list+=mastapieceslist;
	else
		list = list.replace(mastapieceslist,'');
	textf.html(list.substring(0,list.length-2));
}
function memesF() {
	if(this.checked())
		list+=memeslist;
	else
		list = list.replace(memeslist,'');
	textf.html(list.substring(0,list.length-2));
}
function monasteryTechsF() {
	if(this.checked())
		list+=monasterytechslist;
	else
		list = list.replace(monasterytechslist,'');
	textf.html(list.substring(0,list.length-2));
}
function peopleF() {
	if(this.checked())
		list+=peoplelist;
	else
		list = list.replace(peoplelist,'');
	textf.html(list.substring(0,list.length-2));
}
function proPlayersF() {
	if(this.checked())
		list+=proplayerslist;
	else
		list = list.replace(proplayerslist,'');
	textf.html(list.substring(0,list.length-2));
}
function stratsF() {
	if(this.checked())
		list+=stratslist;
	else
		list = list.replace(stratslist,'');
	textf.html(list.substring(0,list.length-2));
}
function streamersF() {
	if(this.checked())
		list+=streamerslist;
	else
		list = list.replace(streamerslist,'');
	textf.html(list.substring(0,list.length-2));
}
function techsF() {
	if(this.checked())
		list+=techslist;
	else
		list = list.replace(techslist,'');
	textf.html(list.substring(0,list.length-2));
}
function tournamentsF() {
	if(this.checked())
		list+=tournamentslist;
	else
		list = list.replace(tournamentslist,'');
	textf.html(list.substring(0,list.length-2));
}
function uniqueTechsF() {
	if(this.checked())
		list+=uniquetechslist;
	else
		list = list.replace(uniquetechslist,'');
	textf.html(list.substring(0,list.length-2));
}
function unitsF() {
	if(this.checked())
		list+=unitslist;
	else
		list = list.replace(unitslist,'');
	// textf.html(list.substring(0,list.length-2));
}
function uUF() {
	if(this.checked())
		list+=uniqueunitslist;
	else
		list = list.replace(uniqueunitslist,'');
	// textf.html(list.substring(0,list.length-2));
}
