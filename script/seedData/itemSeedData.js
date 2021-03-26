'use strict'

//item data
const items = [
  {
    itemListName:
      'IBIS Titanium Racing Road Bike USA SEBASTOPOL 56cm Made in California',
    description:
      'Ibis TI Bike, highly collectible, Superb titanium tube set, superb ride, 56CM top tube, semi sloping geo. 52cm seat tube. FYI, I am keeping the saddle, wheel set and pedals for my other bike.Questions welcomed.',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Closed',
    deliveryOption: 'Pickup_Only',
    userId: 1,
    createdAt: '2021-03-25 01:00:06',
    itemId: 1,
  },
  {
    itemListName: 'Stove and pan',
    description:
      'Another family member left this 15 years ago and does not want it back. I don’t have matching lid to go with the pan. Please email me with a possible pickup time.',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 2,
    createdAt: '2021-03-22 01:00:06',
    itemId: 2,
  },
  {
    itemListName: 'Queen bed frame and duvet',
    description:
      " A queen metal bedframe. Also duvet + cover + pillow. No mattress. The duvet has only been lightly used and are only several months old / the duvet cover just needs a regular wash in the laundry. I would have kept them but I needed to move fast and wasn't able to take them with me.",
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 3,
    createdAt: '2021-03-26 03:00:06',
    itemId: 3,
  },
  {
    itemListName: 'Fancy watch',
    description:
      'Fancy Watcg in good condition. It comes with the box and a dust bag. Worn once.',
    itemType: 'Offer',
    itemCondition: 'Gently_Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 4,
    createdAt: '2021-03-24 05:00:06',
    itemId: 4,
  },
  {
    itemListName: 'HikingBoots',
    description: 'ISO of Hiking Boots for my summer vacation!. Size 38.',
    itemType: 'Seeking',
    itemCondition: 'Gently_Used',
    status: 'Open',
    deliveryOption: 'No_Contact_Pickup',
    userId: 5,
    createdAt: '2021-03-25 01:00:06',
    itemId: 5,
  },
  {
    itemListName: 'FREE 87 REGAL AFT CABIN-NEEDS MOTOR',
    description:
      '87 REGAL 23 FT. NEEDS MOTOR. FULL V CABIN PLUS AFT CABIN! SLEEPS 6!! ,FRIDGE SINK,STOVE,FULL HEAD WITH TANK! JUST BOTTOM PAINTED 5 YR PAINT! Never got around to putting in an engine and was just going to donate to make room for my other boat. hard to work with the charitable org. during this pandemic so I figured I give it a shot to sell for same as donation. If you Know way around boats could pick up a deal. Boat is in water and would have to pick it up at nearby ramp.Very LOCAL Water delivery also possible. Thanks.',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Will_Deliver',
    userId: 6,
    createdAt: '2021-03-26 01:00:06',
    itemId: 6,
  },
  {
    itemListName: 'Bike',
    description: 'ISO of Bike',
    itemType: 'Seeking',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'No_Contact_Pickup',
    userId: 7,
    createdAt: '2021-03-24 05:00:06',
    itemId: 7,
  },
  {
    itemListName: 'Bike Helmet',
    description: 'ISO - Bike Helmet',
    itemType: 'Seeking',
    itemCondition: 'New',
    status: 'Open',
    deliveryOption: 'No_Contact_Pickup',
    userId: 8,
    createdAt: '2021-03-26 01:00:06',
    itemId: 8,
  },
  {
    itemListName: 'A puppy',
    description: 'ISO of cute puppy - prefer a pug',
    itemType: 'Seeking',
    itemCondition: 'New',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 9,
    createdAt: '2021-03-25 01:00:06',
    itemId: 9,
  },
  {
    itemListName: 'Baby swing ',
    description: 'Battery operated Eddie Bauer baby swing. Works.',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 10,
    createdAt: '2021-03-26 01:00:06',
    itemId: 10,
  },
  {
    itemListName: "Baldwin 5'1 BG Piano",
    description:
      "Hi everyone, how are you all doing today?.. Hope your day started well...Am giving out a Baldwin 5'1 Baby Grand Piano out for free to a very passionate lover who will take good card of this beautiful baby... If interested, please do drop me a phone number so i can contact you. Thanks.",
    itemType: 'Offer',
    itemCondition: 'Gently_Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 11,
    createdAt: '2021-03-26 01:00:06',
    itemId: 11,
  },
  {
    itemListName: 'Free tile',
    description:
      'Around 100 tiles, 3 types- s/m/l\nMaybe enough for a backsplash, but not a floor. Good for extras or spot repairs.\nVERY heavy.',
    itemType: 'Offer',
    itemCondition: 'New',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 12,
    createdAt: '2021-03-25 01:00:06',
    itemId: 12,
  },
  {
    itemListName: 'Brown microfiber chair',
    description:
      'Light brown microfiber chair\nChrome legs\nNo tears or holes\nA bit dirty but can probably be cleaned up\nI can help load into your vehicle\n38" wide, 38" deep, 31" tall\nPlease call or text, show contact info\nYes it is available and no I won\'t send a code to prove that I\'m real',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 13,
    createdAt: '2021-03-24 05:00:06',
    itemId: 13,
  },
  {
    itemListName: 'World War II and Aviation History magazines',
    description:
      'Three World War II and two Aviation History magazines (monthly subscription, so there will be others in the future if interested) * Sorry but won\'t "hold" * first here (State/Ontario Streets) is welcome to them.',
    itemType: 'Offer',
    itemCondition: 'Gently_Used',
    status: 'Open',
    deliveryOption: 'Will_Deliver',
    userId: 14,
    createdAt: '2021-03-26 01:00:06',
    itemId: 14,
  },
  {
    itemListName: "35'' SANYO TV",
    description:
      'GOOD FOR VIDEO GAMES IN BASEMENT,HAVE REMOTE.TUBE TV ,VERY HEAVY',
    itemType: 'Offer',
    itemCondition: 'New',
    status: 'Open',
    deliveryOption: 'Will_Deliver',
    userId: 15,
    createdAt: '2021-03-24 01:00:06',
    itemId: 15,
  },
  {
    itemListName: 'Bifold Closet Door',
    description:
      '2 Closet doors. We swapped them for sliding doors.\n\nSize 35 width x 75 height each.\n\nSome damage but overall still in good shape.',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Will_Deliver',
    userId: 16,
    createdAt: '2021-03-26 01:00:06',
    itemId: 16,
  },
  {
    itemListName: 'Free ikea ektorp black sofa ',
    description:
      'Perfectly good couch in good condition, includes purple cover as well. Cat friendly home. Must pick up from 3rd floor in east Lakeview',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'No_Contact_Pickup',
    userId: 17,
    createdAt: '2021-03-25 01:00:06',
    itemId: 17,
  },
  {
    itemListName: "7' custom sofa",
    description: "Couch 7' in great shape,\ncome get it!",
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 18,
    createdAt: '2021-03-24 01:00:06',
    itemId: 18,
  },
  {
    itemListName: '8 saucers & 2 small glass pitchers',
    description: '8 SAUCERS & 2 SMALL GLASS PITCHERS IF ANYONE CAN USE.',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 19,
    createdAt: '2021-03-24 05:00:06',
    itemId: 19,
  },
  {
    itemListName: 'Free Pine Armoire',
    description:
      'Decent armoire in the alley behind 1100 N. Dearborn Street, Chicago, IL 60622.',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'No_Contact_Pickup',
    userId: 20,
    createdAt: '2021-03-26 01:00:06',
    itemId: 20,
  },
  {
    itemListName: 'Free Wooden Picture window ',
    description:
      'FREE\nhave 2 large Wooden picture windows must be able to carry out Weight about 300 lbs.\n\nThe larger windows are\nsize 76”Width x62 length',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'No_Contact_Pickup',
    userId: 21,
    createdAt: '2021-03-26 01:00:06',
    itemId: 21,
  },
  {
    itemListName: 'China cabinet',
    description:
      'China cabinet. has glass shelves and display light. As-is (see pics)\n\n81"Tall x 55"W x 16"D.\n**Item is built as ONE piece. and needs to be transported as such.\nPick up only.',
    itemType: 'Offer',
    itemCondition: 'Gently_Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 22,
    createdAt: '2021-03-25 01:00:06',
    itemId: 22,
  },
  {
    itemListName: 'T8 Energy Efficient fluorescent light bulbs',
    description:
      'We have over 500 4’ T8 Energy Efficient fluorescent light bulbs that all work. A good portion are even brand new. These are 5000K color and sell for over $2 a bulb. Free to anyone who needs them and can pickup. Email me your phone number and I will call you. If this post is up they are available',
    itemType: 'Offer',
    itemCondition: 'New',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 23,
    createdAt: '2021-03-26 01:00:06',
    itemId: 23,
  },
  {
    itemListName: 'Free bales of hay',
    description:
      'Free bales of hay, pick up anytime. Under the elevated tracks at 940 w Wolfram.',
    itemType: 'Offer',
    itemCondition: 'New',
    status: 'Open',
    deliveryOption: 'No_Contact_Pickup',
    userId: 24,
    createdAt: '2021-03-26 01:00:06',
    itemId: 24,
  },
  {
    itemListName:
      'Free kitchen cabinets and bathroom vanity/ sliding door/ mirror',
    description:
      'Free. Old but in very good condition. 2 kitchens to pick from or take both. Working stove and fridge set included with it and only if you take it all. Need gone on Saturday. Will help uninstall and load them to your truck. Serious inquiries only and unless you have truck/ van and the means to come, pls don’t waste my time. Text only',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 25,
    createdAt: '2021-03-24 01:00:06',
    itemId: 25,
  },
  {
    itemListName: 'Moving Boxes - Free - Pickup in Round Lake Beach',
    description:
      'Free Moving Boxes\nAvailable while they last\nmore boxes each week\n\nUnfortunately we are to busy to take calls.\nPlease stop by for boxes, there are times they\nmay not be available. Sorry for any inconvenience this\nmay cause. Just trying to keep boxes out of the landfill.\n\nMonday - Friday 9a - 2p',
    itemType: 'Offer',
    itemCondition: 'Gently_Used',
    status: 'Open',
    deliveryOption: 'No_Contact_Pickup',
    userId: 26,
    createdAt: '2021-03-25 01:00:06',
    itemId: 26,
  },
  {
    itemListName: 'Free woodchip dumpsite',
    description:
      "Any tree removal companies that need a place to dump there wood chips, our place is great for dump truck or semi's. Anyone who has wood chips, you could dump at our site for free.\n\nNo trunks. Just woodchips.\n\nIf you have any questions or need location address, email me.",
    itemType: 'Offer',
    itemCondition: 'New',
    status: 'Open',
    deliveryOption: 'No_Contact_Pickup',
    userId: 27,
    createdAt: '2021-03-26 01:00:06',
    itemId: 27,
  },
  {
    itemListName: 'Sofa Bed',
    description:
      "Lightly used sofa bed for free. We are downsizing.\nLived its life in TV room in a home that doesn't watch much TV\nHeavy, will need a truck and two strong people\nIt is in our garage.\nemail us to arrange pick up",
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 28,
    createdAt: '2021-03-24 05:00:06',
    itemId: 28,
  },
  {
    itemListName: 'print\nFree Rolling Pins',
    description:
      'Disposing of warehouse inventory for embossed rolling pins. Must pick up from warehouse. Different designs.',
    itemType: 'Offer',
    itemCondition: 'New',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 29,
    createdAt: '2021-03-26 01:00:06',
    itemId: 29,
  },
  {
    itemListName: 'Free Three year old tree',
    description:
      'The landscapers are coming tomorrow I need this tree gone today I do not know what kind of tree it is it’s 6 inches in diameter you would have to dig it up again it Has to be gone today go to 2255 W. Monroe before you dig it up text me show contact info\nmy name is Lynn maybe you can Google the house to see what kind of tree it is',
    itemType: 'Offer',
    itemCondition: 'New',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 30,
    createdAt: '2021-03-24 01:00:06',
    itemId: 30,
  },
  {
    itemListName: 'Sling for Rotator Cuff Surgery Large',
    description:
      "Sling for Rotator Cuff Surgery Large Size.\nIt has velcro on straps and you can adjust it.\nVery clean, lightly used.\nHely & Weber Shoulder Sling\nemail me, I'll leave it to our apartment lobby for you to pick up.",
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 31,
    createdAt: '2021-03-26 01:00:06',
    itemId: 31,
  },
  {
    itemListName: 'plywood free',
    description:
      '2 sheets and half come and oick up on alley behind 7464 n sheridan',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 32,
    createdAt: '2021-03-25 01:00:06',
    itemId: 32,
  },
  {
    itemListName:
      'Giving away 16 free worn out tires. Can be used for garden, gardening or project',
    description: 'please call!',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 33,
    createdAt: '2021-03-26 01:00:06',
    itemId: 33,
  },
  {
    itemListName: 'fancy champagne boxes',
    description: 'two fancy champagne boxes',
    itemType: 'Offer',
    itemCondition: 'Gently_Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 34,
    createdAt: '2021-03-24 01:00:06',
    itemId: 34,
  },
  {
    itemListName: 'misc stone, ceramic & porcelain tiles',
    description:
      'WYSIWYG (for those under 35, WhatYouSeeIsWhatYouGet)\n\nvarious sizes and materials that you can make something creative out of',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 35,
    createdAt: '2021-03-24 05:00:06',
    itemId: 35,
  },
  {
    itemListName: 'Large Heavy Safe-Cabinet',
    description:
      'Large, 975 pound safe-cabinet by The Safe-Cabinet Company, Marietta, Ohio.\n65 tall by 29.5 wide by 28.25 deep.',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 36,
    createdAt: '2021-03-26 01:00:06',
    itemId: 36,
  },
  {
    itemListName: 'ISO Book Shelf(s) (',
    description:
      "Looking for book shelves that you no longer want or need. I need several for my home. Nothing fancy, but no junk either. Just a solid dark colored shelf that can be of about any height, but preferably 6-7 feet tall.\nI'm on Work Comp with an injury, so cannot afford to buy any shelving, and I am really in need of some. I can get help to come pick them up if you're willing to get rid of it/them. Please send any pics if you have some, as I'll really need to see them first before I can come get them. I'm also located in Joliet, so would like to find one as close to here as possible.\nI appreciate your time for reading this. Thanx all.",
    itemType: 'Seeking',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 12,
    createdAt: '2021-03-25 01:00:06',
    itemId: 37,
  },
  {
    itemListName: 'ISO Vintage Christmas Animated Mechanical Displays',
    description:
      'Looking for old animated mechanical Christmas, Easter and Halloween displays from store displays, windows and mall Santa grottos. These were also used by florists, banks, casinos and other businesses. I’m looking for items exactly like what is in these pictures, or made by the same company, not the small pieces that were sold at Kmart and Walmart store. The ones I’m looking for were all sold commercially.\n\nThanks!\n\nAnimated, Motorized, Mechanical, Christmas, Automaton, Mall, Display, Florist, Store, Window, Motion, Moving, Decorations, Doll, Figure, Elf, Santa, Reindeer, Bear, Toys, Eskimos, Mannequin, Mrs, Caroler, Candy, Tree, Nativity, David Hamberger, Harold Gale, Silvestri, RK International, Ottinger, Barrango, Heimo. Soldier, Vintage, Antiqu',
    itemType: 'Seeking',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 28,
    createdAt: '2021-03-22 01:00:06',
    itemId: 38,
  },
  {
    itemListName: 'ISO tractor tires 14.9-28”',
    description:
      'Looking for a set of 14.9-28” tires for a old Ford tractor. If you have a set , let me know.',
    itemType: 'Seeking',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 11,
    createdAt: '2021-03-26 01:00:06',
    itemId: 39,
  },
  {
    itemListName: 'ISO Puppy',
    description:
      'Hello! I am ISO a small breed poodle preferred.  Also willing to travel nearby. Please email me! Thank you.',
    itemType: 'Seeking',
    itemCondition: 'New',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 18,
    createdAt: '2021-03-24 01:00:06',
    itemId: 40,
  },
  {
    itemListName: 'ISO: Gold Medal Popcorn Machine Cart',
    description:
      'I am looking for a cart for a Gold Medal Popcorn Machine Model #2408\nThe carts model # is 2689CR',
    itemType: 'Seeking',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 24,
    createdAt: '2021-03-25 01:00:06',
    itemId: 41,
  },
  {
    itemListName: 'Original ISO VIS D oil and gas sign',
    description:
      'Oil and gas sign. Original ISO VIS D sign with frame. sign is 13 3/4" x 60 x 1 framed 63 1/4 x 19. if interested send name and number and we can make arrangements. Coolstuff',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 16,
    createdAt: '2021-03-26 01:00:06',
    itemId: 42,
  },
  {
    itemListName: 'ISO Canvas or Stretcher Bars/Canvas Frames',
    description:
      "Hey there\nPainter here checking if anyone has a bunch of canvas material they aren't using\nAnd checking if anyone has any stretcher bars/canvas frames/damaged paintings they aren't using\n\nI like to assemble my own canvas and I know these two items are often put to the side if there's any extra so checking if anyone is trying to get rid of any\nThanks!",
    itemType: 'Seeking',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 9,
    createdAt: '2021-03-24 01:00:06',
    itemId: 43,
  },
  {
    itemListName: 'ISO Restoration Hardware Salvaged Wood Trestle Table ',
    description:
      'Looking for Restoration Hardware Salvaged Wood Trestle Table in natural wood or salvaged grey color.\nIdeally, looking for the 84" or the 96" length WITH extension',
    itemType: 'Seeking',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 31,
    createdAt: '2021-03-22 01:00:06',
    itemId: 44,
  },
  {
    itemListName: 'ISO desk',
    description:
      'In search of a desk around 38” - 39” in length due to small space at a reasonable price range! Something similar to this, with drawer, any color\nThank you for your help!',
    itemType: 'Seeking',
    itemCondition: 'Gently_Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 17,
    createdAt: '2021-03-25 01:00:06',
    itemId: 45,
  },
  {
    itemListName: 'ISO desk chair',
    description:
      'In search of desk chair minimalistic or vibrant reasonable pricing!',
    itemType: 'Seeking',
    itemCondition: 'Gently_Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 17,
    createdAt: '2021-03-26 01:00:06',
    itemId: 46,
  },
  {
    itemListName: 'ISO unfinished IKEA tarva dresser',
    description:
      'Looking for a 5 drawer tall dresser. Please contact if you have one for sale. Can pick up. Thanks!',
    itemType: 'Seeking',
    itemCondition: 'Gently_Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 7,
    createdAt: '2021-03-22 01:00:06',
    itemId: 47,
  },
  {
    itemListName: 'ISO artist space (6 or 12 month lease) ',
    description:
      'Hello, I am looking for a space that is 100sf or more. I am open to shared spaces or a private space.',
    itemType: 'Seeking',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 22,
    createdAt: '2021-03-24 01:00:06',
    itemId: 48,
  },
  {
    itemListName: 'Assorted Photo Accessories',
    description:
      '1 VIVITAR Flash Auto 200, with black case& owner’s manual\n2 Black Leather Cases for camera lenses\n2 HOYA Filters for Special Effects, New, in original boxes,\n52 MM PL & 58 MM PL(for both)\n1 PROGO Home & Travel pocket Battery Charger with Car Adapter\nfor digital cameras or camcorders. Worldwide Universal Voltage,\nAC 100v - 240v; DC 12v - 24v (car charger). Never Used,\nIn original box. Battery NOT Included.\n1 Vivitar 1 Foot Straight Shutter Cord, PC-1, in original box \n1 17” Shutter Cord, unboxed,\n1 X-Ray Safety Case 800 for up to ISO 800 Speed Film',
    itemType: 'Offer',
    itemCondition: 'Used',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 31,
    createdAt: '2021-03-22 01:00:06',
    itemId: 49,
  },
  {
    itemListName: 'brother Bk ink cartridge',
    description:
      'condition: new\nmake / manufacturer: inobella\nLC107bk\nInobella\n6 cartridges\nDescription\nSuper High Yield Black Ink Cartridge\n\nFeatures & details\nBusiness Smart Series Inkjet Printers: MFCJ4410DW, MFCJ4510DW and MFCJ4610DW\nApproximately 1, 200 pages\nApproximate page yields in accordance with ISO/IEC 24715\nSave 10% on all ink reorders with Dash Replenishment. Upon activation, your printer measures ink levels and places smart reorders when you are running low. No subscription fees. Cancel anytime\nProduct information Black\nProduct Dimensions 3.58 x 1.14 x 4.53 inches\nItem Weight 3.04 ounces\nASIN B0095ZBWU8\nItem model number LC107BK\nCustomer Reviews 4.3 out of 5 stars 305Reviews\nBest Sellers Rank #39,874 in Office Products (See Top 100 in Office Products)\n#1,884 in Inkjet Computer Printer Ink',
    itemType: 'Offer',
    itemCondition: 'New',
    status: 'Open',
    deliveryOption: 'Pickup_Only',
    userId: 14,
    createdAt: '2021-03-24 01:00:06',
    itemId: 50,
  },
]
module.exports = items
