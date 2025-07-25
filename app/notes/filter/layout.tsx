import React from "react";
import css from './LayoutNotes.module.css';

type NoteListb  = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

export default function NoteListLayout({
  children,
  sidebar,
}: NoteListb) {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <section className={css.notesWrapper}>{children}</section>
    </div>
  );
}