import { useState } from "react";

function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="filter-section">
      <button className="filter-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className={`caret ${open ? "open" : ""}`}>▾</span>
      </button>

      {open && <div className="filter-options">{children}</div>}
    </div>
  );
}

export default function Filters() {
  return (
    <aside className="filters">
      {/* CUSTOMIZABLE */}
      <label className="customizable">
        <input type="checkbox" />
        <span>CUSTOMIZABLE</span>
      </label>

      {/* FILTER GROUPS */}
      <FilterSection title="IDEAL FOR">
        <label><input type="checkbox" /> Men</label>
        <label><input type="checkbox" /> Women</label>
        <label><input type="checkbox" /> Baby & Kids</label>
      </FilterSection>

      <FilterSection title="OCCASION">
        <label><input type="checkbox" /> All</label>
      </FilterSection>
      <FilterSection title="WORK">
        <label><input type="checkbox" /> All</label>
      </FilterSection>
      <FilterSection title="FABRIC">
        <label><input type="checkbox" /> All</label>
      </FilterSection>
      <FilterSection title="SEGMENT">
        <label><input type="checkbox" /> All</label>
      </FilterSection>
      <FilterSection title="SUITABLE FOR">
        <label><input type="checkbox" /> All</label>
      </FilterSection>
      <FilterSection title="RAW MATERIALS">
        <label><input type="checkbox" /> All</label>
      </FilterSection>
      <FilterSection title="PATTERN">
        <label><input type="checkbox" /> All</label>
      </FilterSection>
    </aside>
  );
}
