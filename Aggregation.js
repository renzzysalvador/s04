Employee
[
/* 1 */
{
    "_id" : ObjectId("632c1a6431f350abe603e65a"),
    "id" : "54321",
    "name" : "Jose Manalo",
    "age" : "35",
    "jobRole" : "Manager",
    "salary" : "200000"
},

/* 2 */
{
    "_id" : ObjectId("632c1a7631f350abe603e666"),
    "id" : "98760",
    "name" : "Mel",
    "age" : "22",
    "jobRole" : "Janitor",
    "salary" : "90000"
},

/* 3 */
{
    "_id" : ObjectId("632c1a8031f350abe603e66e"),
    "id" : "12345",
    "name" : "Trick",
    "age" : "22",
    "jobRole" : "Store Manager",
    "salary" : "100000"
},

/* 4 */
{
    "_id" : ObjectId("632c1a8d31f350abe603e671"),
    "id" : "09876",
    "name" : "Azi",
    "age" : "28",
    "jobRole" : "Bagger",
    "salary" : "78364"
},

/* 5 */
{
    "_id" : ObjectId("632c1a9731f350abe603e676"),
    "id" : "83764",
    "name" : "Dave",
    "age" : "29",
    "jobRole" : "Cashier",
    "salary" : "100000"
}
],

Inventory
[
/* 1 */
{
    "_id" : ObjectId("632c1ae531f350abe603e68c"),
    "id" : "FoodPack0012341",
    "name" : "REESE'S",
    "price" : "200",
    "quantity" : "10000",
    "category" : [ 
        "chocolates", 
        "sweets"
    ]
},

/* 2 */
{
    "_id" : ObjectId("632c1af031f350abe603e68f"),
    "id" : "FoodPack0012342",
    "name" : "SNICKERS",
    "price" : "150",
    "quantity" : "9000",
    "category" : [ 
        "chocolates", 
        "sweets"
    ]
},

/* 3 */
{
    "_id" : ObjectId("632c1afb31f350abe603e692"),
    "id" : "FoodPack0012343",
    "name" : "NESTLE BUTTERFINGER",
    "price" : "160",
    "quantity" : "8000",
    "category" : [ 
        "chocolates", 
        "sweets"
    ]
},

/* 4 */
{
    "_id" : ObjectId("632c1b0631f350abe603e695"),
    "id" : "FoodPack0012344",
    "name" : "HERSHEY'S",
    "price" : "160",
    "quantity" : "7000",
    "category" : [ 
        "chocolates", 
        "sweets"
    ]
},

/* 5 */
{
    "_id" : ObjectId("632c1b1031f350abe603e69a"),
    "id" : "FoodPack0012345",
    "name" : "M&MS",
    "price" : "100",
    "quantity" : "5000",
    "category" : [ 
        "chocolates", 
        "sweets"
    ]
},

/* 6 */
{
    "_id" : ObjectId("632c1b1a31f350abe603e69f"),
    "id" : "FoodPack0012346",
    "name" : "KIT KAT",
    "price" : "150",
    "quantity" : "4000",
    "category" : [ 
        "chocolates", 
        "sweets"
    ]
},

/* 7 */
{
    "_id" : ObjectId("632c1b2531f350abe603e6a2"),
    "id" : "FoodPack0012347",
    "name" : "NESTLE CRUNCH",
    "price" : "150",
    "quantity" : "3000",
    "category" : [ 
        "chocolates", 
        "sweets"
    ]
},

/* 8 */
{
    "_id" : ObjectId("632c1b2f31f350abe603e6a5"),
    "id" : "FoodPack0012348",
    "name" : "YORK PEPPERMINT PATTIE",
    "price" : "100",
    "quantity" : "2000",
    "category" : [ 
        "chocolates", 
        "sweets"
    ]
}
],


Payment
[
/* 1 */
{
    "_id" : ObjectId("632c1b6231f350abe603e6b8"),
    "id" : "FP0012341",
    "grossAmount" : "200.00",
    "discounts" : "0",
    "netAmount" : "200.00",
    "date/time" : "2001-01-01T16:00:00Z"
},

/* 2 */
{
    "_id" : ObjectId("632c1b6c31f350abe603e6bb"),
    "id" : "FP0012342",
    "grossAmount" : "300.00",
    "discounts" : "0",
    "netAmount" : "300.00",
    "date/time" : "2002-01-01T16:15:55Z"
},

/* 3 */
{
    "_id" : ObjectId("632c1b7631f350abe603e6c0"),
    "id" : "FP0012343",
    "grossAmount" : "400.00",
    "discounts" : "0",
    "netAmount" : "400.00",
    "date/time" : "2003-01-01T16:31:08Z"
},

/* 4 */
{
    "_id" : ObjectId("632c1b8431f350abe603e6c3"),
    "id" : "FP0012344",
    "grossAmount" : "500.00",
    "discounts" : "0",
    "netAmount" : "500.00",
    "date/time" : "2004-01-01T20:25:52Z"
},

/* 5 */
{
    "_id" : ObjectId("632c1b8e31f350abe603e6ca"),
    "id" : "FP0012345",
    "grossAmount" : "600.00",
    "discounts" : "0",
    "netAmount" : "600.00",
    "date/time" : "2005-01-01T08:45:12Z"
},

/* 6 */
{
    "_id" : ObjectId("632c1b9a31f350abe603e6cd"),
    "id" : "FP0012346",
    "grossAmount" : "700.00",
    "discounts" : "0",
    "netAmount" : "700.00",
    "date/time" : "2006-01-01T11:02:35Z"
},

/* 1 */
{
    "_id" : ObjectId("632c1beb31f350abe603e6e9"),
    "id" : "PROMO01",
    "name" : "Chocolate Sales",
    "period" : 15,
    "dailySales" : "40, 70, 80"
},

/* 2 */
{
    "_id" : ObjectId("632c1bf731f350abe603e6ec"),
    "id" : "PROMO02",
    "name" : "Biscuit Sales",
    "period" : 15,
    "dailySales" : "90, 100, 110"
},

/* 3 */
{
    "_id" : ObjectId("632c1c0131f350abe603e6f3"),
    "id" : "PROMO03",
    "name" : "Bread Sales",
    "period" : 15,
    "dailySales" : "120, 130, 140"
},

/* 4 */
{
    "_id" : ObjectId("632c1c0b31f350abe603e6f8"),
    "id" : "PROMO04",
    "name" : "Water Sales",
    "period" : 15,
    "dailySales" : "150, 160, 170"
}
]