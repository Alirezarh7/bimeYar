import {RiArrowDropDownLine, RiCalendarView} from "react-icons/ri";
import {SlPrinter} from "react-icons/sl";
import {IoClose} from "react-icons/io5";
import {Controller} from "react-hook-form";
import {MdAddToPhotos, MdOutlineEdit} from "react-icons/md";
import CustomInput from "../input/Input.tsx";
import {useEffect, useState} from "react";
import {useWindowWidth} from "../../../hook/useWindowWidth.ts";
import {useQueryClient} from "@tanstack/react-query";

interface IProps {
  bodyData: { item: Record<string, any>[], totalPage?: number, queryKey?: string };
  headData: ({ title: string; key: string, numberInput?: boolean, name?: string, sub?: boolean  | null} | null)[];
  RowNumber?: boolean;
  print?: object;
  showMassage?: string;
  deleteItem?: () => void;
  control?: any;
  subgroup?: boolean
  onDelete?: (row: Record<string, any>) => void;
  onPrint?: (row: Record<string, any>) => void;
  onView?: (row: Record<string, any>) => void;
  onAdd?: (row: Record<string, any>) => void;
  onEdit?: (row: Record<string, any>) => void;
  onSubDelete?: (row: Record<string, any>) => void;
  onSubEdit?: (row: Record<string, any>) => void;
  setCurrentPage: any
  currentPage: number
}


const DataGrid = ({
                    bodyData,
                    headData,
                    RowNumber,
                    subgroup,
                    currentPage,
                    onView,
                    onPrint,
                    onDelete,
                    onAdd,
                    control,
                    onEdit,
                    onSubDelete,
                    onSubEdit,
                    setCurrentPage
                  }: IProps) => {
  const [dropDownIndex, setDropDownIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setDropDownIndex(prev => (prev === index ? null : index));
  };

  const queryClient = useQueryClient();

  const pageSize = useWindowWidth() > 550 ? 10 : 5;
  const totalItems = bodyData?.totalPage ?? 0;
  const totalPages = Math.ceil(totalItems / pageSize);
  useEffect(() => {
    if (bodyData?.queryKey && totalPages > 1) {
      queryClient.refetchQueries({queryKey: [bodyData.queryKey, currentPage, pageSize]});
    }
  }, [currentPage]);

  return (
    <>
      <div className="p-2">
        <div className=" w-full overflow-x-auto">
          <table className="table-auto w-full text-right text-sm">
            <thead className="bg-sliderBlueColor text-white text-sm ">
            <tr className={'text-center'}>
              {RowNumber && <th className="p-1 border border-goldColor whitespace-nowrap">ردیف</th>}
              {headData?.map((item, index) => {
                if (!item) return null
                return (
                  <th key={index}
                      className="p-1 border border-goldColor whitespace-nowrap">{item.title}</th>
                )
              })}
              {(onAdd || onEdit || onPrint || onDelete || onView) &&
                  <th className="p-1 border border-goldColor whitespace-nowrap">عملیات</th>}
            </tr>
            </thead>
            <tbody className="text-center">
            {bodyData?.item?.map((item, index) => {
              const hasSubItems = item?.subPeriods?.length > 0;
              return (
                <>
                  <tr
                    key={index}
                    className={`${item.status === 1 ? 'bg-gray-300' : ''}`}
                  >
                    {RowNumber && (
                      <td className="p-1 border border-goldColor whitespace-nowrap">
                        {index + 1}
                      </td>
                    )}
                    {headData?.map((headItem, idx) => {
                      if (!headItem) return null
                      return (
                        <td key={idx} className="p-1 border border-goldColor whitespace-nowrap">
                          {headItem.numberInput ? (
                            <Controller
                              name={`items.${index}.${headItem.name}`}
                              control={control}
                              render={({field: {value, onChange}}) => (
                                <CustomInput type="number" value={value} onChange={onChange}/>
                              )}
                            />
                          ) : (
                            item[headItem.key]
                          )}
                        </td>
                      )
                    })}
                    {/* شرط نمایش ستون عملیات برای هر سطر */}
                    {(onAdd || onEdit || onPrint || onDelete || onView) && (
                      <td className="p-1 border border-goldColor">
                        <div className="flex justify-around items-center">
                          {onEdit && (
                            <div className={'flex flex-col justify-center items-center'}>
                              <MdOutlineEdit className="text-yellow-600 w-5 h-5 cursor-pointer"
                                             onClick={() => onEdit(item)}/>
                              <p className={'text-[12px]'}>
                                ویرایش
                              </p>
                            </div>
                          )}
                          {onDelete && (
                            <div className={'flex flex-col justify-center items-center'}>
                              <IoClose className="text-red-700 w-5 h-5 cursor-pointer" onClick={() => onDelete(item)}/>
                              <p className={'text-[12px]'}>
                                حذف
                              </p>
                            </div>
                          )}
                          {subgroup && hasSubItems && (
                            <div className={'flex flex-col justify-center items-center'}>
                              <RiArrowDropDownLine className="text-blue-500 w-5 h-5 cursor-pointer"
                                                   onClick={() => toggleDropdown(index)}/>
                              <p className={'text-[12px]'}>
                                زیرگروه
                              </p>
                            </div>
                          )}
                          {onAdd && (
                            <div className={'flex flex-col justify-center items-center'}>
                              <MdAddToPhotos className="text-green-700 w-5 h-5 cursor-pointer"
                                             onClick={() => onAdd(item)}/>
                              <p className={'text-[12px]'}>
                                اضافه کردن زیرگروه
                              </p>
                            </div>
                          )}
                          {onView && (
                            <RiCalendarView className="text-green-700 w-5 h-5 cursor-pointer"
                                            onClick={() => onView(item)}/>
                          )}
                          {onPrint && (
                            <SlPrinter className="text-blue-700 w-5 h-5 cursor-pointer" onClick={() => onPrint(item)}/>
                          )}

                        </div>
                      </td>
                    )}
                  </tr>
                  {dropDownIndex === index && subgroup && item.subPeriods && (
                    <tr>
                      <td
                        colSpan={headData.length + (RowNumber ? 1 : 0) + ((onAdd || onEdit || onPrint || onDelete || onView) ? 1 : 0)}>
                        <div className="bg-gray-100 p-2">
                          <table className="table-auto w-full text-sm">
                            <thead>
                            <tr>
                              {headData.filter(h => h?.sub).map((h, i) => (
                                <th key={i} className="border border-goldColor p-1">{h?.title}</th>
                              ))}
                              {(onSubEdit || onSubDelete) &&
                                  <th className="p-1 border border-goldColor whitespace-nowrap">عملیات</th>}
                            </tr>
                            </thead>
                            <tbody>
                            {item.subPeriods.map((sub: any, subIdx: number) => (
                              <tr key={subIdx}>
                                {headData.filter(h => h?.sub).map((h, i) => {
                                  if (!h) return null;
                                  return (
                                  <td key={i} className="border border-goldColor p-1">{sub[h.key] ?? "-"}</td>
                                  )
                                })}
                                <td className="p-1 border border-goldColor">
                                  <div className="flex justify-around items-center">
                                    {onSubEdit && (
                                      <div className={'flex flex-col justify-center items-center'}>
                                        <MdOutlineEdit className="text-green-700 w-6 h-6 cursor-pointer"
                                                       onClick={() => onSubEdit(sub)}/>
                                        <p className={'text-[12px]'}>
                                          ویرایش
                                        </p>
                                      </div>
                                    )}
                                    {onSubDelete && (
                                      <div className={'flex flex-col justify-center items-center'}>
                                        <IoClose className="text-red-700 w-6 h-6 cursor-pointer"
                                                 onClick={() => onSubDelete(sub)}/>
                                        <p className={'text-[12px]'}>

                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            ))}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 ? (
          <div className="  flex justify-center bg-sliderBlueColor gap-2 text-sm">
            <div className="py-2  flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
                className="px-3 m-1 py-1 border border-goldColor rounded hover:bg-gray-100 hover:text-black text-white disabled:opacity-50"
              >
                قبلی
              </button>

              <span className="w-fit p-1 py-1 text-goldColor">{currentPage}</span>
              <span className="px-3 py-1 text-goldColor">...</span>
              <span className="w-fit p-1 py-1 text-goldColor">{totalPages}</span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
                className="px-3 m-1 py-1 border border-goldColor rounded hover:bg-gray-100 hover:text-black text-white disabled:opacity-50"
              >
                بعدی
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DataGrid;

// <div className=" md:hidden flex flex-col gap-5 p-1.5 py-4    ">
//     {bodyData?.item?.map((item, index) => {
//         const hasSubItems = item?.subPeriods?.length > 0;
//         return (
//             <div key={index} className="border border-sliderBlueColor/40 rounded-2xl shadow  bg-white">
//                 <div className={'relative'}>
//                     <div className={'absolute -top-3.5  rounded-full bg-white w-fit px-1.5 '}>
//                         {index + 1}
//                     </div>
//                 </div>
//                 <div className="flex flex-col gap-2 pt-2 ">
//                     {headData.map((headItem, idx) => {
//                         if (!headItem) return null
//                         return (
//                             <div key={idx} className="flex justify-between items-center px-2 text-sm">
//                                 <span className="font-semibold text-gray-600">{headItem.title}:</span>
//                                 <span className="text-gray-800">
//                     {headItem.numberInput ? (
//                         <Controller
//                             name={`items.${index}.${headItem.name}`}
//                             control={control}
//                             render={({field: {value, onChange}}) => (
//                                 <NumberInput value={value ?? 0} onChange={onChange}/>
//                             )}
//                         />
//                     ) : (
//                         item[headItem.key]
//                     )}
//                   </span>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 <div className='border-t border-sliderBlueColor/40 '>
//                     <div className="flex justify-center gap-3 my-2 p-2">
//                         {onView &&
//                             <RiCalendarView className="text-green-700 w-5 h-5 cursor-pointer"
//                                             onClick={() => onView(item)}/>}
//                         {onAdd &&
//                             <div className={'flex flex-col justify-center items-center'}>
//                                 <MdAddToPhotos className="text-green-700 w-5 h-5 cursor-pointer" onClick={() => onAdd(item)}/>
//                                 <p>
//                                     اضافه
//                                 </p>
//                             </div>
//                         }
//                         {onPrint &&
//                             <SlPrinter className="text-blue-700 w-5 h-5 cursor-pointer" onClick={() => onPrint(item)}/>}
//                         {onEdit &&
//                             <div className={'flex flex-col justify-center items-center'}>
//                                 <MdOutlineEdit className="text-yellow-600 w-5 h-5 cursor-pointer"
//                                                onClick={() => onEdit(item)}/>
//                                 <p>
//                                     ویرایش
//                                 </p>
//                             </div>
//                         }
//                         {onDelete &&
//                             <div className={'flex flex-col justify-center items-center'}>
//                                 <IoClose className="text-red-700 w-5 h-5 cursor-pointer" onClick={() => onDelete(item)}/>
//                                 <p>
//                                     حذف
//                                 </p>
//                             </div>
//                         }
//                         {hasSubItems && subgroup && (
//                             <div className=" flex flex-col items-center justify-center text-sm  cursor-pointer"
//                                  onClick={() => setOpenIndex(openIndex === index ? null : index)}>
//                                 <p className={'text-blue-600 font-medium'}>{openIndex === index ? '‌▲' : '‌▼'}</p>
//                                 <p>
//                                     زیرگروه
//                                 </p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 {
//                     openIndex === index && hasSubItems && subgroup && (
//                         <div className="mt-2 mb-3 px-3 py-2 bg-gray-50 rounded-md border border-dashed border-gray-300">
//                             {item.subPeriods.map((sub: any, subIndex: number) => (
//                                 <div key={subIndex} className="border-b border-gray-300 py-2 text-xs last:border-none">
//                                     {headData.filter(h => h?.sub).map((h, i) => {
//                                         if (!h) return null;
//                                         return(
//                                             <div key={i} className="flex justify-between items-center px-2 text-gray-700">
//                                                 <span className="font-semibold">{h.title}:</span>
//                                                 <span>{sub[h.key] ?? '-'}</span>
//                                             </div>
//                                         )
//                                     })}
//                                     {(onSubEdit || onSubDelete) && ( // ← نمایش دکمه‌های عملیات فقط در صورت فعال بودن
//                                         <div className="flex justify-center gap-3 mt-2">
//                                             {onSubEdit && (
//                                                 <MdOutlineEdit
//                                                     className="text-green-700 w-5 h-5 cursor-pointer"
//                                                     onClick={() => onSubEdit(sub)}
//                                                 />
//                                             )}
//                                             {onSubDelete && (
//                                                 <IoClose
//                                                     className="text-red-700 w-5 h-5 cursor-pointer"
//                                                     onClick={() => onSubDelete(sub)}
//                                                 />
//                                             )}
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     )
//                 }
//             </div>
//
//         )
//             ;
//     })}
//     {totalPages > 1 ? (
//         <div className=" relative flex justify-center text-sm">
//             <div className=" bg-white/100 absolute top-2 gap-2 flex items-center ">
//                 <button
//                     disabled={currentPage === 1}
//                     onClick={() => {
//                         setCurrentPage(currentPage - 1);
//                     }}
//                     className="px-3  py-1 border border-goldColor rounded hover:bg-gray-100  disabled:opacity-50"
//                 >
//                     قبلی
//                 </button>
//
//                 <span className="w-fit p-1 py-1 ">{currentPage}</span>
//                 <span className="px-3 py-1 ">...</span>
//                 <span className="w-fit p-1 py-1 ">{totalPages}</span>
//                 <button
//                     disabled={currentPage === totalPages}
//                     onClick={() => {
//                         setCurrentPage(currentPage + 1);
//                     }}
//                     className="px-3  py-1 border border-goldColor rounded hover:bg-gray-100  disabled:opacity-50"
//                 >
//                     بعدی
//                 </button>
//             </div>
//         </div>
//     ) : null}
// </div>



