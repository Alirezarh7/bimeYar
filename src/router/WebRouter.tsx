import { Route, Routes } from "react-router-dom";
import { Paths } from "./paths";


const WebRouter = () => {

  return (
    <Routes>
      {Paths.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};

export default WebRouter;
