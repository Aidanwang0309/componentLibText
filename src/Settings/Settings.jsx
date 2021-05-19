import {useRef, useState} from "react";
import {set, cloneDeep} from "lodash";
import {useDynamicUI} from "../DynamicUI/Contexts";
import {LinearLayoutEditor} from "./LinearLayoutEditor";
import {useMutationObserver} from "../hooks";
import css from "./settings.module.css";

const observerOptions = {attributes: true, childList: true, subtree: true};

const Settings = () => {
  const [structureName, setStructureName] = useState("");
  const {getStructureValue, setStructureValue} = useDynamicUI();
  const ref = useRef(null);

  useMutationObserver(
    (mutationsList, observer) => {
      // if (!ref.current) return;
      // Use traditional 'for loops' for IE 11
      for (const mutation of mutationsList) {
        if (mutation.type !== "attributes") return;

        setStructureName(ref.current.getAttribute(mutation.attributeName));
      }
    },
    ref,
    observerOptions,
  );

  const onChange = ({target: {value, name}}) => {
    const currentValue = cloneDeep(getStructureValue(structureName));
    const newValue = set(currentValue, name, value);

    setStructureValue(structureName, newValue);
  };

  return (
    <div id="settings" className={css.container} ref={ref}>
      {structureName && (
        <>
          <h1 style={{color: "white"}}>{structureName}</h1>
          <LinearLayoutEditor
            onChange={onChange}
            values={getStructureValue(structureName)}
          />
        </>
      )}
    </div>
  );
};

export {Settings};
