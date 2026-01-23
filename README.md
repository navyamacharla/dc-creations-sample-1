# dc-creations-sample-1
Sample ecommerce application

**Step 1**: Download/Clone the project from Github Repository **dc-creations-sample-1**
**Step 2**: Navigate into the project folder. Open terminal in it and run **npm install** command to download packages
**Step 3:** Run the application with **npm run dev** command
**Step 4:** To connect with backend, go to src/api/product.api.ts. In Line no. 21, add the corresponsing backend url with end point. A sample request is given in Line no. 23.

**Note:**

Sample request from frontend - http://localhost:5173/api/products?query=kurta&page=1&limit=12
Sample expected response from backend -

{
    "status": "success",
    "data": {
        "results": [
            {
                "id": "1001",
                "name": "Floral Printed Cotton Kurta",
                "price": 2499,
                "currency": "INR",
                "desktopImageUrl": "https://images.meesho.com/images/products/387726308/iubze_512.webp?width=512",
                "mobileImageUrl": "https://images.meesho.com/images/products/387726308/iubze_512.webp?width=512",
                "ctaLink": "/products/1001",
                "altText": "Floral Printed Cotton Kurta",
                "sortOrder": 13
            },
            ....
        ]
    },
    "total": 17,
    "page": 2,
    "limit": 12
}
