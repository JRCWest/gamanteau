//var tweet = document.getElementById('word').innerHTML

function formatTweet()
{
	//Below variables are breaking?
	var word1 = document.getElementById("randWord1").innerHTML;
	var word2 = document.getElementById("randWord2").innerHTML;
	var newWord = document.getElementById('wordText').value;
	var sentence = document.getElementById('sentence').value;
	var tweet = word1 + ' %2B ' + word2 + ' = ' + newWord + '%0A%0A' + "%22" + sentence + "%22";
	//var twitterURL = "https://twitter.com/intent/tweet?text="+ encodeURIComponent(word) + " – " + encodeURIComponent(sentence);
	//document.getElementsByClassName('twitter-share-button')[0].setAttribute("data-text", word);
	
	//window.location.href='https://twitter.com/intent/tweet?text=' + word1 + ' %2B ' + word2 + ' = ' + newWord + '&hashtags=gamanteau';
	window.top.location='https://twitter.com/intent/tweet?text=' + tweet + '&hashtags=gamanteau&target="_top"';
}

function wordSubmit(){
	var entry = document.getElementById('wordText').value
	
	if(entry == null || entry == "")
	{
		alert(empty);
		
	}
	else
	{
		document.getElementById('word').innerHTML = document.getElementById('wordText').value;
		var x = document.getElementById("sentenceContainer");
		x.style.display = "block";
	}
};

function randomize() {
  var wordList = [ "fluttering",
		"request",
 		"hang",
 		"texture",
		"neck",
		"depend",
		"hair",
		"condition",
		"tearful",
		"hissing",
		"three",
		"impress",
		"pathetic",
		"unique",
		"tug",
		"industry",		
		"youthful",
		"ceaseless",
		"office",
		"brawny",
		"hover",
		"kitty",
		"toys",
		"glamorous",
		"strange",
		"watery",
		"burly",
		"five",
		"thunder",
		"hushed",
		"kind",
		"tested",
		"turn",
		"encouraging",
		"open",
		"religion",
		"lock",
		"awful",
		"sprout",
		"shop",
		"obsolete",
		"guess",
		"exciting",
		"stir",
		"ugly",
		"zip",
		"sincere",
		"car",
		"abusive",
		"work",
		"listen",
		"moor",
		"long",
		"snow",
		"frogs",
		"pollution",
		"swim",
		"feeble",
		"finicky",
		"history",
		"trace",
		"sniff",
		"wound",
		"continue",
		"kaput",
		"noise",
		"cooperative",
		"hilarious",
		"selfish",
		"retire",
		"pump",
		"bore",
		"lavish",
		"rat",
		"rake",
		"forgetful",
		"harmony",
		"tired",
		"cuddly",
		"low",
		"credit",
		"hate",
		"gusty",
		"halting",
		"bleach",
		"brash",
		"beautiful",
		"bow",
		"cemetery",
		"future",
		"striped",
		"cook",
		"fang",
		"scarf",
		"stop",
		"crate",
		"average",
		"sleep",
		"examine",
		"rustic",
		"wave",
		"willing",
		"need",
		"fence",
		"cover",
		"lacking",
		"eminent",
		"old",
		"ruddy",
		"chin",
		"help",
		"decision",
		"exclusive",
		"eatable",
		"year",
		"basin",
		"arch",
		"meat",
		"achiever",
		"employ",
		"wonderful",
		"push",
		"nest",
		"longing",
		"gaze",
		"exchange",
		"hope",
		"miscreant",
		"heavy",
		"pull",
		"loaf",
		"receptive",
		"noisy",
		"shelf",
		"flavor",
		"meek",
		"heavenly",
		"awesome",
		"town",
		"pleasure",
		"peck",
		"obscene",
		"rabid",
		"engine",
		"respect",
		"slow",
		"tramp",
		"avoid",
		"cute",
		"books",
		"grateful",
		"distribution",
		"itch",
		"hall",
		"confess",
		"teaching",
		"grandfather",
		"closed",
		"alive",
		"crowd",
		"coordinated",
		"amazing",
		"damage",
		"devilish",
		"level",
		"unhealthy",
		"precious",
		"numerous",
		"beg",
		"trick",
		"inconclusive",
		"gold",
		"cooing",
		"capricious",
		"error",
		"judicious",
		"planes",
		"cure",
		"ritzy",
		"close",
		"action",
		"blow",
		"zoom",
		"question",
		"wreck",
		"mute",
		"jittery",
		"incredible",
		"burst",
		"neighborly",
		"guiltless",
		"maddening",
		"slippery",
		"yell",
		"compete",
		"tick",
		"instruct",
		"volcano",
		"ocean",
		"carry",
		"puzzled",
		"ashamed",
		"church",
		"sun",
		"excuse",
		"silky",
		"grass",
		"base",
		"cherry",
		"amount",
		"grumpy",
		"fast",
		"frighten",
		"trade",
		"brother",
		"shelter",
		"small",
		"trip",
		"form",
		"bless",
		"nation",
		"alike",
		"dare",
		"spooky",
		"touch",
		"follow",
		"bike",
		"bare",
		"preach",
		"deserve",
		"sigh",
		"fold",
		"highfalutin",
		"pets",
		"fumbling",
		"punishment",
		"cobweb",
		"luxuriant",
		"utopian",
		"launch",
		"dinosaurs",
		"innocent",
		"fuzzy",
		"abundant",
		"trail",
		"dime",
		"governor",
		"dynamic",
		"left",
		"day",
		"glue",
		"grab",
		"explain",
		"grate",
		"second",
		"concern",
		"chilly",
		"tremendous",
		"delightful",
		"head",
		"tedious",
		"bottle",
		"pack",
		"zipper",
		"throat",
		"structure",
		"flood",
		"mushy",
		"workable",
		"obsequious",
		"tart",
		"marble",
		"zany",
		"normal",
		"nippy",
		"plucky",
		"repeat",
		"perform",
		"absorbing",
		"use",
		"functional",
		"crazy",
		"lamp",
		"dashing",
		"obeisant",
		"wriggle",
		"first",
		"oranges",
		"overrated",
		"macabre",
		"racial",
		"produce",
		"improve",
		"ugliest",
		"royal",
		"therapeutic",
		"chemical",
		"deadpan",
		"skinny",
		"hospitable",
		"staking",
		"plantation",
		"knee",
		"warlike",
		"pan",
		"careful",
		"hot",
		"wealth",
		"wilderness",
		"apparel",
		"finger",
		"reach",
		"ice",
		"lethal",
		"married",
		"comparison",
		"popcorn",
		"poison",
		"steel",
		"dirt",
		"add",
		"spot",
		"steer",
		"steep",
		"start",
		"drag",
		"cattle",
		"scatter",
		"weary",
		"violet",
		"border",
		"guarded",
		"charming",
		"knowledgeable",
		"pest",
		"smoke",
		"handy",
		"bear",
		"minister",
		"squeak",
		"tax",
		"whimsical",
		"white",
		"faulty",
		"divergent",
		"greasy",
		"wish",
		"breakable",
		"jagged",
		"shy",
		"change",
		"request",
		"shocking",
		"tasty",
		"ordinary",
		"shallow",
		"juggle",
		"road",
		"memory",
		"skin",
		"paddle",
		"pleasant",
		"tendency",
		"unequaled",
		"invent",
		"smile",
		"color",
		"homely",
		"airport",
		"fear",
		"boundless",
		"relax",
		"electric",
		"time",
		"fanatical",
		"count",
		"wakeful",
		"wistful",
		"scissors",
		"cheer",
		"attack",
		"please",
		"grease",
		"woozy",
		"happen",
		"cloth",
		"wonder",
		"match",
		"company",
		"notice",
		"right",
		"nonstop",
		"play",
		"spell",
		"exercise",
		"pray",
		"twist",
		"callous",
		"communicate",
		"agree",
		"refuse",
		"tough",
		"tense",
		"voice",
		"next",
		"lowly",
		"cow",
		"love",
		"adventurous",
		"wind",
		"stretch",
		"plausible",
		"fireman",
		"uptight",
		"haunt",
		"fancy",
		"raise",
		"fertile",
		"disagreeable",
		"power",
		"wooden",
		"coil",
		"pie",
		"creepy",
		"boil",
		"night",
		"war",
		"skate",
		"letters",
		"mark",
		"fail",
		"jobless",
		"teeth",
		"colossal",
		"itchy",
		"lie",
		"magical",
		"unable",
		"parched",
		"tangy",
		"fall",
		"scrawny",
		"quixotic",
		"handsome",
		"endurable",
		"caring",
		"boundary",
		"complex",
		"sassy",
		"dispensable",
		"detailed",
		"realise",
		"juvenile",
		"upbeat",
		"explode",
		"beef",
		"trees",
		"faithful",
		"seal",
		"rob",
		"billowy",
		"separate",
		"hug",
		"bath",
		"suit",
		"frail",
		"calculate",
		"zesty",
		"tender",
		"terrific",
		"acoustics",
		"remove",
		"vengeful",
		"advise",
		"sloppy",
		"hulking",
		"dangerous",
		"rainy",
		"rabbit",
		"famous",
		"unwritten",
		"ahead",
		"cold",
		"suppose",
		"conscious",
		"shake",
		"impolite",
		"degree",
		"accessible",
		"rub",
		"auspicious",
		"fairies",
		"adjoining",
		"acceptable",
		"pinch",
		"difficult",
		"part",
		"alleged",
		"standing",
		"ghost",
		"damaging",
		"repair",
		"string",
		"loving",
		"graceful",
		"rabbits",
		"knowing",
		"ants",
		"absurd",
		"hole",
		"baby",
		"wash",
		"class",
		"waiting",
		"spiteful",
		"crime",
		"vacation",
		"frog",
		"army",
		"back",
		"tangible",
		"green",
		"drunk",
		"fresh",
		"lunchroom",
		"loose",
		"tail",
		"roll",
		"truck",
		"store",
		"weather",
		"suggest",
		"trot",
		"squeamish",
		"chivalrous",
		"worried",
		"government",
		"stay",
		"lyrical",
		"overt",
		"development",
		"unsightly",
		"button",
		"train",
		"dad",
		"match",
		"branch",
		"zebra",
		"overconfident",
		"thin",
		"fool",
		"furtive",
		"talk",
		"doll",
		"wasteful",
		"complete",
		"unwieldy",
		"pale",
		"damaged",
		"trousers",
		"stick",
		"soft",
		"stretch",
		"rebel",
		"size",
		"erratic",
		"injure",
		"clean",
		"gorgeous",
		"bump",
		"friend",
		"limping",
		"drown",
		"literate",
		"manage",
		"courageous",
		"stamp",
		"things",
		"squash",
		"wrathful",
		"rigid",
		"scream",
		"helpless",
		"copper",
		"unfasten",
		"interest",
		"dam",
		"stupendous",
		"maid",
		"ajar",
		"bawdy",
		"jump",
		"whip",
		"record",
		"gullible",
		"caption",
		"grain",
		"apparatus",
		"fly",
		"approval",
		"admire",
		"wing",
		"determined",
		"historical",
		"blushing",
		"smoke",
		"mourn",
		"numberless",
		"dream",
		"sidewalk",
		"beneficial",
		"glass",
		"disarm",
		"heal",
		"hysterical",
		"jumbled",
		"befitting",
		"mindless",
		"victorious",
		"tempt",
		"smell",
		"plane",
		"travel",
		"wire",
		"illegal",
		"tent",
		"bird",
		"placid",
		"ancient",
		"upset",
		"adjustment",
		"lick",
		"shivering",
		"full",
		"observation",
		"extend",
		"bomb",
		"argue",
		"remarkable",
		"face",
		"noxious",
		"squeal",
		"chickens",
		"female",
		"quarrelsome",
		"boiling",
		"occur",
		"tremble",
		"organic",
		"fascinated",
		"pump",
		"kick",
		"replace",
		"stroke",
		"exuberant",
		"dog",
		"obtainable",
		"wiggly",
		"spill",
		"toes",
		"entertaining",
		"label",
		"lumpy",
		"lucky",
		"vase",
		"polish",
		"gifted",
		"mix",
		"fit",
		"object",
		"zonked",
		"dear",
		"mate",
		"giddy",
		"paper",
		"scratch",
		"bizarre",
		"motionless",
		"float",
		"knit",
		"spiffy",
		"plate",
		"breezy",
		"mend",
		"modern",
		"likeable",
		"guard",
		"door",
		"nostalgic",
		"wait",
		"branch",
		"eager",
		"unadvised",
		"heap",
		"blue",
		"driving",
		"apologise",
		"smooth",
		"barbarous",
		"possible",
		"knowledge",
		"account",
		"trashy",
		"pat",
		"vein",
		"ruthless",
		"strip",
		"didactic",
		"accidental",
		"soap",
		"whistle",
		"surprise",
		"room",
		"book",
		"milky",
		"gamy",
		"berry",
		"influence",
		"happy",
		"buzz",
		"suspect",
		"adaptable",
		"natural",
		"zealous",
		"angle",
		"face",
		"place",
		"orange",
		"dead",
		"airplane",
		"craven",
		"stranger",
		"plastic",
		"donkey",
		"eye",
		"twist",
		"man",
		"foot",
		"shade",
		"destruction",
		"dislike",
		"care",
		"harsh",
		"yak",
		"onerous",
		"joke",
		"scattered",
		"trucks",
		"unbiased",
		"legal",
		"acid",
		"frame",
		"self",
		"queue",
		"jazzy",
		"hapless",
		"guttural",
		"strong",
		"deliver",
		"regular",
		"try",
		"equal",
		"coach",
		"physical",
		"laugh",
		"colour",
		"force",
		"decorate",
		"balance",
		"omniscient",
		"representative",
		"ambiguous",
		"little",
		"interfere",
		"parcel",
		"wanting",
		"rotten",
		"line",
		"deceive",
		"smoggy",
		"letter",
		"boring",
		"acidic",
		"committee",
		"deafening",
		"skirt",
		"cute",
		"fear",
		"cast",
		"bashful",
		"oval",
		"pear",
		"suck",
		"absorbed",
		"zinc",
		"fabulous",
		"nonchalant",
		"sink",
		"sweater",
		"question",
		"mask",
		"cloistered",
		"middle",
		"nebulous",
		"concerned",
		"long",
		"pocket",
		"decorous",
		"nimble",
		"thrill",
		"cabbage",
		"lean",
		"roll",
		"home",
		"inform",
		"warn",
		"wrench",
		"hanging",
		"bag",
		"loud",
		"screw",
		"moon",
		"regret",
		"clip",
		"cross",
		"enter",
		"breathe",
		"crowded",
		"ask",
		"hope",
		"pause",
		"dark",
		"poor",
		"alarm",
		"dreary",
		"rings",
		"thirsty",
		"spark",
		"gentle",
		"icicle",
		"light",
		"sock",
		"provide",
		"insect",
		"wrap",
		"waggish",
		"grade",
		"clammy",
		"zoo",
		"sky",
		"overwrought",
		"disturbed",
		"tenuous",
		"holistic",
		"drain",
		"warm",
		"scent",
		"axiomatic",
		"afterthought",
		"cagey",
		"clever",
		"carve",
		"number",
		"sleet",
		"spicy",
		"strap",
		"belligerent",
		"scientific",
		"sleepy",
		"flower",
		"mountain",
		"machine",
		"grey",
		"bat",
		"aggressive",
		"straw",
		"flame",
		"bedroom",
		"dry",
		"evasive",
		"enjoy",
		"cycle",
		"marvelous",
		"magnificent",
		"choke",
		"abounding",
		"pricey",
		"redundant",
		"income",
		"zippy",
		"grip",
		"gather",
		"view",
		"lovely",
		"purpose",
		"milk",
		"yam",
		"raspy",
		"flagrant",
		"wacky",
		"elated",
		"foolish",
		"disappear",
		"liquid",
		"team",
		"boast",
		"relieved",
		"guide",
		"stamp",
		"finger",
		"aware",
		"brake",
		"swift",
		"radiate",
		"mist",
		"cheerful",
		"funny",
		"obtain",
		"wink",
		"ducks",
		"roasted",
		"tongue",
		"decisive",
		"passenger",
		"battle",
		"spot",
		"pet",
		"salty",
		"agreeable",
		"hose",
		"brake",
		"beam",
		"adamant",
		"breath",
		"sister",
		"soup",
		"scared",
		"claim",
		"film",
		"groan",
		"tickle",
		"crown",
		"wobble",
		"flock",
		"approve",
		"work",
		"abject",
		"reason",
		"dependent",
		"elegant",
		"witty",
		"point",
		"voiceless",
		"shaky",
		"sturdy",
		"children",
		"card",
		"party",		
		"judge",
		"canvas",
		"dazzling",
		"deserted",
		"fine",
		"general",
		"society",
		"settle",
		"ring",
		"boy",
		"truthful",
		"receive",
		"flowers",
		"excellent",
		"cowardly",
		"vague",
		"bang",
		"friction",
		"ten",
		"super",
		"guarantee",
		"name",
		"needle",
		"untidy",
		"charge",
		"curtain",
		"peep",
		"infamous",
		"quicksand",
		"prose",
		"wandering",
		"sense",
		"correct",
		"appear",
		"desert",
		"profuse",
		"jam",
		"tank",
		"look",
		"mellow",
		"hunt",
		"haircut",
		"complete",
		"grubby",
		"relation",
		"rain",
		"crack",
		"cat",
		"addicted",
		"spiritual",
		"brass",
		"hook",
		"use",
		"change",
		"previous",
		"worthless",
		"tiny",
		"eyes",
		"animal",
		"aback",
		"reign",
		"escape",
		"bomb",
		"descriptive",
		"open",
		"aromatic",
		"connect",
		"greet",
		"grip",
		"fog",
		"smart",
		"digestion",
		"powerful",
		"robin",
		"testy",
		"wave",
		"muscle",
		"cellar",
		"tumble",
		"hat",
		"sore",
		"nauseating",
		"fallacious",
		"concentrate",
		"start",
		"smash",
		"feeling",
		"paste",
		"gainful",
		"clean",
		"behave",
		"loutish",
		"sail",
		"welcome",
		"puzzling",
		"horn",
		"romantic",
		"attach",
		"camp",
		"stone",
		"porter",
		"perfect",
		"futuristic",
		"prevent",
		"eggnog",
		"scold",
		"pot",
		"daughter",
		"stocking",
		"horse",
		"end",
		"dogs",
		"vacuous",
		"subdued",
		"trip",
		"rub",
		"suffer",
		"tricky",
		"elastic",
		"melodic",
		"sheep",
		"leg",
		"coil",
		"stove",
		"island",		
		"wretched",
		"space",
		"substantial",
		"berserk",
		"arrest",
		"coat",
		"rest",
		"like",
		"own",
		"needy",
		"post",
		"volleyball",
		"collar",
		"key",
		"dizzy",
		"head",
		"gratis",
		"delay",
		"lettuce",
		"money",
		"agreement",
		"stale",
		"slope",
		"interesting",
		"psychotic",
		"steam",
		"hill",
		"bait",
		"embarrassed",
		"same",
		"quickest",
		"club",
		"substance",
		"annoy",
		"chubby",
		"hollow",
		"tow",
		"intelligent",
		"fowl",
		"familiar",
		"crabby",
		"mine",
		"versed",
		"whistle",
		"illustrious",
		"smash",
		"fix",
		"mere",
		"interrupt",
		"silver",
		"recess",
		"mundane",
		"land",
		"cautious",
		"arrange",
		"appreciate",
		"turkey",
		"aboriginal",
		"partner",
		"heady",
		"scandalous",
		"acrid",
		"worry",
		"creature",
		"rhetorical",
		"stiff",
		"remember",
		"fearless",
		"floor",
		"birds",
		"grin",
		"order",
		"vigorous",
		"kittens",
		"dramatic",
		"helpful",
		"lamentable",
		"drain",
		"value",
		"handle",
		"obnoxious",
		"event",
		"memorise",
		"aftermath",
		"ruin",
		"prickly",
		"fry",
		"peace",
		"fuel",
		"guitar",
		"babies",
		"box",
		"slimy",
		"homeless",
		"utter",
		"oatmeal",
		"uneven",
		"tin",
		"sordid",
		"cable",
		"holiday",
		"railway",
		"toothbrush",
		"moaning",
		"cheap",
		"show",
		"taste",
		"fretful",
		"decay",
		"awake",
		"sea",
		"marked",
		"visit",
		"safe",
		"delicious",
		"hurry",
		"collect",
		"deeply",
		"rinse",
		"muddle",
		"earthquake",
		"division",
		"boorish",
		"honorable",
		"adhesive",
		"enormous",
		"giraffe",
		"regret",
		"debt",
		"fruit",
		"mysterious",
		"rhyme",
		"command",
		"flesh",
		"crooked",
		"bubble",
		"mark",
		"superficial",
		"frightening",
		"serve",
		"thirsty",
		"abaft",
		"decide",
		"uncovered",
		"mind",
		"special",
		"snail",
		"son",
		"wrist",
		"scary",
		"earsplitting",
		"anger",
		"advertisement",
		"contain",
		"boot",
		"curve",
		"sick",
		"crib",
		"force",
		"paltry",
		"aunt",
		"sound",
		"classy",
		"field",
		"shave",
		"snatch",
		"houses",
		"brave",
		"flaky",
		"flap",
		"group",
		"perpetual",
		"spray",
		"temper",
		"imperfect",
		"slap",
		"taboo",
		"quiver",
		"shaggy",
		"political",
		"ground",
		"snobbish",
		"bright",
		"lively",
		"kick",
		"harm",
		"snakes",
		"agonizing",
		"meaty",
		"surprise",
		"name",
		"ethereal",
		"underwear",
		"pretty",
		"sugar",
		"sudden",
		"glorious",
		"queen",
		"jog",
		"jar",
		"nifty",
		"optimal",
		"innate",
		"sign",		
		"edge",
		"towering",
		"brainy",
		"plant",
		"assorted",
		"harmonious",
		"share",
		"fire",
		"volatile",
		"moldy",
		"stuff",
		"aboard",
		"deer",
		"needless",
		"cry",
		"crush",
		"tub",
		"jellyfish",
		"melted",
		"lunch",
		"angry",
		"note",
		"near",
		"thoughtless",
		"riddle",
		"tranquil",
		"arm",
		"stupid",
		"shiny",
		"cakes",
		"square",
		"sticky",
		"shape",
		"expansion",
		"cracker",
		"abrasive",
		"monkey",
		"dusty",
		"time",
		"seemly",
		"shop",
		"tasteless",
		"incompetent",
		"load",
		"shiver",
		"sharp",
		"brush",
		"river",
		"join",
		"lock",
		"fade",
		"slim",
		"butter",
		"spy",
		"friendly",
		"hand",
		"jeans",
		"hypnotic",
		"design",
		"abiding",
		"treatment",
		"bad",
		"zephyr",
		"superb",
		"secret",
		"plastic",
		"allow",
		"addition",
		"loss",
		"dance",
		"instrument",
		"back",
		"ill",
		"mess up",
		"poised",
		"thank",
		"wish",
		"rambunctious",
		"trouble",
		"invite",
		"observant",
		"wary",
		"flat",
		"bored",
		"switch",
		"early",
		"gabby",
		"furry",
		"stitch",
		"tap",
		"fish",
		"offend",
		"pretend",
		"plough",
		"direction",
		"nondescript",
		"cynical",
		"boat",
		"irritating",
		"sore",
		"sip",
		"compare",
		"detail",
		"spiky",
		"curl",
		"succeed",
		"secretive",
		"solid",
		"skillful",
		"neat",
		"scarce",
		"venomous",
		"punch",
		"mass",
		"flight",
		"bulb",
		"look",
		"nose",
		"rescue",
		"maniacal",
		"sack",
		"half",
		"unsuitable",
		"playground",
		"glistening",
		"lonely",
		"cup",
		"wax",
		"release",
		"guide",
		"copy",
		"aspiring",
		"steady",
		"vessel",
		"meddle",
		"truculent",
		"dysfunctional",
		"miniature",
		"laborer",
		"last",
		"entertain",
		"pushy",
		"flowery",
		"defective",
		"scene",
		"dock",
		"shoe",
		"satisfying",
		"experience",
		"feigned",
		"quiet",
		"sour",
		"alert",
		"tense",
		"whirl",
		"writer",
		"wash",
		"oafish",
		"imminent",
		"sheet",
		"spring",
		"military",
		"voyage",
		"twig",
		"possessive",
		"grotesque",
		"box",
		"trains",
		"delight",
		"grieving",
		"throne",
		"fancy",
		"tall",
		"nod",
		"print",
		"fact",
		"point",
		"cloudy",
		"park",
		"reflect",
		"transport",
		"flashy",
		"mother",
		"support",
		"mug",
		"tie",
		"abstracted",
		"march",
		"street",
		"toothpaste",
		"parsimonious",
		"righteous",
		"empty",
		"brick",
		"chop",
		"chew",
		"plan",
		"watch",
		"suspend",
		"wren",
		"uncle",
		"range",
		"terrible",
		"opposite",
		"ambitious",
		"divide",
		"imported",
		"drop",
		"unite",
		"smelly",
		"signal",
		"stomach",
		"saw",
		"combative",
		"useful",
		"bolt",
		"soak",
		"symptomatic",
		"multiply",
		"questionable",
		"ablaze",
		"calculator",
		"shut",
		"veil",
		"whispering",
		"sulky",
		"calendar",
		"join",
		"spectacular",
		"hallowed",
		"vivacious",
		"daily",
		"camp",
		"reject",
		"rare",
		"coherent",
		"learned",
		"laugh",
		"probable",
		"goofy",
		"wholesale",
		"plain",
		"motion",
		"grandmother",
		"shirt",
		"common",
		"afraid",
		"cumbersome",
		"idea",
		"broken",
		"messy",
		"act",
		"sign",
		"cushion",
		"satisfy",
		"teeny",
		"tire",
		"four",
		"capable",
		"sort",
		"unbecoming",
		"slow",
		"sophisticated",
		"best",
		"bury",
		"yawn",
		"attraction",
		"poke",
		"stitch",
		"bikes",
		"greedy",
		"nice",
		"walk",
		"mitten",
		"fire",
		"drop",
		"lace",
		"flower",
		"quaint",
		"impossible",
		"dust",
		"nut",
		"wool",
		"coal",
		"orange",
		"eight",
		"sad",
		"existence",
		"doctor",
		"ready",
		"sable",
		"violent",
		"star",
		"troubled",
		"attract",
		"van",
		"wild",
		"untidy",
		"defeated",
		"art",
		"insurance",
		"amusing",
		"pink",
		"worm",
		"food",
		"picayune",
		"calculating",
		"secretary",
		"gruesome",
		"spotless",
		"spurious",
		"seashore",
		"clam",
		"synonymous",
		"chance",
		"giant",
		"wander",
		"smell",
		"minor",
		"uppity",
		"scarecrow",
		"actually",
		"unlock",
		"annoying",
		"drip",
		"low",
		"curve",
		"threatening",
		"glow",
		"rely",
		"accept",
		"ignorant",
		"ragged",
		"inquisitive",
		"pen",
		"activity",
		"peaceful",
		"minute",
		"complain",
		"momentous",
		"amuck",
		"territory",
		"somber",
		"hate",
		"pies",
		"argument",
		"route",
		"bat",
		"selection",
		"arrive",
		"murky",
		"market",
		"unpack",
		"punish",
		"reward",
		"seat",
		"oil",
		"develop",
		"hobbies",
		"title",
		"grandiose",
		"abnormal",
		"proud",
		"supply",
		"ink",
		"tacky",
		"locket",
		"ski",
		"sticks",
		"animated",
		"ultra",
		"suit",
		"deep",
		"crow",
		"like",
		"confuse",
		"excited",
		"quilt",
		"mom",
		"squealing",
		"impulse",
		"drawer",
		"late",
		"parallel",
		"pail",
		"notebook",
		"story",
		"discover",
		"watch",
		"malicious",
		"metal",
		"snotty",
		"gaping",
		"root",
		"ship",
		"tray",
		"lewd",
		"repulsive",
		"lively",
		"distinct",
		"file",
		"dolls",
		"behavior",
		"humdrum",
		"available",
		"pine",
		"crash",
		"purple",
		"high",
		"hand",
		"camera",
		"prefer",
		"rightful",
		"heat",
		"aloof",
		"filthy",
		"wise",
		"merciful",
		"wealthy",
		"wet",
		"yummy",
		"rude",
		"quince",
		"many",
		"disapprove",
		"vagabond",
		"price",
		"real",
		"delirious",
		"protest",
		"savory",
		"disgusting",
		"hesitant",
		"fat",
		"can",
		"rice",
		"pass",
		"vegetable",
		"few",
		"disillusioned",
		"horrible",
		"invention",
		"flimsy",
		"invincible",
		"word",
		"frame",
		"debonair",
		"pizzas",
		"tame",
		"heartbreaking",
		"cart",
		"potato",
		"attractive",
		"medical",
		"condemned",
		"bright",
		"recognise",
		"apathetic",
		"payment",
		"icy",
		"wheel",
		"successful",
		"mailbox",
		"lying",
		"type",
		"example",
		"cough",
		"tiresome",
		"sweet",
		"balance",
		"thick",
		"pancake",
		"death",
		"scare",
		"piquant",
		"recondite",
		"sneeze",
		"overjoyed",
		"snake",
		"linen",
		"silent",
		"jelly",
		"laughable",
		"borrow",
		"clap",
		"appliance",
		"thing",
		"reproduce",
		"nutty",
		"tightfisted",
		"scribble",
		"songs",
		"list",
		"deranged",
		"juicy",
		"jewel",
		"hammer",
		"leather",
		"ball",
		"narrow",
		"chase",
		"careless",
		"alcoholic",
		"stew",
		"abhorrent",
		"jealous",
		"legs",
		"bouncy",
		"nappy",
		"mice",
		"report",
		"possess",
		"outstanding",
		"clumsy",
		"jumpy",
		"demonic",
		"gray",
		"place",
		"include",
		"abashed",
		"bloody",
		"empty",
		"unequal",
		"kiss",
		"cough",
		"sofa",
		"hurt",
		"wall",
		"better",
		"fasten",
		"baseball",
		"thread",
		"young",
		"reduce",
		"scorch",
		"duck",
		"ubiquitous",
		"great",
		"hook",
		"unknown",
		"attack",
		"rail",
		"madly",
		"circle",
		"arrogant",
		"race",
		"mint",
		"lip",
		"geese",
		"idiotic",
		"gaudy",
		"way",
		"wry",
		"blush",
		"ticket",
		"labored",
		"mean",
		"warm",
		"selective",
		"lighten",
		"understood",
		"bake",
		"lazy",
		"grape",
		"erect",
		"separate",
		"wicked",
		"straight",
		"creator",
		"destroy",
		"control",
		"disagree",
		"smiling",
		"abortive",
		"bell",
		"blink",
		"wrong",
		"one",
		"measure",
		"muddled",
		"painstaking",
		"bucket",		
		"moan",
		"new",
		"wail",
		"record",
		"expect",
		"cheat",
		"reading",
		"obey",
		"slip",
		"imagine",
		"squeeze",
		"water",
		"hungry",
		"educate",
		"daffy",
		"broad",
		"elite",
		"chief",
		"tour",
		"lake",
		"reaction",
		"phobic",
		"bit",
		"flippant",
		"touch",
		"cultured",
		"page",
		"steadfast",
		"step",
		"board",
		"receipt",
		"sponge",
		"psychedelic",
		"incandescent",
		"energetic",
		"transport",
		"outgoing",
		"ladybug",
		"spiders",
		"drab",
		"powder",
		"hour",
		"hellish",
		"voracious",
		"magenta",
		"huge",
		"unnatural",
		"competition",
		"delicate",
		"announce",
		"note",
		"skip",
		"level",
		"splendid",
		"top",
		"marry",
		"test",
		"water",
		"fax",
		"kneel",
		"enchanting",
		"used",
		"sweltering",
		"dress",
		"tight",
		"mighty",
		"exultant",
		"protect",
		"found",
		"far",
		"plug",
		"plants",
		"hospital",
		"terrify",
		"horses",
		"direful",
		"defiant",
		"thought",
		"elbow",
		"drum",
		"play",
		"unarmed",
		"curious",
		"run",
		"harbor",
		"simplistic",
		"servant",
		"window",
		"accurate",
		"blind",
		"trust",
		"periodic",
		"statuesque",
		"spotty",
		"house",
		"blade",
		"thaw",
		"telephone",
		"level",
		"education",
		"last",
		"reminiscent",
		"wipe",
		"talented",
		"ratty",
		"free",
		"aberrant",
		"want",
		"hum",
		"exotic",
		"sisters",
		"pastoral",
		"tasteful",
		"interest",
		"useless",
		"end",
		"spotted",
		"furniture",
		"bone",
		"increase",
		"eggs",
		"fair",
		"good",
		"nine",
		"cars",
		"attend",
		"handsomely",
		"fortunate",
		"quartz",
		"tame",
		"verse",
		"language",
		"massive",
		"doubt",
		"brief",
		"habitual",
		"penitent",
		"vest",
		"private",
		"sack",
		"cause",
		"vanish",
		"spare",
		"fork",
		"judge",
		"consider",
		"bruise",
		"ban",
		"rejoice",
		"pin",
		"rose",
		"seed",
		"milk",
		"station",
		"adorable",
		"impartial",
		"trick",
		"freezing",
		"belong",
		"cats",
		"curly",
		"thundering",
		"honey",
		"observe",
		"husky",
		"absent",
		"instinctive",
		"dinner",
		"rush",
		"red",
		"jail",
		"press",
		"unkempt",
		"vulgar",
		"cruel",
		"attempt",
		"undress",
		"tacit",
		"stem",
		"burn",
		"frightened",
		"screw",
		"salt",
		"carpenter",
		"polite",
		"stereotyped",
		"silk",
		"misty",
		"keen",
		"suggestion",
		"dry",
		"efficacious",
		"growth",
		"waste",
		"offer",
		"ad hoc",
		"phone",
		"roof",
		"inject",
		"lackadaisical",
		"torpid",
		"robust",
		"harass",
		"stare",
		"crayon",
		"six",
		"swanky",
		"farm",
		"treat",
		"wine",
		"succinct",
		"weigh",
		"slip",
		"system",
		"whisper",
		"sin",
		"flawless",
		"tease",
		"snow",
		"cent",
		"chicken",
		"majestic",
		"outrageous",
		"distance",
		"sound",
		"insidious",
		"iron",
		"hard",
		"desk",
		"corn",
		"encourage",
		"precede",
		"mammoth",
		"true",
		"glib",
		"cut",
		"bite",
		"stain",
		"alluring",
		"live",
		"equable",
		"embarrass",
		"cake",
		"move",
		"exist",
		"chess",
		"fluffy",
		"dust",
		"glove",
		"lumber",
		"cause",
		"typical",
		"north",
		"move",
		"stage",
		"thoughtful",
		"cannon",
		"languid",
		"bent",
		"bounce",
		"trite",
		"male",
		"sail",
		"puny",
		"changeable",
		"known",
		"cream",
		"mine",
		"gun",
		"certain",
		"snails",
		"earn",
		"naive",
		"confused",
		"birth",
		"astonishing",
		"business",
		"lame",
		"amusement",
		"subsequent",
		"belief",
		"even",
		"kill",
		"offer",
		"surround",
		"irritate",
		"unit",
		"beginner",
		"obedient",
		"calm",
		"past",
		"foregoing",
		"stingy",
		"wiry",
		"soothe",
		"mouth",
		"drink",
		"jail",
		"shock",
		"need",
		"trade",
		"plant",
		"chalk",
		"describe",
		"admit",
		"lush",
		"rule",
		"cover",
		"present",
		"rough",
		"call",
		"bed",
		"reflective",
		"premium",
		"believe",
		"owe",
		"celery",
		"nail",
		"gleaming",
		"bustling",
		"big",
		"part",
		"comfortable",
		"order",
		"supreme",
		"spoil",
		"uttermost",
		"challenge",
		"unaccountable",
		"snore",
		"beds",
		"permit",
		"kindhearted",
		"vast",
		"wide",
		"thankful",
		"hateful",
		"painful",
		"icky",
		"unusual",
		"science",
		"trap",
		"peel",
		"rhythm",
		"evanescent",
		"tip",
		"wood",
		"stormy",
		"thinkable",
		"inexpensive",
		"battle",
		"nervous",
		"enthusiastic",
		"coast",
		"naughty",
		"crook",
		"prepare",
		"walk",
		"scale",
		"detect",
		"immense",
		"nasty",
		"building",
		"subtract",
		"pumped",
		"air",
		"godly",
		"imaginary",
		"disgusted",
		"fetch",
		"library",
		"overflow",
		"paint",
		"coach",
		"excite",
		"bathe",
		"morning",
		"quiet",
		"reply",
		"theory",
		"hurried",
		"pick",
		"garrulous",
		"care",
		"cherries",
		"offbeat",
		"authority",
		"measly",
		"dusty",
		"downtown",
		"aquatic",
		"train",
		"oceanic",
		"damp",
		"measure",
		"colorful",
		"earth",
		"melt",
		"efficient",
		"slave",
		"stop",
		"quack",
		"nest",
		"unused",
		"limit",
		"turn",
		"curved",
		"humorous",
		"hideous",
		"living",
		"current",
		"waste",
		"rock",
		"windy",
		"tan",
		"necessary",
		"remind",
		"shame",
		"domineering",
		"increase",
		"ignore",
		"channel",
		"bewildered",
		"murder",
		"bead",
		"toe",
		"support",
		"square",
		"petite",
		"toad",
		"bumpy",
		"ear",
		"oven",
		"present",
		"rot",
		"thumb",
		"curvy",
		"screeching",
		"depressed",
		"rain",
		"miss",
		"quick",
		"bridge",
		"disastrous",
		"fierce",
		"connection",
		"various",
		"school",
		"cub",
		"earthy",
		"check",
		"different",
		"toothsome",
		"odd",
		"enchanted",
		"annoyed",
		"nerve",
		"property",
		"rural",
		"pop",
		"intend",
		"faint",
		"draconian",
		"pointless",
		"store",
		"remain",
		"purring",
		"automatic",
		"able",
		"kettle",
		"analyse",
		"land",
		"quizzical",
		"dirty",
		"bubble",
		"comb",
		"rule",
		"easy",
		"strengthen",
		"verdant",
		"spade",
		"simple",
		"toy",
		"healthy",
		"scrape",
		"identify",
		"visitor",
		"irate",
		"mature",
		"risk",
		"effect",
		"sand",
		"knot",
		"person",
		"rate",
		"front",
		"materialistic",
		"yielding",
		"tidy",
		"makeshift",
		"expensive",
		"country",
		"side",
		"short",
		"round",
		"juice",
		"shrill",
		"diligent",
		"license",
		"advice",
		"resolute",
		"flag",
		"panoramic",
		"double",
		"two",
		"stimulating",
		"yellow",
		"nosy",
		"tooth",
		"gigantic",
		"obese",
		"week",
		"rampant",
		"promise",
		"applaud",
		"noiseless",
		"third",
		"quirky",
		"consist",
		"heat",
		"womanly",
		"dull",
		"basketball",
		"abandoned",
		"prick",
		"whole",
		"meal",
		"cluttered",
		"summer",
		"shade",
		"anxious",
		"men",
		"soggy",
		"rod",
		"amuse",
		"nutritious",
		"hands",
		"squalid",
		"chunky",
		"egg",
		"cows",
		"flow",
		"sparkle",
		"yoke",
		"ray",
		"push",
		"sneaky",
		"desire",
		"macho",
		"pedal",
		"frantic",
		"panicky",
		"uninterested",
		"swing",
		"fill",
		"introduce",
		"stream",
		"valuable",
		"expert",
		"number",
		"taste",
		"afternoon",
		"kiss",
		"plot",
		"profit",
		"cave",
		"hop",		
		"joyous",
		"yard",
		"productive",
		"fearful",
		"song",
		"practise",
		"pigs",
		"humor",
		"mixed",
		"weight",
		"pull",
		"rifle",
		"tree",
		"winter",
		"public",
		"puffy",
		"crawl",
		"faded",
		"clear",
		"discreet",
		"soda",
		"knot",
		"doubtful",		
		"fantastic",
		"fold",
		"knotty",
		"bitter",
		"talk",
		"dress",
		"envious",
		"form",
		"jolly",
		"jaded",
		"bells",
		"bee",
		"weak",
		"childlike",
		"umbrella",
		"discovery",
		"preserve",
		"sneeze",
		"lopsided",
		"jump",
		"fragile",
		"smile",
		"tiger",
		"dapper",
		"amused",
		"program",
		"cactus",
		"rapid",
		"book",
		"groovy",
		"birthday",
		"hydrant",
		"responsible",
		"blood",
		"festive",
		"temporary",
		"serious",
		"scintillating",
		"clover",
		"month",
		"clear",
		"false",
		"man",
		"giants",
		"foamy",
		"meeting",
		"cheese",
		"position",
		"pickle",
		"material",
		"test",
		"cool",
		"quill",
		"telling",
		"love",
		"cap",
		"flash",
		"busy",
		"ludicrous",
		"save",
		"trouble",
		"table",
		"picture",
		"shock",
		"woebegone",
		"produce",
		"educated",
		"unruly",
		"null",
		"pencil",
		"crack",
		"badge",
		"frequent",
		"tomatoes",
		"magic",
		"large",
		"whip",
		"squirrel",
		"ripe",
		"yarn",
		"pig",
		"blot",
		"sedate",
		"knock",
		"step",
		"scrub",
		"health",
		"ossified",
		"hot",
		"shrug",
		"elderly",
		"pour",
		"silent",
		"rich",
		"pipe",
		"knife",
		"undesirable",
		"statement",
		"writing",
		"wrestle",
		"tawdry",
		"permissible",
		"search",
		"mountainous",
		"sparkling",
		"rock",
		"grouchy",
		"industrious",
		"rainstorm",
		"bushes",
		"carriage",
		"puncture",
		"answer",
		"whine",
		"expand",
		"elfin",
		"friends",
		"shoes",
		"roomy",
		"acoustic",
		"alert",
		"abrupt",
		"fixed",
		"actor",
		"gate",
		"jam",
		"quarter",
		"kindly",
		"arithmetic",
		"important",
		"basket",
		"matter",
		"return",
		"protective",
		"plant",
		"petite",
		"waves",
		"internal",
		"spoon",
		"silly",
		"discussion",
		"learn",
		"afford",
		"hammer",
		"spark",
		"economic",
		"glossy",
		"resonant"];
  var randWord1 = wordList[Math.floor(Math.random() * wordList.length)];
  var randWord2 = wordList[Math.floor(Math.random() * wordList.length)];
  document.getElementById("randWord1").innerHTML =  randWord1;
  document.getElementById("randWord2").innerHTML =  randWord2}