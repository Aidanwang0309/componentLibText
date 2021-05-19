import {useEffect} from "react";

const useMutationObserver = (callback, ref, options) => {
  useEffect(() => {
    if (!ref.current) return;

    const targetNode = ref.current;

    if (!targetNode) return;

    const observer = new MutationObserver(callback);

    observer.observe(targetNode, options);

    return () => {
      observer.disconnect();
    };
  }, [callback, options, ref]);
};

export {useMutationObserver};
