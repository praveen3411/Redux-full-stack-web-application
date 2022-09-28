import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function FilterComp() {
  const [useparms, usesetParms] = useSearchParams();
  const initilizeValues = useparms.getAll("category");
  const initialsorting = useparms.getAll("sorting");
  const [category, setCategory] = useState(initilizeValues || []);
  const [sorting, setSorting] = useState(initialsorting[0] || "");
  let handleFllter = (e) => {
    let newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };
  const handleSort = (e) => {
    setSorting(e.target.value);
  };
  useEffect(() => {
    if (category || sorting) {
      let parms = {};
      category && (parms.category = category);
      sorting && (parms.sorting = sorting);
      usesetParms(parms);
    }
  }, [category, usesetParms, sorting]);
  return (
    <div>
      <h1>Filter</h1>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            checked={category.includes("Novel")}
            onChange={handleFllter}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Science_Fiction"
            checked={category.includes("Science_Fiction")}
            onChange={handleFllter}
          />
          <label>Science_Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Thriller"
            checked={category.includes("Thriller")}
            onChange={handleFllter}
          />
          <label>Thriller</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            checked={category.includes("Motivational")}
            onChange={handleFllter}
          />
          <label>Motivational</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="gods"
            checked={category.includes("gods")}
            onChange={handleFllter}
          />
          <label>gods</label>
        </div>
      </div>
      <div onChange={handleSort}>
        <h2>Sort Components</h2>
        <div>
          <input
            type="radio"
            value={"asc"}
            name="sortBy"
            defaultChecked={sorting === "asc"}
          />
          <label>Assending</label>
        </div>
        <div>
          <input
            type="radio"
            value={"desc"}
            name="sortBy"
            defaultChecked={sorting === "desc"}
          />
          <label>Dessinding</label>
        </div>
      </div>
    </div>
  );
}
