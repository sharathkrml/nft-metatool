import { ThemeContext } from "@emotion/react";
import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Expand, ExpandContextType } from "../types";
export const ExpandContext = createContext({} as ExpandContextType);

const Expand = ({ children }: { children: React.ReactNode }) => {
  const [expand, setExpand] = useState<Expand>({
    propertiesExpand: false,
    statsExpand: false,
    levelsExpand: false,
    boostsExpand: false,
    datesExpand: false,
    detailExpand: true,
  });
  return (
    <ExpandContext.Provider value={[expand, setExpand]}>
      {children}
    </ExpandContext.Provider>
  );
};

export default Expand;

export const useExpand = () => {
  return useContext(ExpandContext);
};
