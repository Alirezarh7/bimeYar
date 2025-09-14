import {InsuranceOfferCard} from "../../component/general/insuranceCard/InsuranceOfferCard.tsx";


const InsuranceOfferPage = () => {
    const sampleData = [
        {
            company: {
                src: "public/insuranceCompany/company1.webp",
                alt: "البرز",
                name: "بیمه البرز"
            },
            stats: [
                {label: "تعداد شعب پرداخت خسارت", value: "بیش از ۶۰ شعبه"},
                {label: "تعداد شعب پرداخت خسارت", value: "بیش از ۶۰ شعبه"},
                {label: "تعداد شعب پرداخت خسارت", value: "بیش از ۶۰ شعبه"}
            ],
            price: "۷۶,۶۳۱,۲۴۱",
            oldPrice: "9,000,000",
            gift: "بیمه موبایل رایگان سامان",
            footerLinks: [
                {
                    label: "جزئیات اقساط",
                    isToggle: true
                },
                {
                    label: "مشاهده شرایط",
                    href: "#terms"
                }
            ],
            installmentDetails: {
                term: 12,
                monthly: 6300000,
                more: "قسطی بدون چک و سفته - اعتباری کارا - دستیار دریافت خسارت"
            }
        },
        {
            company: {
                src: "public/insuranceCompany/company2.webp",
                alt: "سینا",
                name: "بیمه سینا"
            },
            stats: [
                {
                    label: "تعداد شعب پرداخت خسارت",
                    value: "بیش از ۶۰ شعبه در سراسر ایران"
                }
            ],
            price: "۷۶,۶۳۱,۲۴۱",
            gift: "بیمه موبایل رایگان سینا",
            footerLinks: [
                {
                    label: "جزئیات اقساط",
                    isToggle: true
                },
                {
                    label: "مشاهده شرایط",
                    href: "#terms"
                }
            ],
            installmentDetails: {
                term: 12,
                monthly: 6300000,
                more: "قسطی بدون چک و سفته - اعتباری کارا - دستیار دریافت خسارت"
            }
        },
        {
            company: {
                src: "public/insuranceCompany/company3.webp",
                alt: "دی",
                name: "بیمه دی"
            },
            stats: [
                {
                    label: "تعداد شعب پرداخت خسارت",
                    value: "بیش از ۶۰ شعبه در سراسر ایران"
                }
            ],
            price: "۷۶,۶۳۱,۲۴۱",
            gift: "بیمه موبایل رایگان سینا",
            footerLinks: [
                {
                    label: "جزئیات اقساط",
                    isToggle: true
                },
                {
                    label: "مشاهده شرایط",
                    href: "#terms"
                }
            ],
            installmentDetails: {
                term: 12,
                monthly: 6300000,
                more: "قسطی بدون چک و سفته - اعتباری کارا - دستیار دریافت خسارت"
            }
        },
    ]


    return (
        <>
            {sampleData.map((item) => (
                <InsuranceOfferCard {...item}  />
            ))}
        </>
    );
}
export default InsuranceOfferPage;
