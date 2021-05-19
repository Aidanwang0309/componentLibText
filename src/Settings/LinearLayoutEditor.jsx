const LinearLayoutEditor = ({onChange, values = {}}) => {
  return (
    <div>
      <div>
        <select name="axis" value={values.axis} onChange={onChange}>
          <option value="">Select</option>
          <option value="vertical">Vertical</option>
          <option value="horizontal">Horizontal</option>
        </select>
      </div>

      <div>
        <select
          name="distribution"
          value={values.distribution}
          onChange={onChange}
        >
          <option value="">Select</option>
          <option value="min">start</option>
          <option value="max">end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
      </div>

      <div>
        <input
          type="range"
          name="weight"
          min="1"
          max="100"
          value={values.weight}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export {LinearLayoutEditor};
