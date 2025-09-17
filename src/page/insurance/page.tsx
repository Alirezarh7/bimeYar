import {InsuranceOfferCard} from "../../component/general/insuranceCard/InsuranceOfferCard.tsx";
import {GadgetButton} from "../../component/general/GadgetButton/GadgetButton.tsx";
import {useNavigate} from "react-router-dom";
import {useWindowWidth} from "../../hook/useWindowWidth.ts";

interface Company {
    src: string;
    alt: string;
    name: string;
}

interface Stat {
    label: string;
    value: string;
}

interface FooterLink {
    label: string;
    isToggle?: boolean;
    href?: string;
}

interface InstallmentDetails {
    term: number;
    monthly: number;
    more: string;
}

export interface InsuranceItem {
    id: number;
    company: Company;
    stats: Stat[];
    price: string;
    oldPrice?: string;
    gift: string;
    footerLinks: FooterLink[];
    installmentDetails: InstallmentDetails;
}

const InsuranceOfferPage = () => {
    const navigate = useNavigate();
    const sampleData: InsuranceItem[] = [
        {
            id: 1,
            company: {
                src: "public/insuranceCompany/company1.webp",
                alt: "البرز",
                name: "بیمه البرز",
            },
            stats: [
                {label: "تعداد شعب پرداخت خسارت", value: "بیش از ۶۰ شعبه"},
                {label: "تعداد شعب پرداخت خسارت", value: "بیش از ۶۰ شعبه"},
                {label: "تعداد شعب پرداخت خسارت", value: "بیش از ۶۰ شعبه"},
            ],
            price: "۷۶,۶۳۱,۲۴۱",
            oldPrice: "9,000,000",
            gift: "بیمه موبایل رایگان سامان",
            footerLinks: [
                {
                    label: "جزئیات اقساط",
                    isToggle: true,
                },
                {
                    label: "مشاهده شرایط",
                    href: "#terms",
                },
            ],
            installmentDetails: {
                term: 12,
                monthly: 6300000,
                more: "قسطی بدون چک و سفته - اعتباری کارا - دستیار دریافت خسارت",
            },
        },
        {
            id: 2,
            company: {
                src: "public/insuranceCompany/company2.webp",
                alt: "سینا",
                name: "بیمه سینا",
            },
            stats: [
                {
                    label: "تعداد شعب پرداخت خسارت",
                    value: "بیش از ۶۰ شعبه در سراسر ایران",
                },
            ],
            price: "۷۶,۶۳۱,۲۴۱",
            gift: "بیمه موبایل رایگان سینا",
            footerLinks: [
                {
                    label: "جزئیات اقساط",
                    isToggle: true,
                },
                {
                    label: "مشاهده شرایط",
                    href: "#terms",
                },
            ],
            installmentDetails: {
                term: 12,
                monthly: 6300000,
                more: "قسطی بدون چک و سفته - اعتباری کارا - دستیار دریافت خسارت",
            },
        },
        {
            id: 3,
            company: {
                src: "public/insuranceCompany/company3.webp",
                alt: "دی",
                name: "بیمه دی",
            },
            stats: [
                {
                    label: "تعداد شعب پرداخت خسارت",
                    value: "بیش از ۶۰ شعبه در سراسر ایران",
                },
            ],
            price: "۷۶,۶۳۱,۲۴۱",
            gift: "بیمه موبایل رایگان سینا",
            footerLinks: [
                {
                    label: "جزئیات اقساط",
                    isToggle: true,
                },
                {
                    label: "مشاهده شرایط",
                    href: "#terms",
                },
            ],
            installmentDetails: {
                term: 12,
                monthly: 6300000,
                more: "قسطی بدون چک و سفته - اعتباری کارا - دستیار دریافت خسارت",
            },
        },
        {
            id: 4,
            company: {
                src: "public/insuranceCompany/company1.webp",
                alt: "البرز",
                name: "بیمه البرز",
            },
            stats: [
                {label: "تعداد شعب پرداخت خسارت", value: "بیش از ۶۰ شعبه"},
                {label: "تعداد شعب پرداخت خسارت", value: "بیش از ۶۰ شعبه"},
                {label: "تعداد شعب پرداخت خسارت", value: "بیش از ۶۰ شعبه"},
            ],
            price: "۷۶,۶۳۱,۲۴۱",
            oldPrice: "9,000,000",
            gift: "بیمه موبایل رایگان سامان",
            footerLinks: [
                {
                    label: "جزئیات اقساط",
                    isToggle: true,
                },
                {
                    label: "مشاهده شرایط",
                    href: "#terms",
                },
            ],
            installmentDetails: {
                term: 12,
                monthly: 6300000,
                more: "قسطی بدون چک و سفته - اعتباری کارا - دستیار دریافت خسارت",
            },
        },
    ];

    return (
        <>
            {sampleData.map((item) => (
                <InsuranceOfferCard {...item} />
            ))}
            {useWindowWidth() > 550 ? null :
                <GadgetButton
                    show={true}
                    onClick={() => navigate('/')}
                />
            }
        </>
    );
};
export default InsuranceOfferPage;
