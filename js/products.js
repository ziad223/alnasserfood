const products = [
    // ==========================================
    // Category: Canned Goods (معلبات فاخرة)
    // ==========================================
    {
        id: 1,
        name: { ar: "حمص حب معلب ممتاز", en: "Premium Canned Chickpeas" },
        description: {
            ar: "حمص حب عالي الجودة محفوظ بعناية فائقة للحفاظ على طعمه الأصلي وقيمته الغذائية. مثالي لتحضير الحمص بالطحينة أو إضافته للسلطات.",
            en: "High quality chickpeas preserved carefully to maintain their authentic taste and nutritional value. Perfect for making Hummus or adding to salads."
        },
        price: 2.50,
        category: "canned",
        image: "./images/portfolio-2.jpg"
    },
    {
        id: 5,
        name: { ar: "فول مدمس بالخلطة الأصلية", en: "Traditional Fava Beans" },
        description: {
            ar: "فول مدمس جاهز للأكل بخلطتنا السرية، غني بالبروتين ومثالي لوجبة إفطار متكاملة.",
            en: "Ready-to-eat fava beans with our secret blend, rich in protein and perfect for a complete breakfast."
        },
        price: 2.00,
        category: "canned",
        image: "./images/portfolio-3.jpg"
    },
    {
        id: 7,
        name: { ar: "معجون طماطم مركز 800غ", en: "Tomato Paste 800g" },
        description: {
            ar: "معجون طماطم طبيعي 100% بدون أي إضافات صناعية، يضفي لوناً وطعماً غنياً لطبخاتك.",
            en: "100% natural tomato paste with no artificial additives, adds rich color and taste to your cooking."
        },
        price: 3.20,
        category: "canned",
        image: "./images/portfolio-4.jpg"
    },
    {
        id: 13,
        name: { ar: "ذرة حلوة معلبة فاخرة", en: "Sweet Canned Corn" },
        description: {
            ar: "حبات الذرة الذهبية مقرمشة وطبيعية 100% بدون مواد حافظة، ممتازة للسلطات والشوربات.",
            en: "Golden crunchy sweet corn kernels 100% natural without preservatives, great for salads and soups."
        },
        price: 2.80,
        category: "canned",
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&q=80"
    },
    {
        id: 14,
        name: { ar: "فطر صحيح فاخر 400غ", en: "Whole Button Mushrooms 400g" },
        description: {
            ar: "فطر أبيض صحي منتقى بعناية، مثالي لتحضير الشوربات والبيتزا والصلصات الإيطالية.",
            en: "Carefully selected whole white mushrooms, perfect for soups, pizza, and Italian sauces."
        },
        price: 3.50,
        category: "canned",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
    },
    {
        id: 15,
        name: { ar: "فاصولياء حمراء معلبة", en: "Red Kidney Beans" },
        description: {
            ar: "فاصولياء حمراء طرية وغنية بالألياف والبروتين، ممتازة للطبخ والمقالي والشوربات.",
            en: "Tender red kidney beans rich in fiber and protein, great for chili and salads."
        },
        price: 2.30,
        category: "canned",
        image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600&q=80"
    },
    {
        id: 16,
        name: { ar: "ورق عنب محشي جاهز 2 كغ", en: "Stuffed Vine Leaves 2kg" },
        description: {
            ar: "ورق عنب فاخر محشي بالرز والأعشاب وزيت الزيتون البكر، جاهز للتقديم الفوري مع الليمون.",
            en: "Premium vine leaves stuffed with rice, herbs, and extra virgin olive oil, ready to serve."
        },
        price: 8.50,
        category: "canned",
        image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&q=80"
    },
    {
        id: 17,
        name: { ar: "سردين بالزيت النباتي 125غ", en: "Sardines in Vegetable Oil" },
        description: {
            ar: "سمك سردين طازج ومحفوظ في زيت خفيف، غني بالأوميغا 3 والڤيتامينات.",
            en: "Fresh sardines preserved in light vegetable oil, rich in Omega-3 and vitamins."
        },
        price: 1.80,
        category: "canned",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80"
    },
    {
        id: 33,
        name: { ar: "تونة فاخرة بزيت الزيتون 185غ", en: "Solid White Tuna in Olive Oil" },
        description: {
            ar: "لحم تونة أبيض قطعة واحدة محفوظ بزيت الزيتون البكر الممتاز، غني بالبروتين والنكهة الأصيلة.",
            en: "Solid white meat tuna packed in extra virgin olive oil, rich in protein and pure taste."
        },
        price: 3.90,
        category: "canned",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80"
    },
    {
        id: 34,
        name: { ar: "بسلة خضراء ناعمة 400غ", en: "Sweet Tender Green Peas" },
        description: {
            ar: "حبات البسلة الخضراء الطازجة المحفوظة بأحدث التقنيات للحفاظ على الطراوة واللون الناصع.",
            en: "Tender sweet green peas preserved with state-of-the-art technology to lock in freshness."
        },
        price: 2.10,
        category: "canned",
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&q=80"
    },

    // ==========================================
    // Category: Spices & Seasoning (بهارات وتوابل)
    // ==========================================
    {
        id: 2,
        name: { ar: "بهارات كبسة ملكية", en: "Royal Kabsa Spices" },
        description: {
            ar: "خلطة سحرية من البهارات الأصلية المختارة بعناية لطبخ أشهى كبسة على الطريقة التقليدية.",
            en: "A magical blend of carefully selected authentic spices to cook the most delicious traditional Kabsa."
        },
        price: 4.00,
        category: "spices",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"
    },
    {
        id: 8,
        name: { ar: "فلفل أسود مطحون طازج", en: "Fresh Ground Black Pepper" },
        description: {
            ar: "فلفل أسود حب مطحون حديثاً ليحتفظ بنكهته القوية ورائحته النفاذة التي لا غنى عنها.",
            en: "Freshly ground black peppercorns to retain its strong flavor and indispensable pungent aroma."
        },
        price: 5.50,
        category: "spices",
        image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&q=80"
    },
    {
        id: 9,
        name: { ar: "كركم طبيعي نقي", en: "Pure Natural Turmeric" },
        description: {
            ar: "كركم طبيعي 100% مليء بالفوائد الصحية ويضفي لوناً ذهبياً رائعاً لأطباقك.",
            en: "100% natural turmeric full of health benefits that adds a wonderful golden color to your dishes."
        },
        price: 3.50,
        category: "spices",
        image: "https://images.unsplash.com/photo-1615486171448-4ffd3eb1e719?w=600&q=80"
    },
    {
        id: 18,
        name: { ar: "زعتر خليلي بالسمسم والزيت", en: "Traditional Sesame Zatar" },
        description: {
            ar: "زعتر بلدي مجفف مخلوط بالسمسم المحمص والسماق الأصلي، طعم شاميل لا يقاوم مع زيت الزيتون.",
            en: "Authentic wild thyme blend mixed with toasted sesame and sumac, perfect with olive oil."
        },
        price: 6.00,
        category: "spices",
        image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&q=80"
    },
    {
        id: 19,
        name: { ar: "كمون بلدي مطحون", en: "Ground Cumin" },
        description: {
            ar: "كمون صافي نقي برائحة وطعم فواح غني عن التعريف، أساسي للأطباق العربية والشوربات.",
            en: "Pure ground cumin with aromatic fragrance, essential for oriental dishes and soups."
        },
        price: 4.20,
        category: "spices",
        image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=600&q=80"
    },
    {
        id: 20,
        name: { ar: "سماق بلدي أحمر فاخر", en: "Premium Red Sumac" },
        description: {
            ar: "سماق طبيعي بمذاق حامض مميز ولون عقيقي جذاب، ممتاز للسلطات والمسخن والمشاوي.",
            en: "Natural sumac with distinctive tangy taste and deep color, perfect for salads and grills."
        },
        price: 5.00,
        category: "spices",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"
    },
    {
        id: 21,
        name: { ar: "بابريكا حلوة مطحونة", en: "Sweet Paprika Powder" },
        description: {
            ar: "مسحوق الفلفل الأحرف الحلو الفاخر لإعطاء صبغ مبهج وطعم دافئ لكافة أنواع الطبخ.",
            en: "Fine sweet red paprika powder adding rich color and mild warm flavor to all recipes."
        },
        price: 3.80,
        category: "spices",
        image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&q=80"
    },
    {
        id: 22,
        name: { ar: "بهارات شاورما شامية", en: "Shami Shawarma Spice Blend" },
        description: {
            ar: "خلطة الشاورما السورية الشهيرة المستوردة من أعرق العطارين لتبيل الدجاج واللحم.",
            en: "Authentic Syrian shawarma spice mix for seasoning chicken and meat effortlessly."
        },
        price: 4.80,
        category: "spices",
        image: "https://images.unsplash.com/photo-1615486171448-4ffd3eb1e719?w=600&q=80"
    },
    {
        id: 35,
        name: { ar: "هيل هندي مطحون فاخر 100غ", en: "Ground Green Cardamom 100g" },
        description: {
            ar: "هيل هندي درجة أولى برائحة عطرية نفاذة، يضفي نكهة ملكية للقهوة العربية والحلويات.",
            en: "First grade green cardamom powder with intense aroma, adds royal flavor to Arabic coffee and sweets."
        },
        price: 7.50,
        category: "spices",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"
    },
    {
        id: 36,
        name: { ar: "قرفة سيلانية مطحونة 200غ", en: "Ceylon Cinnamon Powder 200g" },
        description: {
            ar: "قرفة سيلانية ناعمة بطعم دافئ حلو ونكهة ملكية لا تقاوم للحلويات والمعجنات والمشروبات الساخنة.",
            en: "Fine Ceylon cinnamon with warm sweet flavor for pastries, desserts, and warm beverages."
        },
        price: 4.50,
        category: "spices",
        image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&q=80"
    },

    // ==========================================
    // Category: Nuts & Hospitality (مكسرات وضيافة)
    // ==========================================
    {
        id: 3,
        name: { ar: "مكسرات مشكلة محمصة فاخرة", en: "Premium Roasted Mixed Nuts" },
        description: {
            ar: "تشكيلة من أجود أنواع المكسرات (كاجو، فستق، لوز، بندق) المحمصة بعناية لضيافة راقية.",
            en: "An assortment of the finest nuts (cashews, pistachios, almonds, hazelnuts) carefully roasted for elegant hospitality."
        },
        price: 18.00,
        category: "nuts",
        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80"
    },
    {
        id: 10,
        name: { ar: "لوز أمريكي نيء", en: "Raw American Almonds" },
        description: {
            ar: "لوز نيء عالي الجودة، ممتاز للدايت وصحة القلب، يمكن استخدامه في الحلويات والطبخ.",
            en: "High-quality raw almonds, excellent for diet and heart health, can be used in desserts and cooking."
        },
        price: 14.00,
        category: "nuts",
        image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&q=80"
    },
    {
        id: 11,
        name: { ar: "فستق حلبي محمص ممتاز", en: "Roasted Pistachios Extra" },
        description: {
            ar: "فستق حلبي أصلي محمص ومملح بدرجة مثالية، الرفيق الأفضل للجلسات العائلية.",
            en: "Authentic Pistachios perfectly roasted and salted, the best companion for family gatherings."
        },
        price: 22.00,
        category: "nuts",
        image: "https://images.unsplash.com/photo-1563514067349-2e1bbbf120d8?w=600&q=80"
    },
    {
        id: 23,
        name: { ar: "كاجو جامبو محمص بالملح", en: "Jumbo Roasted Salted Cashews" },
        description: {
            ar: "كاجو حبة كبيرة قشدي ومحمص بمهارة، طعم غني ومقرمش يضمن لك تجربة ضيافة لا تُنسى.",
            en: "Jumbo creamy cashews expertly roasted and salted for a rich crunchy taste."
        },
        price: 19.50,
        category: "nuts",
        image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&q=80"
    },
    {
        id: 24,
        name: { ar: "جوز عين الجمل عالي النقاء", en: "Raw Walnuts Hearts" },
        description: {
            ar: "عين جمل طازج بلون أبيض ناصع ونكهة طبيعية قوية، ممتاز للذاكرة ولصناعة المعمول والحلويات.",
            en: "Fresh walnut kernels with high purity, great for brain health and baking oriental pastries."
        },
        price: 16.00,
        category: "nuts",
        image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&q=80"
    },
    {
        id: 25,
        name: { ar: "بندق محمص مقشر", en: "Peeled Roasted Hazelnuts" },
        description: {
            ar: "بندق محمص منزوع القشرة ناصع الجودة، ممتاز للشوكولاتة والمعجنات والأكل المباشر.",
            en: "Peeled roasted hazelnuts perfect for baking, chocolate making, or snacking."
        },
        price: 17.50,
        category: "nuts",
        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80"
    },
    {
        id: 37,
        name: { ar: "بزر خشب كبوشي محمص 500غ", en: "Roasted Pumpkin Seeds 500g" },
        description: {
            ar: "بزر قعرة محمص ومملح خفيف، مقرمش وغني بالزنك والمعادن المفيدة للجسم.",
            en: "Lightly salted roasted pumpkin seeds, crunchy and packed with healthy minerals."
        },
        price: 8.00,
        category: "nuts",
        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80"
    },

    // ==========================================
    // Category: Oils & Ghee (زيوت وسمن)
    // ==========================================
    {
        id: 4,
        name: { ar: "زيت زيتون بكر ممتاز (عصرة أولى)", en: "Extra Virgin Olive Oil (Cold Pressed)" },
        description: {
            ar: "زيت زيتون بكر عصرة أولى على البارد طبيعي 100%، مستخلص من أفضل مزارع الزيتون.",
            en: "First cold pressed extra virgin olive oil, 100% natural, extracted from the best olive farms."
        },
        price: 25.00,
        category: "oils",
        image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=600&q=80"
    },
    {
        id: 6,
        name: { ar: "سمن بلدي أصيل 1 كغ", en: "Authentic Baladi Ghee 1kg" },
        description: {
            ar: "سمن حيواني طبيعي يضفي نكهة رائعة لا تقاوم للحلويات العربية والطبخ الشرقي.",
            en: "Natural animal ghee that adds an irresistible wonderful flavor to Arabic sweets and oriental cooking."
        },
        price: 16.00,
        category: "oils",
        image: "https://images.unsplash.com/photo-1610450947702-8a9d184f4f72?w=600&q=80"
    },
    {
        id: 12,
        name: { ar: "زيت دوار الشمس الصافي 5 لتر", en: "Pure Sunflower Oil 5L" },
        description: {
            ar: "زيت دوار الشمس الصافي 100%، خفيف على المعدة ومثالي للقلي والطبخ اليومي.",
            en: "100% pure sunflower oil, light on the stomach and perfect for frying and daily cooking."
        },
        price: 12.50,
        category: "oils",
        image: "https://images.unsplash.com/photo-1474128507857-e6f6a15c138d?w=600&q=80"
    },
    {
        id: 26,
        name: { ar: "زيت ذرة نقي للطهي", en: "Pure Corn Oil for Cooking" },
        description: {
            ar: "زيت ذرة طبيعي خالي من الكوليسترول، يحافظ على صحتك ويتحمل درجات الحرارة العالية.",
            en: "Cholesterol-free natural corn oil, preserves health and withstands high frying heat."
        },
        price: 13.00,
        category: "oils",
        image: "https://images.unsplash.com/photo-1474128507857-e6f6a15c138d?w=600&q=80"
    },
    {
        id: 27,
        name: { ar: "سمن نباتي ممتاز 2 كغ", en: "Premium Vegetable Ghee 2kg" },
        description: {
            ar: "سمن نباتي خالي من الدهون المتحولة برائحة السمن البلدي الذكية لمختلف أصناف العجين والحلويات.",
            en: "Trans-fat free vegetable ghee with aromatic baladi flavor for pastries and doughs."
        },
        price: 9.00,
        category: "oils",
        image: "https://images.unsplash.com/photo-1610450947702-8a9d184f4f72?w=600&q=80"
    },
    {
        id: 38,
        name: { ar: "زيت زيتون بكر ممتاز تنكة 5L", en: "Extra Virgin Olive Oil 5L Tin" },
        description: {
            ar: "تنكة زيت زيتون معصور على البارد من جبال سوريا الخضراء، نكهة مركزة ونقاء تضمنه العائلة.",
            en: "5-Liter premium olive oil tin cold pressed from Syrian hills, pure authentic taste."
        },
        price: 48.00,
        category: "oils",
        image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=600&q=80"
    },

    // ==========================================
    // Category: Legumes & Grains (حبوب وبقوليات)
    // ==========================================
    {
        id: 28,
        name: { ar: "رز بسمتي هندي عنبر فاخر", en: "Premium Amber Basmati Rice 5kg" },
        description: {
            ar: "رز بسمتي عالي الجودة بطول حبة استثنائي ورائحة عنبرية زكية تفوح أثناء الطبخ.",
            en: "Extra-long grain Indian Basmati rice with rich aroma and fluffy texture when cooked."
        },
        price: 15.00,
        category: "legumes",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"
    },
    {
        id: 29,
        name: { ar: "عدس مجروش أحمر 1 كغ", en: "Red Split Lentils 1kg" },
        description: {
            ar: "عدس أحمر سريع الطهي، مصفي ومنقى بعناية فائقة، أساسي لشوربة العدس الملكية.",
            en: "Fast-cooking red split lentils, thoroughly cleaned, essential for delicious lentil soup."
        },
        price: 2.20,
        category: "legumes",
        image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&q=80"
    },
    {
        id: 30,
        name: { ar: "برغل بنّي ناعم للمتبل والكبة", en: "Fine Brown Bulgur 1kg" },
        description: {
            ar: "برغل بني فاخر ممتاز لتحضير التبولة والكبة والمقبلات الشامية الأصلية.",
            en: "Fine brown bulgur wheat perfect for preparing Tabouleh, Kibbeh, and authentic mezze."
        },
        price: 2.00,
        category: "legumes",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"
    },
    {
        id: 39,
        name: { ar: "رز مصري ممتاز حبة قصيرة 5 كغ", en: "Short Grain Egyptian Rice 5kg" },
        description: {
            ar: "رز مصري لؤلؤي ممتاز للمحاشي والطبخات اليومية والرز بالحليب الشامي.",
            en: "Short grain pearl Egyptian rice ideal for stuffed vegetables and traditional puddings."
        },
        price: 11.50,
        category: "legumes",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"
    },
    {
        id: 40,
        name: { ar: "عدس أخضر بلدي صحيح 1 كغ", en: "Whole Green Lentils 1kg" },
        description: {
            ar: "عدس أخضر كامل غني بالألياف والحديد، ممتاز للشوربات والمدردرة والطبخ الشامي الأصيل.",
            en: "Whole green lentils rich in iron and fiber, ideal for soups and Mujadara."
        },
        price: 2.40,
        category: "legumes",
        image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&q=80"
    },

    // ==========================================
    // Category: Sweets & Jams (مربيات وحلويات)
    // ==========================================
    {
        id: 31,
        name: { ar: "حلاوة طحينية بالمكسرات 800غ", en: "Halva with Pistachios 800g" },
        description: {
            ar: "حلاوة طحينية شامية أصلية مغطاة بالفستق الحلبي المقرمش، طعم تراثي يذوب في الفم.",
            en: "Authentic Shami Halva topped with crunchy pistachios, melt-in-the-mouth traditional taste."
        },
        price: 6.50,
        category: "sweets",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80"
    },
    {
        id: 32,
        name: { ar: "مربى التين البلدي 450غ", en: "Fig Jam 450g" },
        description: {
            ar: "مربى تين طبيعي مع قطع التين الكاملة والسمسم، محضّر بالطريقة البيتية العريقة.",
            en: "Natural fig jam with whole fig pieces and sesame seeds, prepared home-style."
        },
        price: 3.80,
        category: "sweets",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80"
    },
    {
        id: 41,
        name: { ar: "دبس تمر طبيعي فاخر 800غ", en: "Pure Date Molasses 800g" },
        description: {
            ar: "دبس تمر طبيعي 100% بدون سكر مضاف، ممتاز كمحلي طبيعي وللفطور الشامي مع الطحينة.",
            en: "100% pure natural date molasses with no added sugar, perfect healthy natural sweetener."
        },
        price: 4.90,
        category: "sweets",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80"
    },
    {
        id: 42,
        name: { ar: "طحينة سمسم نقي 100% 800غ", en: "Pure Sesame Tahini 800g" },
        description: {
            ar: "طحينة بيضاء فاخرة مصنوعة 100% من أجود حبوب السمسم المحمص، قوام مخملي وطعم غني.",
            en: "Velvety white tahini made 100% from roasted sesame seeds, rich creamy texture."
        },
        price: 5.80,
        category: "sweets",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80"
    },

    // ==========================================
    // Category: Olives & Pickles (مخللات وزيتون)
    // ==========================================
    {
        id: 43,
        name: { ar: "زيتون أخضر مجروح بلدي 1 كغ", en: "Pickled Syrian Green Olives 1kg" },
        description: {
            ar: "زيتون أخضر شاميل مجروح ومخلل بالليمون والفلفل الحار وزيت الزيتون البكر.",
            en: "Authentic Syrian green crushed olives pickled with lemon, chili peppers, and olive oil."
        },
        price: 6.00,
        category: "pickles",
        image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&q=80"
    },
    {
        id: 44,
        name: { ar: "مخلل مشكل شامي فاخر 1.5 كغ", en: "Syrian Mixed Pickles 1.5kg" },
        description: {
            ar: "تشكيلة مخللات شامية مقرمشة (خيار، لفت، زهرة، جزر) مخللة بطريقة منزلية متقنة.",
            en: "Crunchy traditional Shami mixed pickles (cucumber, turnip, cauliflower, carrot) in brine."
        },
        price: 4.50,
        category: "pickles",
        image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&q=80"
    }
];

// Helper to get translated name
function getProductName(product, lang) {
    if (!product || !product.name) return '';
    return product.name[lang] || product.name['ar'] || '';
}

// Helper to get translated description
function getProductDescription(product, lang) {
    if (!product || !product.description) return '';
    return product.description[lang] || product.description['ar'] || '';
}

// Helper to get translated category name
function getCategoryName(category, lang) {
    const categoryNames = {
        ar: {
            canned: "معلبات فاخرة",
            spices: "بهارات وتوابل",
            nuts: "مكسرات وضيافة",
            oils: "زيوت وسمن",
            legumes: "حبوب وبقوليات",
            sweets: "مربيات وحلويات",
            pickles: "مخللات وزيتون"
        },
        en: {
            canned: "Canned Goods",
            spices: "Spices & Seasoning",
            nuts: "Nuts & Hospitality",
            oils: "Oils & Ghee",
            legumes: "Legumes & Grains",
            sweets: "Jams & Sweets",
            pickles: "Olives & Pickles"
        }
    };
    return (categoryNames[lang] && categoryNames[lang][category]) || category;
}

window.products = products;
