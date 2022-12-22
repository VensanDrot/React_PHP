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
    errorVariableSetter: React.Dispatch<SetStateAction<string>>;
  }[];
  variableHandler: (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<SetStateAction<string>>) => void;
}

const InputComponent: FC<IProps> = ({ data, variableHandler }) => {
  return (
    <>
      {data.map((e) => {
        return (
          <div key={e.id}>
            <label className="error">{e.errorVariable}</label>

            <div className="inputs">
              <label>{e.title}</label>
              <input
                min="0"
                value={e.variable}
                onChange={(ev) => variableHandler(ev, e.variableSetter)}
                type={e.input}
                id={e.id}
                maxLength={254}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default InputComponent;
