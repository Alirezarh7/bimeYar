

interface IProps {
  loading: boolean;
  defaultDescription?: string;
  title?: string;
  description?: string;
  loaderColor?: string;
}

const NapLoading = ({
                      loading,
                      description,
                      title = "",
                      defaultDescription = "در حال بارگذاری",
                    }: IProps) => {
  if (!loading) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-100/90 z-[9999] flex items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="text-xl font-bold mb-2">{title}</div>
        <div>
          <img
            src={"/ziarat.png"}
            style={{ zIndex: 100, transform: "scale(0.8)" }}
            alt="loading"
          />
        </div>
        <div className="mt-2 text-gray-700">
          {description ? description : defaultDescription}
        </div>
        <div className="w-1/2 md:w-1/4 h-2 rounded-md bg-sliderColor relative overflow-hidden mt-4">
          <div className="absolute h-full w-1/4 animate-slide bg-goldColor rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default NapLoading;
