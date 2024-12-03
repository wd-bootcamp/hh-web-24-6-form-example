const INITIAL_DATA = {
  task: "",
  done: false,
};

export default function Form({
  defaultValue = INITIAL_DATA,
  onSubmit,
  onCancel,
  editMode = false,
}) {
  async function internalHandleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    await onSubmit(data); // makes sure that no data is lost from the defaultValue (e.g. the task that is edited)
    event.target.reset();
  }

  return (
    <form onSubmit={internalHandleSubmit}>
      <input type="text" name="task" defaultValue={defaultValue.task} />
      {editMode && (
        <button type="button" onClick={onCancel}>
          cancel
        </button>
      )}
      <button type="submit">submit</button>
    </form>
  );
}
