const products = [
    // Category: Canned
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
        name: { ar: "معجون طماطم مركز", en: "Tomato Paste" },
        description: {
            ar: "معجون طماطم طبيعي 100% بدون أي إضافات صناعية، يضفي لوناً وطعماً غنياً لطبخاتك.",
            en: "100% natural tomato paste with no artificial additives, adds rich color and taste to your cooking."
        },
        price: 3.20,
        category: "canned",
        image: "./images/portfolio-4.jpg"
    },

    // Category: Spices
    {
        id: 2,
        name: { ar: "بهارات كبسة ملكية", en: "Royal Kabsa Spices" },
        description: {
            ar: "خلطة سحرية من البهارات الأصلية المختارة بعناية لطبخ أشهى كبسة على الطريقة التقليدية.",
            en: "A magical blend of carefully selected authentic spices to cook the most delicious traditional Kabsa."
        },
        price: 4.00,
        category: "spices",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1615486171448-4ffd3eb1e719?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },

    // Category: Nuts
    {
        id: 3,
        name: { ar: "مكسرات مشكلة محمصة فاخرة", en: "Premium Roasted Mixed Nuts" },
        description: {
            ar: "تشكيلة من أجود أنواع المكسرات (كاجو، فستق، لوز، بندق) المحمصة بعناية لضيافة راقية.",
            en: "An assortment of the finest nuts (cashews, pistachios, almonds, hazelnuts) carefully roasted for elegant hospitality."
        },
        price: 18.00,
        category: "nuts",
        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: { ar: "فستق حلبي محمص", en: "Roasted Pistachios" },
        description: {
            ar: "فستق حلبي أصلي محمص ومملح بدرجة مثالية، الرفيق الأفضل للجلسات العائلية.",
            en: "Authentic Pistachios perfectly roasted and salted, the best companion for family gatherings."
        },
        price: 22.00,
        category: "nuts",
        image: "https://images.unsplash.com/photo-1563514067349-2e1bbbf120d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },

    // Category: Oils
    {
        id: 4,
        name: { ar: "زيت زيتون بكر ممتاز (عصرة أولى)", en: "Extra Virgin Olive Oil (Cold Pressed)" },
        description: {
            ar: "زيت زيتون بكر عصرة أولى على البارد طبيعي 100%، مستخلص من أفضل مزارع الزيتون.",
            en: "First cold pressed extra virgin olive oil, 100% natural, extracted from the best olive farms."
        },
        price: 25.00,
        category: "oils",
        image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: { ar: "سمن بلدي أصيل", en: "Authentic Baladi Ghee" },
        description: {
            ar: "سمن حيواني طبيعي يضفي نكهة رائعة لا تقاوم للحلويات العربية والطبخ الشرقي.",
            en: "Natural animal ghee that adds an irresistible wonderful flavor to Arabic sweets and oriental cooking."
        },
        price: 16.00,
        category: "oils",
        image: "https://images.unsplash.com/photo-1610450947702-8a9d184f4f72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: { ar: "زيت دوار الشمس الصافي", en: "Pure Sunflower Oil" },
        description: {
            ar: "زيت دوار الشمس الصافي 100%، خفيف على المعدة ومثالي للقلي والطبخ اليومي.",
            en: "100% pure sunflower oil, light on the stomach and perfect for frying and daily cooking."
        },
        price: 6.50,
        category: "oils",
        image: "https://images.unsplash.com/photo-1474128507857-e6f6a15c138d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

// Helper to get translated name
function getProductName(product, lang) {
    return product.name[lang] || product.name['ar'];
}

// Helper to get translated description
function getProductDescription(product, lang) {
    return product.description[lang] || product.description['ar'];
}
