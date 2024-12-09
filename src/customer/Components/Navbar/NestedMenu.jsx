import React, { useState } from "react";

const menuData = {
  "health & pharmacy": {
    "health offers": [],
    "health value packs & bundles": [],
    "medicines & treatments": [
      "ear wax removal drops",
      "eyecare",
      "pain",
      "stomach & bowel",
      "heartburn & indigestion",
      "footcare",
      "allergy & hayfever",
      "skin conditions",
      "first aid",
      "cough cold & flu",
      "mouth & oral care",
      "sleep",
      "earcare",
      "hair loss",
      "diabetes",
      "heart health",
    ],
    "pharmacy medicines": [],
    "vitamins & supplements": [],
    "baby & child health": [],
    "women's health": [],
    "men's health": [],
    "lifestyle & wellbeing": [],
    "sexual pleasure & wellbeing": [],
    "incontinence": [],
    "electrical health & diagnostics": [],
    "mobility & daily living aids": [],
    "travel health": [],
    "new in health": [],
    "COVID-19 Information Products & Testing": [],
  },
  "beauty & skincare": {
    "makeup": ["foundation", "lipstick", "eyeliner", "mascara"],
    "skincare": ["moisturizers", "cleansers", "serums", "masks"],
    "haircare": ["shampoo", "conditioner", "hair treatments", "hair dye"],
    "fragrance": ["women's fragrances", "men's fragrances", "gift sets"],
  },
  "fragrance": {
    "women's fragrances": ["perfume", "eau de toilette", "eau de parfum"],
    "men's fragrances": ["aftershave", "cologne", "eau de toilette"],
    "gift sets": ["for her", "for him"],
  },
  "baby & child": {
    "baby food": ["formula", "snacks", "baby cereal", "toddler meals"],
    "nappies & wipes": ["newborn", "size 1-6", "pull-ups", "wipes"],
    "baby toiletries": ["baby shampoo", "baby lotion", "baby powder"],
    "toys & gifts": ["soft toys", "educational toys", "gifts"],
  },
  "electrical": {
    "hair styling": ["hair dryers", "straighteners", "curlers"],
    "male grooming": ["electric shavers", "beard trimmers", "grooming kits"],
    "oral care": ["electric toothbrushes", "flossers", "toothpaste"],
    "health tech": ["thermometers", "blood pressure monitors", "scales"],
  },
  "sun & holiday": {
    "sun cream": ["SPF 15", "SPF 30", "SPF 50+"],
    "after sun": ["lotions", "gels", "sprays"],
    "travel accessories": ["travel pillows", "adapters", "luggage tags"],
    "insect repellent": ["sprays", "wipes", "bands"],
  },
  "wellness": {
    "mental wellbeing": ["meditation", "mindfulness", "self-help books"],
    "fitness": ["yoga", "home workouts", "fitness equipment"],
    "sleep aids": ["pillows", "white noise machines", "sleep masks"],
    "nutrition": ["supplements", "healthy snacks", "protein shakes"],
  },
  "toiletries": {
    "bath & shower": ["shower gel", "bubble bath", "body scrub"],
    "deodorants": ["roll-on", "spray", "stick"],
    "oral care": ["toothpaste", "mouthwash", "dental floss"],
    "feminine care": ["sanitary pads", "tampons", "menstrual cups"],
  },
  "men's": {
    "shaving": ["razors", "shaving foam", "aftershave"],
    "grooming": ["beard oil", "hair gel", "body wash"],
    "clothing": ["t-shirts", "jeans", "jackets"],
    "accessories": ["watches", "belts", "sunglasses"],
  },
  "opticians": {
    "glasses": ["men's glasses", "women's glasses", "children's glasses"],
    "sunglasses": ["polarized", "aviators", "wayfarers"],
    "contact lenses": ["daily", "monthly", "colored"],
    "eye health": ["eye drops", "eye tests", "blue light glasses"],
  },
  "photo": {
    "printing": ["photo prints", "canvas prints", "photo books"],
    "gifts": ["personalized mugs", "photo calendars", "keyrings"],
    "frames": ["photo frames", "collage frames", "digital frames"],
    "cameras": ["digital cameras", "polaroids", "action cameras"],
  },
  "vegan": {
    "food & drink": ["vegan snacks", "vegan protein", "vegan chocolate"],
    "skincare": ["vegan moisturizers", "vegan cleansers", "vegan masks"],
    "haircare": ["vegan shampoo", "vegan conditioner", "vegan hair dye"],
    "makeup": ["vegan foundation", "vegan lipstick", "vegan mascara"],
  },
  "gift": {
    "for her": ["jewelry", "fragrance", "chocolate"],
    "for him": ["watches", "cologne", "gadgets"],
    "for kids": ["toys", "books", "games"],
    "occasions": ["birthday", "anniversary", "wedding"],
  },
  "new in": {
    "beauty": ["new makeup", "new skincare", "new haircare"],
    "health": ["new supplements", "new health tech", "new wellness products"],
    "fashion": ["new clothing", "new accessories", "new shoes"],
    "home": ["new decor", "new kitchenware", "new bedding"],
  },
  "brand A-Z": {
    "A-C": ["Aveeno", "Boots", "CeraVe"],
    "D-F": ["Dove", "Estee Lauder", "Fenty"],
    "G-I": ["Garnier", "Hugo Boss", "Innisfree"],
    "J-L": ["Jo Malone", "Kiehl's", "L'Oréal"],
    "M-O": ["MAC", "Nivea", "Olay"],
    "P-R": ["Pantene", "Revlon", "Rimmel"],
    "S-U": ["Simple", "TRESemmé", "Urban Decay"],
    "V-Z": ["Vaseline", "YSL", "Zara"],
  },
};

const NestedMenu = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="flex bg-white p-4">
      <div className="w-1/4 border-r">
        {Object.keys(menuData).map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredItem(item)}
            // onMouseLeave={() => setHoveredItem(null)}
            className={`p-2 cursor-pointer hover:bg-blue-100 ${
              hoveredItem === item ? "bg-blue-100" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="w-3/4 p-4">
        {hoveredItem &&
          Object.keys(menuData[hoveredItem]).map((subItem, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-blue-50"
            >
              {subItem}
            </div>
          ))}
      </div>
    </div>
  );
};

export default NestedMenu;
