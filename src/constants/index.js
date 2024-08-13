import { bigCar1, bigCar2, bigCar3, thumbnailCar1, thumbnailCar2, thumbnailCar3, car4, car5, car6, car7, free, secure, love, vidal, paulihno } from "../assets/images";
export const navLinks = [
    {
        href:"#home",
        label:"Home",
    },
    {
        href:"#about-us",
        label:"About Us",
    },
    {
        href:"#products",
        label:"Products",
    },
    {
        href:"#contact-us",
        label:"Contact Us",

    },
];

export const statistics = [
    {
        value:"2k+",
        label:"Brands",
    },
    {
        value:"800+", 
        label:"Shops",
    },
    {
        value:"500k+",
        label:"Customers",
    },
];

export const Services = [
    {
        label:"Free Shipping",
        subtext:"Enjoy seamless shopping with our complimentary shipping services",
    },
    {
    
        label:"Secure payment",
        subtext:"Experience worry free transaction with our secure payment options",
    },
    {
    
        label:"Love to help you",
        subtext:"Our dedicated team is here to help you every step of the way",
    },

];

export const services=[
    {    
        imgURL:free,
        label:"Free Shipping",
        subtext:"Enjoy seamles shopping with our complimentary shipping services",
    },
    {
        imgURL:secure,
        label:"Secure Payment",
        subtext:"Experience worry free transaction with our secure payment options",
    },
    {
        imgURL:love,
        label:"Love to help you",
        subtext:"Our dedicated team is here to assist you every step of the way"
    }

];

export const footerLinks=[
    {
        title:"Products",
        links:[
            {
                name:"Landcruiser",
                link:"/",
            },
            {
                name:"Toyota",
                link:"/",
            },
            {
                name:"Arrier",
                link:"/"
            },
            {
                name:"Benz",
                link:"/",
            },
            {
                name:"Brobox",
                link:"/",
            },
            {
                name:"V8",
                link:"/",
            },
        ],
    },

    {
        title:"Help",
        links:[
            {
                name:"About Us",
                link:"/",
            },
            {
                name:"FAQS",
                link:"/",
            },
            {
                name:"How it works",
                link:"/",
            },
            {
                name:"Privacy policy",
                link:"/",
            },
            {
                name:"Payment",
                link:"/",
            }
        ],
    },

    {
        title:"Get in touch",
        links:[
            {
                name:"customer@quality.com",
                link:"mailto:customer@quality.com",
            },
            {
                name:"Weldon Rono",
                link:"tel:+254",
            },
        ],
    },
];

export const cars=[
    {
        thumbnail: thumbnailCar1,
        bigCar: bigCar1,
    },
    {
        thumbnail: thumbnailCar2,
        bigCar: bigCar2,

    },
    {
        thumbnail: thumbnailCar3,
        bigCar: bigCar3,
    },
];

export const products=[
    {
        imgURL: car4,
        name: "Benz",
        price:"$ 15000",
    },
     {
        imgURL: car5,
        name: "Chevrolet",
        price:"$ 6000",
    }, 
    {
        imgURL: car6,
        name: "Toyota",
        price:"$ 12500",
    },
     {
        imgURL: car7,
        name: "Wish",
        price:"$ 5000",
    },



];

export const reviews =[
    {
        imgURL: vidal,
        customerName: "Artur Vidal",
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceed my expectations. Highly recommended."
    },
    {
        imgURL: paulihno,
        customerName: "Paulihno",
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer." 


    },
];



