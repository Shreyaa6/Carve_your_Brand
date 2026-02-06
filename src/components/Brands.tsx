import { Logos3 } from "@/components/ui/logos3"

const demoData = {
    heading: "Trusted by visionaries",
    logos: [
        {
            id: "logo-1",
            description: "Acne Studios",
            text: "Acne Studios",
            className: "h-7 w-auto",
        },
        {
            id: "logo-2",
            description: "Aesop",
            text: "Aēsop.",
            className: "h-7 w-auto",
        },
        {
            id: "logo-3",
            description: "Kinfolk",
            text: "KINFOLK",
            className: "h-7 w-auto",
        },
        {
            id: "logo-4",
            description: "Monocle",
            text: "MONOCLE",
            className: "h-7 w-auto",
        },
        {
            id: "logo-5",
            description: "Cereal",
            text: "CEREAL",
            className: "h-7 w-auto",
        },
        {
            id: "logo-6",
            description: "Gentle Monster",
            text: "GENTLE MONSTER",
            className: "h-7 w-auto",
        },
        {
            id: "logo-7",
            description: "Le Labo",
            text: "LE LABO",
            className: "h-4 w-auto",
        },
        {
            id: "logo-8",
            description: "Byredo",
            text: "BYREDO",
            className: "h-7 w-auto",
        },
    ],
};

const Brands = () => {
    return <Logos3 {...demoData} />
}

export default Brands
