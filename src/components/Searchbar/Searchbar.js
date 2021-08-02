import { useState } from "react";
import { toast } from "react-toastify";
import S from "./Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      return toast("Enter a value to search.", {
        className: S.toaster,
      });
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={S.Searchbar}>
      <form className={S.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={S.SearchFormButton}>
          <span className={S.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={S.SearchFormInput}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
