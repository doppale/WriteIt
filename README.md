# Write It
The application allows you to save and catalog notes.

### Smart contract


- `totalNotes()` - Returns the number of notes created.

- `totalCategories()` - Returns the number of categories created.

- `createCategory(title)` - Creates a category.

- `deleteCategory(id)` - Removes the category.

- `getCategoryById(id, throwIfNotFound = false)` - Gets the category by Id.

- `getCategoriesByWallet(wallet)` - Gets the categories owned by the specified wallet.

- `saveNote(noteJson, categoryId)` - Saves a note.

- `deleteNote(id)` - Deletes the note.

- `getNoteById(noteId)` - Returns a note with the specified Id.

- `getCategoryNotes(categoryId)` - Returns notes from a category with the specified Id.
