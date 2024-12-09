import React, {useState} from 'react';

const BeautyDeals = ({banners}) => {
  const categories = [
    { name: 'Beauty deals', active: true },
    { name: 'Skincare savings', active: false },
    { name: 'NEW beauty', active: false },
  ];

  const products = [
    {
      category: 'NEW beauty',
      items: [
        {
          brand: 'Fenty Skin',
          name: 'Treat lips to NEW Treatz Hydrating & Strengthening Lip Oil',
          image: banners?.[6].url,
          tag: 'NEW',
        },
        {
          brand: 'NYX',
          name: 'NEW Butter Gloss Bling Lip Gloss, the OG gloss with sparkly shine',
          image: banners?.[24].url,
          tag: 'NEW & ONLY AT BOOTS',
        },
        {
          brand: 'e.l.f.',
          name: 'NEW Brow Laminating Gel, FREE gift when you spend £20!',
          image: banners?.[23].url,
          tag: 'FREE GIFT',
        },
        {
          brand: 'Fenty Beauty',
          name: 'Discover the NEW Gloss Bomb Stix High-Shine Gloss Stick',
          image: banners?.[25].url,
          tag: 'NEW',
        },
      ],
    },
    {
      category: 'Beauty deals',
      items: [
        {
          brand: 'Olay',
          name: '1/2 price on Vitamin C Anti-Dark Spot SPF30 Day Cream 50ml',
          image: banners?.[27].url,
          tag: '1/2 PRICE',
        },
        {
          brand: 'No7',
          name: '3 for 2 on selected Future Renew, including Defence Shield SPF50**',
          image: banners?.[28].url,
          tag: '3 FOR 2',
        },
        {
          brand: 'Estée Lauder',
          name: 'FREE gift when you buy Advanced Night Repair Serum',
          image: banners?.[29].url,
        },
        {
          brand: 'Fragrance',
          name: 'Treat yourself to a new fave & save up to 1/2 price on selected scents',
          image: banners?.[20].url,
          tag: 'SAVE UP TO 1/2 PRICE',
        },
      ],
    },
    {
      category: 'Skincare savings',
      items: [
        {
          brand: 'Soltan',
          name: 'Protect the whole family with save 25% on selected Family Packs',
          image: banners?.[18].url,
        },
        {
          brand: 'E45',
          name: 'Save 25% on selected E45, sun protection for dry & sensitive skin',
          image: banners?.[21].url,
          tag: 'SAVE 25%',
        },
        {
          brand: 'Sanctuary Spa',
          name: 'Treat your loved ones & save 1/3 on selected Sanctuary Spa gift sets',
          image: banners?.[19].url,
          tag: 'SAVE 1/3',
        },
        {
          brand: 'Soap & Glory',
          name: 'Only £7 for selected Soap & Glory with your Advantage Card*',
          image: 'https://assets.boots.com/content/dam/boots/homepage/2023-2024/12--august/wc-1208/P13b_1408_Homepage_25_Flow_Headset_HealthTab.dam.8x9x360.ts%3D1723471555300.jpg',
          tag: 'PRICE ADVANTAGE',
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('Beauty deals');

  const filteredProducts = products.find((product) => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center space-x-4 mb-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`px-4 py-2 text-sm font-semibold ${
              selectedCategory === category.name
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8 ${
          selectedCategory === 'Skincare savings' ? 'bg-yellow-100' : 'bg-pink-100'
        } p-4 rounded-lg`}
      >
        {filteredProducts?.items.map((item) => (
          <div key={item.brand} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src={item.image} alt={item.name} loading="lazy" className="w-full h-48 object-fit" />
              <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                {item.tag}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-indigo-900">{item.brand}</h3>
              <p className="text-sm text-gray-600">{item.name}</p>
              <button className="mt-4 w-full text-sm text-indigo-900 border border-indigo-900 hover:bg-indigo-900 hover:text-white py-2 rounded">
              SHOP NOW                </button>
              {/* <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                SHOP NOW
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BeautyDeals;