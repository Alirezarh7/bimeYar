import { useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface IProps {
    dateForData: any;
    onDateChange: (date: string) => void;
    deleteData: (e: any) => void;
}

const DateSelector = ({ onDateChange, dateForData, deleteData }: IProps) => {
    const [date, setDate] = useState<DateObject>(
        new DateObject({ calendar: persian, locale: persian_fa })
    );
    const [showPicker, setShowPicker] = useState(false);

    const convertNumbersToPersian = (str: string) => {
        const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        return str.replace(/\d/g, (d) => persianDigits[Number(d)]);
    };

    const getLabel = () => {
        const today = new DateObject({ calendar: persian, locale: persian_fa });
        const diffInMs = date.toDate().getTime() - today.toDate().getTime();
        const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
        if (diffInDays === 0) return "امروز";
        if (diffInDays === -1) return "دیروز";
        if (diffInDays === 1) return "فردا";
        return date.format("dddd");
    };


    const handleChange = (days: number) => {
        const newDate = new DateObject(date).add(days, "days");
        setDate(newDate);
        const jsDate = new Date(
            newDate.toDate().getFullYear(),
            newDate.toDate().getMonth(),
            newDate.toDate().getDate(),
            12,
            0,
            0
        );
        onDateChange(jsDate.toISOString());
    };

    const handlePickerChange = (selectedDate: DateObject) => {
        const jsDate = new Date(
            selectedDate.toDate().getFullYear(),
            selectedDate.toDate().getMonth(),
            selectedDate.toDate().getDate(),
            12,
            0,
            0
        );
        setDate(selectedDate);
        onDateChange(jsDate.toISOString());
        setShowPicker(false);
    };

    const formatJalaliDate = () => {
        return date.format("dddd، D MMMM YYYY");
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <div
                className="flex items-center justify-center bg-gradient-to-r from-sliderColor/50 to-sliderColor rounded-lg p-4 gap-4"
                onClick={() => (dateForData ? null : setShowPicker(!showPicker))}
            >
                {dateForData ? (
                    <>
                        <button
                            className={"text-goldColor"}
                            onClick={(e: any) => {
                                e.stopPropagation();
                                handleChange(-1);
                            }}
                        >
                            ▶
                        </button>
                        <div
                            className="text-center cursor-pointer"
                            onClick={() => setShowPicker(!showPicker)}
                        >
                            <div className="font-bold text-white">{getLabel()}</div>
                            <div className="text-sm text-white">
                                {convertNumbersToPersian(formatJalaliDate())}
                            </div>
                            <div
                                className="pt-1 cursor-pointer text-red-700"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPicker(false);
                                    const today = new DateObject({
                                        calendar: persian,
                                        locale: persian_fa,
                                    });
                                    setDate(today);
                                    deleteData(null);
                                }}
                            >
                                حذف
                            </div>
                        </div>
                        <button
                            className={"text-goldColor"}
                            onClick={(e: any) => {
                                e.stopPropagation();
                                handleChange(1);
                            }}
                        >
                            ◀
                        </button>
                    </>
                ) : (
                    <strong className={"text-white"}>تمامی روزها</strong>
                )}
            </div>

            {showPicker && (
                <Calendar
                    className={"absolute top-40"}
                    calendar={persian}
                    locale={persian_fa}
                    value={date}
                    onChange={handlePickerChange}
                />
            )}
        </div>
    );
};

export default DateSelector;
