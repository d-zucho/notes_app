const notes = [];

const filters = {
	filterText: '',
};

/**  -- Add new todo to list */
document.querySelector('#new-note-form').addEventListener('submit', function(e) {
	e.preventDefault();

	//assign input text as note title
	const noteTitle = e.target.elements.noteTitleText.value;

	// add note object to notes array
	notes.push({
		title: noteTitle,
		body: '',
	});
	e.target.elements.noteTitleText.value = '';

	document.querySelector('#notes').innerHTML = '';
	renderNotes(notes, filters);
});

/**  ---  Display Notes  ---  */
const renderNotes = function(notes, filters) {
	notes.forEach(note => {
		const noteEl = document.createElement('div');
		const txt = document.createElement('span');
		txt.textContent = note.title;

		const editButton = document.createElement('button');
		editButton.textContent = 'edit';

		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'x';

		noteEl.appendChild(txt);
		noteEl.appendChild(editButton);
		noteEl.appendChild(deleteButton);

		document.querySelector('#notes').appendChild(noteEl);
	});
};
