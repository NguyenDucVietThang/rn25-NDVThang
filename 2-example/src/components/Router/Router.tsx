import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Detail from "./page/Detail";
import Form from "./page/Form";
import ListPage from "./page/ListPage";
import styles from "./styles.module.css";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <ul className={styles.navigation}>
          <li className={styles.link}>
            <Link to="/">List Page</Link>
          </li>
          <li className={styles.link}>
            <Link to="/forms">Form</Link>
          </li>
          <li className={styles.link}>
            <Link to="/detail">Detail</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/forms" element={<Form />} />
          <Route path="/detail" element={<Detail />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
