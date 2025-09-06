import {Tabs, TabList, Tab, TabPanels, TabPanel} from "./Tabs.tsx";
import {motion} from 'framer-motion'


export const QuoteMiniCard = () => {
  return (
    <div>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>شخص ثالث</Tab>
          <Tab>بدنه</Tab>
          <Tab>درمان</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <form className="grid gap-3">
              <input className="border p-2 rounded" placeholder="سال ساخت"/>
              <input className="border p-2 rounded" placeholder="شهر"/>
              <div className="flex items-center justify-between mt-2">
                <div className="text-sm text-gray-500">شروع از ۳۵۰٬۰۰۰ تومان</div>
                <button className="rounded-full px-4 py-2 bg-primary text-white">مشاهده قیمت‌ها</button>
              </div>
            </form>
          </TabPanel>

          <TabPanel>
            <div className="text-sm text-gray-600">فرم بدنه (نمونه)</div>
          </TabPanel>

          <TabPanel>
            <div className="text-sm text-gray-600">فرم درمان (نمونه)</div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <motion.div initial={{opacity: 0, y: 8}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}
                  className="mt-4 text-xs text-gray-500">
        نتایج به‌صورت نمونه و نمایشی هستند.
      </motion.div>
    </div>
  )
}
