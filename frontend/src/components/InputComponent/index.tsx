import React, { FC, SetStateAction } from "react";
import "./index.css";

interface IProps {
  data: {
    id: string;
    title: string;
    input: string;
    variable: string;
    variableSetter: React.Dispatch<SetStateAction<string>>;
    errorVariable: string | undefined;
  }[];
  variableHandler: (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<SetStateAction<string>>) => void;
}

const InputComponent: FC<IProps> = ({ data, variableHandler }) => {
  return (
    <>
      {data.map((e) => {
        return (
          <div key={e.id}>
            <label>{e.errorVariable}</label>

            <div className="inputs">
              <label>{e.title}</label>
              <input
                value={e.variable}
                onChange={(ev) => variableHandler(ev, e.variableSetter)}
                type={e.input}
                id={e.id}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default InputComponent;
