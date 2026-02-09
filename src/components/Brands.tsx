import { Logos3 } from "@/components/ui/logos3"

const demoData = {
    heading: "Trusted by visionaries",
    logos: [
        {
            id: "logo-1",
            description: "Mimzer",
            text: "Mimzer",
            className: "h-7 w-auto",
        },
        {
            id: "logo-2",
            description: "Pulse",
            text: "Pulse",
            className: "h-7 w-auto",
        },
        {
            id: "logo-3",
            description: "Kiddo",
            text: "Kiddo",
            className: "h-7 w-auto",
        },
        {
            id: "logo-4",
            description: "Cavite",
            text: "Cavite",
            className: "h-7 w-auto",
        },
        {
            id: "logo-5",
            description: "Sri Gangotri industries",
            text: "Sri Gangotri industries",
            className: "h-7 w-auto",
        },
    ],
};

const Brands = () => {
    return <Logos3 {...demoData} />
}

export default Brands
