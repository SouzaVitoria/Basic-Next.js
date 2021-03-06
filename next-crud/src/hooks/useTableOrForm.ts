import { useState } from 'react';

export default function useTableOrForm() {

  const [visible, setVisible] = useState<"table" | "form">("table");

  const showForm = () => setVisible("form")
  const showTable = () => setVisible("table")

  return {
    isVisibleForm: visible === "form",
    isVisibleTable: visible === "table",
    showForm,
    showTable
  }
}
