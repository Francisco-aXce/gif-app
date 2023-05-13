import React from "react";

import "./Category.css";
import { Link } from "wouter";

export default function Category({ name }) {
  return (
    <Link href={`/search/${name}`}>
      <a href="/" className="category">
        <span>{name}</span>
      </a>
    </Link>
  );
}
