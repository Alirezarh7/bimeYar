import type { ReactNode, HTMLProps, FC, JSX } from "react";

interface RowContainerProps {
  /**
   * تعداد ستون‌ها در هر سطر را مشخص می‌کند
   */
  numberOfColumns?: number;
  /**
   * اگر true باشد، تمام آیتم‌ها را در یک سطر قرار می‌دهد
   */
  putColumnsInOneRow?: boolean;
  /**
   * کلاس CSS سفارشی برای کانتینر اصلی
   */
  className?: string;
  /**
   * پراپرتی‌های HTML برای هر آیتم (ستون)
   */
  RowItemProps?: HTMLProps<HTMLDivElement>;
  /**
   * پراپرتی‌های HTML برای هر سطر
   */
  RowContainerProps?: HTMLProps<HTMLDivElement>;
  /**
   * پراپرتی‌های HTML برای کانتینر اصلی کل کامپوننت
   */
  MainContainerProps?: HTMLProps<HTMLDivElement>;
  /**
   * فرزندان (آیتم‌ها) برای نمایش در سطرها
   */
  children?: ReactNode;
}

const CSS_ROW_CONTAINER = "RowContainer";
const CSS_ROW_CONTAINER__ROW_ITEM = "RowContainer-RowItem";
const CSS_ROW_CONTAINER__ROW_CONTAINER = "RowContainer-RowContainer";

/**
 * یک تابع کمکی برای ترکیب کردن کلاس‌های CSS
 * @param {...(string | undefined | null)} classes - نام کلاس‌ها برای ترکیب
 * @returns {string} کلاس‌های ترکیب شده
 */
const concatCss = (...classes: (string | undefined | null)[]): string => {
  return classes.filter(Boolean).join(" ");
};

/**
 * این کامپوننت فرزندان خود را در سطرها و ستون‌های قابل تنظیم نمایش می‌دهد
 * و هیچ وابستگی به کتابخانه‌های خارجی مثل MUI ندارد.
 */
const RowContainer: FC<RowContainerProps> = ({
  numberOfColumns = 3,
  putColumnsInOneRow = true,
  className,
  RowItemProps = {},
  RowContainerProps = {},
  MainContainerProps = {},
  children,
}) => {
  if (!children) {
    return null;
  }
  if (numberOfColumns <= 0) {
    throw new Error('"numberOfColumns" prop باید بزرگتر از صفر باشد.');
  }

  // محاسبه استایل برای هر آیتم (ستون)
  const getItemStyles = (component: any): React.CSSProperties => {
    // پراپرتی width روی کامپوننت فرزند به عنوان یک ضریب عمل می‌کند
    const componentWidthMultiplier = component?.props?.width ?? 1;
    const widthPercent = (100 / numberOfColumns) * componentWidthMultiplier;

    return {
      flex: `0 0 ${widthPercent}%`, // اجازه رشد و کوچک شدن نمی‌دهد و عرض پایه را تنظیم می‌کند
      maxWidth: `${widthPercent}%`,
      boxSizing: "border-box", // padding و border در عرض کل محاسبه می‌شوند
      padding: "8px", // ایجاد فاصله بین آیتم‌ها
    };
  };

  // رندر کردن آیتم‌های هر سطر
  const renderRowItems = (components: ReactNode[]) => {
    return components.map((component, index) => {
      if (!component) return null;
      // استایل‌های سفارشی از پراپرتی‌ها با استایل‌های محاسبه شده ترکیب می‌شوند
      const combinedStyle = {
        ...getItemStyles(component),
        ...RowItemProps.style,
      };

      return (
        <div
          key={`row-item-${index}`}
          {...RowItemProps}
          style={combinedStyle}
          className={concatCss(
            CSS_ROW_CONTAINER__ROW_ITEM,
            RowItemProps.className
          )}
        >
          {component}
        </div>
      );
    });
  };

  const childrenArray = Array.isArray(children) ? children : [children];
  const notNullChildren = childrenArray.filter(
    (component) => component != null
  );

  // رندر کردن کانتینر اصلی سطرها
  const renderContainerGrid = () => {
    // استایل پایه برای هر سطر
    const rowStyle: React.CSSProperties = {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
    };

    if (putColumnsInOneRow) {
      return (
        <div
          key="row-container-single"
          {...RowContainerProps}
          style={{ ...rowStyle, ...RowContainerProps.style }}
          className={concatCss(
            CSS_ROW_CONTAINER__ROW_CONTAINER,
            RowContainerProps.className
          )}
        >
          {renderRowItems(notNullChildren)}
        </div>
      );
    }

    const rows: JSX.Element[] = [];
    for (let i = 0; i < notNullChildren.length; i += numberOfColumns) {
      const chunk = notNullChildren.slice(i, i + numberOfColumns);
      rows.push(
        <div
          key={`row-container-${i}`}
          {...RowContainerProps}
          style={{ ...rowStyle, ...RowContainerProps.style }}
          className={concatCss(
            CSS_ROW_CONTAINER__ROW_CONTAINER,
            RowContainerProps.className
          )}
        >
          {renderRowItems(chunk)}
        </div>
      );
    }
    return rows;
  };

  return (
    <div
      className={concatCss(CSS_ROW_CONTAINER, className)}
      {...MainContainerProps}
    >
      {renderContainerGrid()}
    </div>
  );
};

// شبیه‌سازی پراپرتی‌های استاتیک برای سازگاری
RowContainer.displayName = "RowContainer";
(RowContainer as any).CSS_ROW_CONTAINER = CSS_ROW_CONTAINER;
(RowContainer as any).CSS_ROW_CONTAINER__ROW_ITEM = CSS_ROW_CONTAINER__ROW_ITEM;
(RowContainer as any).CSS_ROW_CONTAINER__ROW_CONTAINER =
  CSS_ROW_CONTAINER__ROW_CONTAINER;

export default RowContainer;
