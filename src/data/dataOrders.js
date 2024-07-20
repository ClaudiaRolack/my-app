import { clarySage, copaiba, aromaTouchTechnique } from "../assets/images";

export let dataOrders = [
    {
        id: 1,
        userId: 2,
        createdAt: "2021-01-01T00:00:00.000Z",
        items: [
            {
                productId: 1,
                name: "Clary Sage",
                image: clarySage,
                price: 52000,
                quantity: 1,
            },
            {
                productId: 2,
                name: "Copaiba",
                image: copaiba,
                price: 50000,
                quantity: 1,
            },
            {
                productId: 40,
                name: "Kit de masaje",
                image: aromaTouchTechnique,
                price: 143000,
                quantity: 1,
            },
        ],
        totalPrice: 245000
    },
    {
        id: 2,
        userId: 1,
        createdAt: "2021-02-23T00:00:00.000Z",
        items: [
            {
                productId: 1,
                name: "Clary Sage",
                image: clarySage,
                price: 52000,
                quantity: 1,
            },
            {
                productId: 2,
                name: "Copaiba",
                image: copaiba,
                price: 50000,
                quantity: 1,
            },
            {
                productId: 40,
                name: "Kit de masaje",
                image: aromaTouchTechnique,
                price: 143000,
                quantity: 1,
            },
        ],
        totalPrice: 245000
    }
]